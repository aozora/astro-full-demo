import { ApiError, executeQuery as libExecuteQuery } from '@datocms/cda-client';

export async function executeQuery(
	query: string,
	options?: any,
	variables?: any,
	preview: boolean = false
) {
	try {
		const result = await libExecuteQuery(query, {
			...options,
			token: import.meta.env.DATOCMS_API_TOKEN,
			variables,
			includeDrafts: preview,
			environment: import.meta.env.DATOCMS_ENVIRONMENT
				? import.meta.env.DATOCMS_ENVIRONMENT
				: 'main'
		});

		return result;
	} catch (e) {
		if (e instanceof ApiError) {
			// Information about the failed request
			console.error(e.query);
			console.error(e.options);

			// Information about the response
			console.log(e.response.status);
			console.log(e.response.statusText);
			console.log(e.response.headers);
			console.log(e.response.body);
		} else {
			// Handle other types of errors
			console.error(e);
			throw e;
		}
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
