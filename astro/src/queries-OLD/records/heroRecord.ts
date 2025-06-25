export const heroRecord = `
... on HeroRecord {
  _modelApiKey
  id
  title
  picture {
    responsiveImage(imgixParams: {fm: webp, w: "1440"}) {
      ...responsiveImageFragment
    }
    alt
    height
    width
  }
  videoYoutube {
    provider
    providerUid
    thumbnailUrl
    title
    url
    width
    height
  }
}`;
