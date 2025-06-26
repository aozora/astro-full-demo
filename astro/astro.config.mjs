// @ts-check
// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";
const { SANITY_PROJECT_ID, SANITY_DATASET } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  "",
);

import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

const projectId = SANITY_PROJECT_ID;
const dataset = SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  site: "https://astro-full-demo.vercel.app/",
  integrations: [
    sanity({
      projectId: projectId,
      dataset: dataset,
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // studioBasePath: "/admin",
      apiVersion: "2025-06-25",
    }),
    svelte({ extensions: [".svelte"] }),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ["phosphor-svelte"],
    },
  },
});
