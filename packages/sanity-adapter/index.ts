import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';
import { type QueryParams } from 'sanity';
import { sanityClient } from 'sanity:client';

export default defineConfig({
	integrations: [
		sanity({
			projectId: import.meta.env.SANITY_PROJECT_ID,
			dataset: import.meta.env.SANITY_DATASET,

			// Set useCdn to false if you're building statically.
			// see https://www.sanity.io/guides/sanity-astro-blog
			useCdn: false
		})
	]
});

/**
 * Executes a query against the CMS using sanityClient.
 *
 * @param {Object} options - Options for executing the CMS query.
 * @param {string} options.query - The CMS query to be executed.
 * @param {QueryParams} [options.params] - Optional parameters to be used in the query.
 * @return {Promise<Object>} A promise that resolves to the query response containing the data.
 */
export async function executeCmsQuery<QueryResponse>({
	query,
	params
}: {
	query: string;
	params?: QueryParams;
}) {
	const { result } = await sanityClient.fetch<QueryResponse>(query, params ?? {}, {
		filterResponse: false
	});

	return {
		data: result
	};
}
