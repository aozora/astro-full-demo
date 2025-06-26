export type SeoType = {
  _type?: "seo";
  nofollowAttributes?: boolean;
  metaDescription?: string;
  additionalMetaTags?: MetaTagType[];
  metaTitle?: string;
  seoKeywords?: string[];
  openGraph?: OpenGraphType;
  twitter?: Twitter;
};

export type MetaTagType = {
  _type: "metaTag";
  metaAttributes?: MetaAttributeType[];
};

export type MetaAttributeType = {
  _type: "metaAttribute";
  attributeKey?: string;
  attributeType?: string;
  attributeValueString?: string;
  attributeValueImage?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  url?: string;
  siteName?: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  creator?: string;
  site?: string;
  cardType?: string;
};

export type CustomImageType = {
  _type: "customImage";
  asset?: SanityImageAssetType;
  crop?: {
    _type: "SanityImageCrop";
    right: number;
    top: number;
    left: number;
    bottom: number;
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    _type: "SanityImageHotspot";
    width?: number;
  };
};

export type SanityImageAssetType = {
  _type?: "SanityImageAsset";
  _id?: string;
  path?: string;
  url?: string;
  metadata?: {
    _type?: "SanityImageMetadata";
    dimensions?: {
      _type?: "SanityImageDimensions";
      height?: number;
      width?: number;
    };
  };
};

// extracted from astro-seo
export type TwitterCardType =
  | "summary"
  | "summary_large_image"
  | "app"
  | "player";

export interface Link extends Omit<HTMLLinkElement, "sizes"> {
  prefetch: boolean;
  crossorigin: string;
  sizes: string;
}

export interface Meta extends HTMLMetaElement {
  property: string;
}

export interface OpenGraph {
  openGraph?: {
    basic: {
      title: string;
      type: string;
      image: string;
      url?: URL | string;
    };
    optional?: {
      audio?: string;
      description?: string;
      determiner?: string;
      locale?: string;
      localeAlternate?: string[];
      siteName?: string;
      video?: string;
    };
    image?: {
      url?: URL | string;
      secureUrl?: URL | string;
      type?: string;
      width?: number;
      height?: number;
      alt?: string;
    };
    article?: {
      publishedTime?: string;
      modifiedTime?: string;
      expirationTime?: string;
      authors?: string[];
      section?: string;
      tags?: string[];
    };
  };
  twitter?: {
    card?: TwitterCardType;
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: URL | string;
    imageAlt?: string;
  };
  extend?: {
    link?: Partial<Link>[];
    meta?: Partial<Meta>[];
  };
}

// extracted from next-seo
export interface BaseMetaTag {
  content: string;
  keyOverride?: string;
}

export interface HTML5MetaTag extends BaseMetaTag {
  name: string;
  property?: undefined;
  httpEquiv?: undefined;
}

export interface RDFaMetaTag extends BaseMetaTag {
  property: string;
  name?: undefined;
  httpEquiv?: undefined;
}

export interface HTTPEquivMetaTag extends BaseMetaTag {
  httpEquiv:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh";
  name?: undefined;
  property?: undefined;
}

export type MetaTag = HTML5MetaTag | RDFaMetaTag | HTTPEquivMetaTag;
