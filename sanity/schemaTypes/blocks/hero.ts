import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'videoYoutube',
      type: 'object',
      fields: [
        {name: 'provider', type: 'string', title: 'Provider'},
        {name: 'providerUid', type: 'string', title: 'ProviderUid'},
        {name: 'thumbnailUrl', type: 'string', title: 'ThumbnailUrl'},
        {name: 'title', type: 'string', title: 'Title'},
        {name: 'url', type: 'string', title: 'Url'},
        {name: 'width', type: 'string', title: 'Width'},
        {name: 'height', type: 'string', title: 'Height'},
      ],
    }),
  ],
})
