<script lang="ts">
  // import {PortableText as PortableTextInternal} from "astro-portabletext"
  import {PortableText} from '@portabletext/svelte'
  // const components = {
  //   type: {
  //     callToActionBox: CallToActionBox,
  //     code: Code,
  //     image: SanityImage,
  //     youtube: YouTube,
  //   },
  //   mark: {
  //     internalLink: InternalLink
  //   }
  // };

  let { text } = $props();
</script>

<article class="text-and-medium">
  <PortableText value={text} />
</article>

<style lang="scss">
  .text-and-medium{
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
