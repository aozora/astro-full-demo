import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'site',
  title: 'Site',
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
      title: 'Site title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'menu'}],
    }),
    defineField({
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      metaTitle: 'title',
    },
    prepare(selection) {
      const {metaTitle} = selection?.metaTitle || ''
      return {
        title: metaTitle,
      }
    },
  },
})
