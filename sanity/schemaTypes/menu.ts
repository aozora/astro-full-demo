import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'menuItem',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'path',
      type: 'string',
    }),
  ],
})

// export const menuType = defineType({
//   name: 'menu',
//   title: 'Menu',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'items',
//       type: 'array',
//       of: [{type: 'menuItem'}],
//     }),
//   ],
// })
