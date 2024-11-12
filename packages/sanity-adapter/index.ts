import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
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
