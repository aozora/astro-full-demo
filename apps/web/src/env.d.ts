/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
	readonly DATOCMS_API_TOKEN: string;
	readonly DATOCMS_ENVIRONMENT: string;
	readonly DATOCMS_PREVIEW_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
