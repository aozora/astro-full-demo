<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	interface Props {
		text: any;
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

	let { text, alignment } = $props();

	console.log({ alignment });
</script>

<article class="text-and-medium">
	<PortableText value={text} />
</article>

<style lang="scss">
  .text-and-medium {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>
