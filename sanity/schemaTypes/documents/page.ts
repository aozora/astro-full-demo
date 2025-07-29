import {defineArrayMember, defineField, defineType} from 'sanity'
import {FileIcon} from '@phosphor-icons/react/dist/csr/File'
import {AutoPreviewPane} from '../../components/AutoPreviewPane'

export default defineType({
  name: 'page',
  title: 'Page',
  // icon: FileIcon,
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'blocks',
      title: 'Blocks',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),

    // modular page
    defineField({
      name: 'blocks',
      type: 'array',
      title: 'Blocks',
      group: 'blocks',
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'textAndMedium',
          type: 'textAndMedium',
        }),
        defineArrayMember({
          name: 'quote',
          type: 'quote',
        }),
      ],
    }),

    defineField({
      type: 'string',
      name: 'hiddenPreviewField',
      components: {
        field: AutoPreviewPane,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title,
        subtitle: subtitle.current,
      }
    },
  },
})
