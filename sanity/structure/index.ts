import {StructureBuilder} from 'sanity/structure'
import {WallIcon} from '@phosphor-icons/react/dist/csr/Wall'
import {PackageIcon} from '@phosphor-icons/react/dist/csr/Package'
import {FadersIcon} from '@phosphor-icons/react/dist/csr/Faders'
import {FilesIcon} from '@phosphor-icons/react/dist/csr/Files'
import {Blocks} from '../schemaTypes/blocks'
import site from '../schemaTypes/site'
import home from '../schemaTypes/home'

/**
 * Custom Structure Tool
 * https://www.sanity.io/docs/studio/structure-tool-api
 */
export default (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // site settings
      S.listItem()
        .title('Site Settings')
        .icon(FadersIcon)
        .child(S.documentTypeList(site.name).title('Site Settings')),
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
        .child(S.documentTypeList(home.name).title('Pages')),
      S.divider(),

      // blog
    ])
