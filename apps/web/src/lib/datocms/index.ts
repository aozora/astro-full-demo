import { ApiError, executeQuery as libExecuteQuery } from '@datocms/cda-client';

interface QueryOptions {
	token: string;
	variables?: any;
	includeDrafts: boolean;
	environment: string;
}

export async function executeDatoCmsQuery(
	query: string,
	options?: any,
	variables?: any,
	preview: boolean = false
) {
	const environment = import.meta.env.DATOCMS_ENVIRONMENT || 'main';

	try {
		const queryOptions: QueryOptions = {
			...options,
			token: import.meta.env.DATOCMS_API_TOKEN,
			variables,
			includeDrafts: preview,
			environment
		};

		return await libExecuteQuery(query, queryOptions);
	} catch (e) {
		handleQueryError(e);
		throw e;
	}
}

function handleQueryError(e: any) {
	if (e instanceof ApiError) {
		if (e.query) {
			console.log({ query: e.query });
		}
		if (e.options) {
			console.error(e.options);
		}
		// Log additional error information if needed
	} else {
		console.error(e);
	}
}

// export type RequestType = {
// 	query: string;
// 	variables?: any;
// 	preview?: boolean;
// };
//
// export async function cmsRequest({ query, variables, preview }: RequestType): Promise<any | null> {
// 	let endpoint = 'https://graphql.datocms.com';
//
// 	if (import.meta.env.DATOCMS_ENVIRONMENT) {
// 		endpoint += `/environments/${import.meta.env.DATOCMS_ENVIRONMENT}`;
// 	}
//
// 	if (preview) {
// 		endpoint += `/preview`;
// 	}
//
// 	// // eslint-disable-next-line no-console
// 	// console.log(endpoint);
// 	// // eslint-disable-next-line no-console
// 	// console.log(import.meta.env.DATOCMS_API_TOKEN);
// 	// console.log(JSON.stringify(preview === undefined ? String(false) : String(preview)));
// 	const res = await fetch(endpoint, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			accept: 'application/json',
// 			Authorization: `Bearer ${import.meta.env.DATOCMS_API_TOKEN}`,
// 			'X-Environment': import.meta.env.DATOCMS_ENVIRONMENT
// 			// 'X-Include-Drafts': `${preview === undefined ? String(false) : String(preview)}`
// 		},
// 		body: JSON.stringify({
// 			query,
// 			variables
// 		})
// 	});
// 	const json = await res.json();
//
// 	if (json.errors) {
// 		console.error('Ouch! The query has some errors!', json.errors);
// 		throw json.errors;
// 	}
//
// 	// console.log(json.data);
//
// 	return json.data;
// }
