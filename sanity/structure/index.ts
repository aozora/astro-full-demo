import {StructureBuilder} from 'sanity/structure'
import {WallIcon} from '@phosphor-icons/react/dist/csr/Wall'
import {PackageIcon} from '@phosphor-icons/react/dist/csr/Package'
import {FadersIcon} from '@phosphor-icons/react/dist/csr/Faders'
import {FilesIcon} from '@phosphor-icons/react/dist/csr/Files'
import {Blocks} from '../schemaTypes/blocks'
import site from '../schemaTypes/documents/site'
import home from '../schemaTypes/documents/home'
import {HouseIcon} from '@phosphor-icons/react/dist/csr/House'
import {FileIcon} from '@phosphor-icons/react/dist/csr/File'
import {NewspaperClippingIcon} from '@phosphor-icons/react/dist/csr/NewspaperClipping'

/**
 * Custom Structure Tool
 * https://www.sanity.io/docs/studio/structure-tool-api
 */
export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // site settings
      // ref: https://www.sanity.io/docs/studio/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
      S.listItem().title('Site Settings').icon(FadersIcon).child(
        S.document().schemaType('site').documentId('site').title('Site Settings'),
        // S.documentTypeList(site.name).title('Site Settings')
      ),
      S.divider(),

      // list of blocks
      S.listItem()
        .title('Blocks')
        .icon(WallIcon)
        .child(
          S.list()
            .title('Blocks')
            .items(
              Blocks.map((block) =>
                S.listItem()
                  .title(block.title || block.name)
                  .icon(block.icon || PackageIcon)
                  .child(S.documentTypeList(block.name).title(block.title || block.name)),
              ),
            ),
        ),
      S.divider(),

      // pages
      S.listItem()
        .title('Pages')
        .icon(FilesIcon)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home')
                .schemaType('home')
                .icon(HouseIcon)
                .child(S.documentTypeList(home.name).title('Pages')),
              // S.listItem().title('Page').schemaType('page').icon(FileIcon),
              // .child(S.documentTypeList(home.name).title('Pages')),
              S.documentTypeListItem('page').title('Pages'),
            ]),
        ),
      S.divider(),

      // blog
      S.listItem()
        .title('News')
        .icon(NewspaperClippingIcon)
        .child(
          S.list()
            .title('News')
            .items([S.documentTypeListItem('post').title('News')]),
        ),
      S.divider(),
    ])
