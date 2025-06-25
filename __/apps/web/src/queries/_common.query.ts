import { globalSeoFragment, metaTagsFragment } from './__fragments.ts';

export const commonQuery = `
  query Common {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
      globalSeo {
        ...globalSeoFragment
      }
    }
    
    menu {
      items {
        id
        title
        path
      }
    }   

  }

  ${metaTagsFragment}
  ${globalSeoFragment}
`;
