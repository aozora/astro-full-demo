import {defineField, defineType} from 'sanity'

export const quoteType = defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      type: 'blockContent',
    }),
  ],
})
