import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes'
import {seoMetaFields} from 'sanity-plugin-seo'

export default defineConfig({
  name: 'default',
  title: 'Astro Full Demo',
  projectId: 'tu1qdt6g',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), seoMetaFields()],

  schema,
})
