<script lang="ts">
	import RenderBlock from './RenderBlock.svelte';

	export let blocks: Array<any>;

</script>

{#if blocks}
	{#each blocks as block}
		{#if block._modelApiKey}
			<RenderBlock block={block}/>
		{/if}
	{/each}
{/if}
