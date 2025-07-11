import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'
import structure from './structure'
import {resolve} from './lib/resolve'
import {defaultDocumentNode} from './defaults/defaultDocumentNode'
// import {theme} from 'https://themer.sanity.build/api/hues?preset=stereofidelic&caution=fbd024;300'
// import {theme} from './theme/theme'

export default defineConfig({
  name: 'default',
  title: 'Astro Full Demo',
  // theme,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool({
      defaultDocumentNode,
      structure,
    }),
    presentationTool({
      resolve,
      // previewUrl: String(process.env.SANITY_STUDIO_PREVIEW_URL),
      previewUrl: {
        initial: String(process.env.SANITY_STUDIO_PREVIEW_URL),
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      allowOrigins: ['http://localhost:*'],
    }),
    visionTool(),
    seoMetaFields(),
  ],

  schema: {
    types: schemaTypes,
  },

  tools: (prev, {currentUser}) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    if (isAdmin) {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
})
