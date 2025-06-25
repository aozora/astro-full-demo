import type { ImageAsset, Slug } from "@sanity/types";
import type { PortableTextBlock } from "@portabletext/types";
import type { SeoType } from "@lib/sanity/seo/types.ts";

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  cover?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
}

export interface MenuItem {
  title: string;
  path: string;
}

export interface Site {
  title: string;
  seo: SeoType;
  menu: Array<MenuItem>
}

export interface Home {
  title: string;
  seo: SeoType;
  slug: {
    _type: "slug";
    current: string;
  };
  blocks: [];
}
