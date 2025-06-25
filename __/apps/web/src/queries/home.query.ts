import { metaTagsFragment, responsiveImageFragment } from './__fragments.ts';
import { heroRecord } from './records/heroRecord.ts';
import { quoteRecord } from './records/quoteRecord.ts';
import { textAndMediumRecord } from './records/textAndMediumRecord.ts';

export const homeQuery = `
query HomeQuery {
  page: home {
    seo: _seoMetaTags {
      ...metaTagsFragment
    }

    modules {
      ${heroRecord}
      ${quoteRecord}
      ${textAndMediumRecord}
    }
  }
}

${metaTagsFragment}
${responsiveImageFragment}
`;
