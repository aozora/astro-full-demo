import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      console.log({subtitle})
      return {
        title,
        subtitle: subtitle.current,
      }
    },
  },
})
