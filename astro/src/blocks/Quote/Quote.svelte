<script lang="ts">
	// import {PortableText as PortableTextInternal} from "astro-portabletext"
	import { PortableText } from '@portabletext/svelte';

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

	let { quote } = $props();
</script>

<blockquote class="quote">
	<PortableText value={quote} />
</blockquote>

<style lang="scss">
  .quote {
    grid-column: 2;
		padding: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;

  }
</style>
