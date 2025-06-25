<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang='ts'>
	import { Dialog } from 'bits-ui';
	import { fade } from 'svelte/transition';
	import { flyAndScale } from '../../lib/transitions';
	import { X } from 'phosphor-svelte';

	interface Props {
		isOpen: boolean;
		title: string;
	}

	let {
		isOpen = false,
		title
	}: Props = $props();
</script>

<Dialog.Root open={isOpen} on:close={() => (isOpen = false)}>
	<Dialog.Portal>
		<Dialog.Overlay
			transition={fade}
			transitionConfig={{ duration: 150 }}
			class="modal-overlay"
		/>
		<Dialog.Content transition={flyAndScale} class="modal-content">
			<Dialog.Title>{title}</Dialog.Title>

			<div class="modal-body">
				<slot name='modal-content' />
			</div>

			<!--			<div class="modal-actions">-->
			<!--				<slot name='modal-actions' />-->
			<!--			</div>-->

			<Dialog.Close class="modal-close" on:click={() => (isOpen = false)}>
				<div>
					<X size="24" />
				</div>
			</Dialog.Close>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>

