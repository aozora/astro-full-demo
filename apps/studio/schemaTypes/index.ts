import {heroType} from './heroType'
import {quoteType} from './quoteType'
import {pageHomeType} from './pageHomeType'
import {textAndMediumType} from './textAndMediumType'
import {blockContentType} from './blockContentType'
import {SchemaTypeDefinition} from 'sanity'
import {menuItemType} from './menuType'
import {siteType} from './siteType'

// export const schemaTypes = [blockContentType, pageHomeType, heroType, quoteType, textAndMediumType]

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    siteType,
    blockContentType,
    pageHomeType,
    heroType,
    quoteType,
    textAndMediumType,
    menuItemType,
    // menuType,
  ],
}
