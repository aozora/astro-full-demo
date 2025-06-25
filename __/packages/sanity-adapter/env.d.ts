/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
interface ImportMetaEnv {
	readonly SANITY_PROJECTID: string;
	readonly SANITY_DATASET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
