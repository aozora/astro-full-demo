import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import {urlSearchParamPreviewPerspective} from '@sanity/preview-url-secret/constants'
import {Iframe, UrlResolver} from 'sanity-plugin-iframe-pane'

// REF: https://www.sanity.io/plugins/iframe-pane

const getPreviewUrl: UrlResolver = (doc, perspective) => {
  // @ts-ignore
  const url = doc?.slug?.current
    ? // @ts-ignore
      `${process.env.SANITY_STUDIO_PREVIEW_URL}/${doc.slug.current}?${urlSearchParamPreviewPerspective}=${perspective.perspectiveStack}`
    : `${process.env.SANITY_STUDIO_PREVIEW_URL}`

  // console.log({url})
  return url
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `page`:
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: getPreviewUrl,
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
