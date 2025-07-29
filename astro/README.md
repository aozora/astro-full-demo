# Astro Sanity MP Starter Kit

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

## Deploy

We'll create two separate deployments which use the different build scripts (`build:production` and `build:preview`). 
Create two Vercel projects, connect both to the project's GitHub repo and set the Build Command 
under Settings > General > Build & Development Settings to npm run build:production for the static production site 
and to npm run build:preview for the SSR preview site. 
You should be able to do the same for Netlify, Cloudflare or similar providers.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
|:------------------------|:-------------------------------------------------|
| `pnpm install`          | Installs dependencies                            |
| `pnpm dev`              | Starts local dev server at `localhost:4321`      |
| `pnpm build:production` | Build your production site to `./dist/`          |
| `pnpm build:preview`    | Build your preview site (with SSR) to `./dist/`  |
| `pnpm preview`          | Preview your build locally, before deploying     |
| `pnpm astro ...`        | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help`  | Get help using the Astro CLI                     |

