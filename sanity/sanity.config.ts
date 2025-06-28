import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'
import structure from './structure'
import {resolve} from './lib/resolve'
import {theme} from 'https://themer.sanity.build/api/hues?preset=stereofidelic&caution=fbd024;300'

export default defineConfig({
  name: 'default',
  title: 'Astro Full Demo',
  theme,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      resolve,
      previewUrl: String(process.env.SANITY_STUDIO_URL),
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
