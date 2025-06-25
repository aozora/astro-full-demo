<script lang="ts">
	interface Props {
		className?: string|undefined;
		children?: import('svelte').Snippet;
	}

	let { className = undefined, children }: Props = $props();
</script>

<main id="main" class={className}>
	{@render children?.()}
</main>
