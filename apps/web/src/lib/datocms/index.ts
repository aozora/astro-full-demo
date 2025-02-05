// import { ApiError, executeQuery as libExecuteQuery } from '@datocms/cda-client';
//
// interface QueryOptions {
// 	token: string;
// 	variables?: any;
// 	includeDrafts: boolean;
// 	environment: string;
// }
//
// export async function executeDatoCmsQuery(
// 	query: string,
// 	options?: any,
// 	variables?: any,
// 	preview: boolean = false
// ) {
// 	const environment = import.meta.env.DATOCMS_ENVIRONMENT || 'main';
//
// 	try {
// 		const queryOptions: QueryOptions = {
// 			...options,
// 			token: import.meta.env.DATOCMS_API_TOKEN,
// 			variables,
// 			includeDrafts: preview,
// 			environment
// 		};
//
// 		return await libExecuteQuery(query, queryOptions);
// 	} catch (e) {
// 		handleQueryError(e);
// 		throw e;
// 	}
// }
//
// function handleQueryError(e: any) {
// 	if (e instanceof ApiError) {
// 		if (e.query) {
// 			console.log({ query: e.query });
// 		}
// 		if (e.options) {
// 			console.error(e.options);
// 		}
// 		// Log additional error information if needed
// 	} else {
// 		console.error(e);
// 	}
// }
