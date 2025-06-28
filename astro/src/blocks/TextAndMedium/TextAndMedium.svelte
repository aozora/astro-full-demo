<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { PortableTextBlock } from '@portabletext/types';
	import type { Image } from '@sanity/types';
	import { urlFor } from '@/lib/helpers.ts';

	interface Props {
		text: PortableTextBlock;
		picture?: Image;
		alignment: Array<'text-only' | 'text-right' | 'text-left' | 'vertical-text-picture' | 'vertical-picture-text'>;
	}

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

	let { text, alignment, picture } = $props();
</script>

<article class="text-and-medium">
	{#if alignment === 'text-right' || alignment === 'vertical-picture-text' }
		<img class="picture"
				 style:--column="1"
				 src={urlFor(picture).url()} alt={picture.alt} />
	{/if}

	<div class="text">
		<PortableText value={text} />
	</div>

	{#if alignment === 'vertical-text-picture' || alignment === 'text-left'  }
		<img class="picture"
				 style:--column="2"
				 src={urlFor(picture).url()} alt={picture.alt} />
	{/if}
</article>

<style lang="scss">
  .text-and-medium {
    grid-column: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .text {

  }

  .picture {
		grid-column: var(--column);
    object-fit: cover;
  }

</style>
