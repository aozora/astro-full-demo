import {type DefaultDocumentNodeResolver} from 'sanity/structure'
import {urlSearchParamPreviewPerspective} from '@sanity/preview-url-secret/constants'
import {Iframe, UrlResolver} from 'sanity-plugin-iframe-pane'

// REF: https://www.sanity.io/plugins/iframe-pane

const getPreviewUrl: UrlResolver = (doc, perspective) => {
  if (!doc) {
    console.log(`getPreviewUrl: doc is null`)
    return undefined
  }

  let url
  // @ts-ignore
  const slug = doc?.slug?.current
  const type = doc?._type

  switch (type) {
    case 'news':
      url = `${process.env.SANITY_STUDIO_PREVIEW_URL}/news?${urlSearchParamPreviewPerspective}=${perspective.perspectiveStack}`
      break

    case 'post':
      url = `${process.env.SANITY_STUDIO_PREVIEW_URL}/news/${slug}?${urlSearchParamPreviewPerspective}=${perspective.perspectiveStack}`
      break

    case 'page':
      url = `${process.env.SANITY_STUDIO_PREVIEW_URL}/${slug}?${urlSearchParamPreviewPerspective}=${perspective.perspectiveStack}`
      break

    default:
      url = `${process.env.SANITY_STUDIO_PREVIEW_URL}`
  }

  return url
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  // Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `home`:
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
