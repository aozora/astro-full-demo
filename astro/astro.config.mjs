// @ts-check
// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_STUDIO_URL } = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  "",
);

import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

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
      stega: {
        studioUrl: `${SANITY_STUDIO_URL}`,
      },
    }),
    svelte({ extensions: [".svelte"] }),
    sitemap(),
    react(),
  ],
  vite: {
    ssr: {
      noExternal: ["phosphor-svelte"],
    },
  },

  // conditional output, use SSR only in preview
  output: process.env.PUBLIC_ENV === "preview" ? "server" : "static",
  adapter: process.env.PUBLIC_ENV === "preview" ? vercel() : undefined,
});
