export const heroRecord = `
... on HeroRecord {
  _modelApiKey
  id
  title
  picture {
    responsiveImage(imgixParams: {fm: webp, auto: compress}) {
      ...responsiveImageFragment
    }
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
