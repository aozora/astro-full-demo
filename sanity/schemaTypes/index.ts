import blockContentBasic from './common/blockContentBasic'
import blockContent from './common/blockContentFull'
import category from './documents/post/category'
import post from './documents/post/post'
import author from './documents/post/author'
import menu from './common/menu'
import site from './documents/site'
import hero from './blocks/hero'
import quote from './blocks/quote'
import home from './documents/home'
import textAndMedium from './blocks/textAndMedium'
import page from './documents/page'

export const schemaTypes = [
  site,
  menu,
  home,
  page,
  hero,
  quote,
  textAndMedium,
  post,
  author,
  category,
  blockContent,
  blockContentBasic,
]
