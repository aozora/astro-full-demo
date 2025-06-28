<script lang="ts">
	import RenderBlock from './RenderBlock.svelte';

	interface Props {
		blocks: Array<any>;
	}

	let { blocks }: Props = $props();

	// console.log({blocks});
</script>

{#if blocks}
	{#each blocks as block}
		{#if block._type}
			<RenderBlock block={block} />
		{/if}
	{/each}
{/if}
