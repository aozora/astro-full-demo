// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-full-demo.vercel.app/',
	integrations: [svelte(), sitemap()],
	vite:{
		ssr:{
			noExternal:['phosphor-svelte']
		}
	}
});
