// import {DocumentLocationResolver} from 'sanity/presentation'
// import {getDraftId} from '@sanity/id-utils'
// import {map} from 'rxjs'
//
// // Pass 'context' as the second argument
// export const locations: DocumentLocationResolver = (params, context) => {
//   // Set up locations for post documents
//   if (params.type === 'post') {
//     const query = {
//       fetch: `*[_id==$id][0]{slug,title}`,
//       listen: `*[_id in [$id,$draftId]]`,
//     }
//
//     const params = {id, draftId: getDraftId(id)}
//     // Subscribe to the latest slug and title
//     const doc$ = context.documentStore.listenQuery(
//       query,
//       params,
//       {perspective: 'drafts'}, // returns a draft article if it exists
//     )
//     // Return a streaming list of locations
//     return doc$.pipe(
//       map((doc) => {
//         // If the document doesn't exist or have a slug, return null
//         if (!doc || !doc.slug?.current) {
//           return null
//         }
//         return {
//           locations: [
//             {
//               title: doc.title || 'Untitled',
//               href: `/post/${doc.slug.current}`,
//             },
//             {
//               title: 'Posts',
//               href: '/',
//             },
//           ],
//         }
//       }),
//     )
//   }
//   return null
// }

import {
  defineDocuments,
  defineLocations,
  DocumentLocationResolver,
  DocumentLocationResolvers,
} from 'sanity/presentation'
import type {PresentationPluginOptions} from 'sanity/presentation'

export const mainDocuments = defineDocuments([
  {
    route: '/:slug',
    filter: `_type == "page" && slug.current == $slug`,
  },
  {
    route: '/news/:slug',
    filter: `_type == "post" && slug.current == $slug`,
  },
])

export const locations: DocumentLocationResolvers = {
  site: defineLocations({
    message: 'The site settings are used on all pages',
    tone: 'positive',
  }),

  page: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (document) => {
      if (!(document?.title && document?.slug)) {
        return
      }

      return {
        locations: [
          {
            title: document.title || 'Untitled',
            href: `/${document.slug}`,
          },
        ],
      }
    },
  }),

  // Add more locations for other post types
  post: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (document) => {
      if (!(document?.title && document?.slug)) {
        return
      }

      return {
        locations: [
          {
            title: document.title || 'Untitled',
            href: `/news/${document.slug}`,
          },
        ],
      }
    },
  }),
}
