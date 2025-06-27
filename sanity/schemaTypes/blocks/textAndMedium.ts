import {defineField, defineType} from 'sanity'
import {ArticleMediumIcon} from '@phosphor-icons/react/dist/csr/ArticleMedium'

export default defineType({
  name: 'textAndMedium',
  title: 'TextAndMedium',
  type: 'document',
  icon: ArticleMediumIcon,
  fields: [
    // defineField({
    //   name: 'text',
    //   type: 'blockContent',
    //   // validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'blockContentBasic',
    }),
    defineField({
      name: 'alignment',
      type: 'string',
      // of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Only text', value: 'text-only'},
          {title: 'Text right, picture left', value: 'text-right'},
          {title: 'Text left, picture right', value: 'text-left'},
          {title: 'Text center, picture below', value: 'vertical-text-picture'},
          {title: 'Picture center, text below', value: 'vertical-picture-text'},
        ],
        layout: 'dropdown',
      },
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
    }),
  ],
})
