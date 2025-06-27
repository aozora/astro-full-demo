import {defineField, defineType} from 'sanity'
import {NewspaperClippingIcon} from '@phosphor-icons/react/dist/csr/NewspaperClipping'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: NewspaperClippingIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'cover',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'slug',
      media: 'cover',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      console.log({subtitle})
      return {
        title,
        subtitle: subtitle.current,
        media,
      }
    },
  },

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'cover',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
