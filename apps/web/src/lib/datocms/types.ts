export type ResponsiveImage = {
	responsiveImage: {
		srcSet: string;
		webpSrcSet: string;
		sizes: string;
		src: string;
		width: number;
		height: number;
		aspectRatio: number;
		alt: string;
		title: string;
		base64: string;
	};
};

export type YouTubeVideo = {
	provider: string;
	providerUid: string;
	thumbnailUrl: string;
	title: string;
	url: string;
	width: number;
	height: number;
};

// export type ResponsiveMedia = {
// 	id: string;
// 	width: number;
// 	height: number;
// 	mimeType: string;
// 	title: string;
// 	alt: string;
// 	responsiveImage: {
// 		srcSet: string;
// 		webpSrcSet: string;
// 		sizes: string;
// 		src: string;
// 		width: number;
// 		height: number;
// 		aspectRatio: number;
// 		alt: string;
// 		title: string;
// 		base64: string;
// 	};
// 	video: {
// 		mp4Url: string;
// 		thumbnailUrl: string;
// 	};
// };

// export type GlobalSeo = {
//   siteName?: string;
//   titleSuffix?: string;
//   twitterAccount?: string;
//   facebookPageUrl?: string;
// };

// export type SeoMetaAttribute = {
//   name?: string;
//   property?: string;
//   content?: string;
//   href?: string;
//   rel?: string;
//   sizes?: string;
//   type?: string;
// };

// export declare type SeoMetaTagType = {
//   /** the tag for the meta information */
//   tag: string;
//   /** the inner content of the meta tag */
//   content: string | null;
//   /** the HTML attributes to attach to the meta tag */
//   attributes: SeoMetaAttribute | null;
// };

// export type Site = {
//   favicon: Array<SeoMetaTagType>;
//   globalSeo: GlobalSeo;
// };

// export type IdSlug = {
// 	id: string;
// 	slug: string;
// };

export type PageLink = {
	id: string;
	slug: string;
	title?: string;
	_modelApiKey: string;
};

export type Menu = {
	menuItems: Array<MenuItem>;
};

export type MenuItem = {
	id: string;
	title: string;
	url: string;
};

// export type CommonData = {
//   site: Site;
//   menu: Menu;
// };
