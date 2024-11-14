<script lang="ts">
	import { keys } from './blocks-keys';
	// import Hero from '../../blocks/Hero/Hero.svelte';
	// import Quote from '../../blocks/Quote/Quote.svelte';
	// import TextAndMedium from "../../blocks/TextAndMedium/TextAndMedium.svelte";

	const Hero = import('../../blocks/Hero/Hero.svelte').then(module => module.default);
	const Quote = import('../../blocks/Quote/Quote.svelte').then(module => module.default);
	const TextAndMedium = import('../../blocks/TextAndMedium/TextAndMedium.svelte').then(module => module.default);


	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let block: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let component: any;

	switch (block._modelApiKey) {
		case keys.HERO:
			component = Hero;
			break;
		case keys.QUOTE:
			component = Quote;
			break;
		case keys.TEXT_AND_MEDIUM:
			component = TextAndMedium;
			break;
		default:
			component = undefined;
	}
</script>

{#if component}
	<svelte:component this={component} {...block} />
{/if}
