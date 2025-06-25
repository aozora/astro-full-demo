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
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Seo',
      name: 'seo',
      type: 'seoMetaFields',
      group: 'seo',
    }),
    defineField({
      title: 'Menu',
      name: 'menu',
      type: 'array',
      of: [{type: 'menuItem'}],
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
