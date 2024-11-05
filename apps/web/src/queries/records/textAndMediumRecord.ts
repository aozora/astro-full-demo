export const textAndMediumRecord = `
... on TextAndMediumRecord {
  id
  _modelApiKey
  text(markdown: true)
  alignment
  picture {
    responsiveImage(imgixParams: {fm: webp, auto: compress}) {
      ...responsiveImageFragment
    }
  }
}`;
