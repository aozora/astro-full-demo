import {defineField, defineType} from 'sanity'
import {QuotesIcon} from '@phosphor-icons/react/dist/csr/Quotes'

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon: QuotesIcon,
  fields: [
    defineField({
      name: 'quote',
      type: 'blockContentBasic',
    }),
  ],
})
