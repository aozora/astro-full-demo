import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textAndMedium',
  title: 'TextAndMedium',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'blockContent',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alignment',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Text right', value: 'text-right'},
          {title: 'Text left', value: 'text-left'},
        ],
      },
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
    }),
  ],
})
