import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageHomeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
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
      name: 'modules',
      type: 'array',
      title: 'Page modules',
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
  ],
  preview: {
    select: {
      metaTitle: 'seo',
    },
    prepare(selection) {
      const {metaTitle} = selection?.metaTitle || ''
      return {
        title: metaTitle || 'seo',
      }
    },
  },
})
