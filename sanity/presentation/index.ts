import {PresentationPluginOptions} from 'sanity/presentation'
import {locations, mainDocuments} from './resolve'

export const presentation: PresentationPluginOptions = {
  allowOrigins: ['http://localhost:*'],
  previewUrl: {
    initial: String(process.env.SANITY_STUDIO_PREVIEW_URL),
    previewMode: {
      enable: '/api/preview-mode/enable',
    },
  },

  resolve: {
    mainDocuments,
    locations,
  },
}
