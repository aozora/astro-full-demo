<script lang="ts">
	// import {PortableText as PortableTextInternal} from "astro-portabletext"
	import { PortableText } from '@portabletext/svelte';
	import QuoteIcon from '@/components/icons/QuoteIcon.svelte';

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
	<QuoteIcon />
	&nbsp;
	<PortableText value={quote} />
	&nbsp;
	<QuoteIcon />
</blockquote>

<style lang="scss">
	.quote {
    grid-column: 2;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
		font-size: var(--text-scale-32);
  }
</style>
