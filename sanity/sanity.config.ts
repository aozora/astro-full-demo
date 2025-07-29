import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {seoMetaFields} from 'sanity-plugin-seo'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {assist} from '@sanity/assist'
import {presentation} from './presentation'
import {structure} from './structure'
// import {theme} from 'https://themer.sanity.build/api/hues?preset=stereofidelic&caution=fbd024;300'
// import {theme} from './theme/theme'

export default defineConfig({
  name: 'default',
  title: 'Astro Full Demo',
  // theme,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  plugins: [
    structureTool(
      structure, // comment this before running typegen
    ),
    presentationTool(presentation),
    assist(),
    visionTool(),
    seoMetaFields(),
    media(),
  ],

  schema: {
    types: schemaTypes,
  },

  // allow Vision tool only for admins
  tools: (prev, {currentUser}) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    if (isAdmin) {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
})
