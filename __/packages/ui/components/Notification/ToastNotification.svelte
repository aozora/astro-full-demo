<script lang='ts'>
	// import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	// import WarningAltFilled from 'carbon-icons-svelte/lib/WarningAltFilled.svelte';
	// import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
	// import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';

	import { Bug, CheckCircle, Info, Warning } from 'phosphor-svelte';

	interface Props {
		kind?: 'error' | 'info' | 'success' | 'warning';
		title: string;
		subtitle: string;
		showTimestamp?: boolean;
	}

	let {
		kind = 'info',
		title,
		subtitle,
		showTimestamp = true
	}: Props = $props();
	// export let hideCloseButton: boolean = false;

	const timestamp = new Intl.DateTimeFormat('en-US', {
		dateStyle: 'short',
		timeStyle: 'long'
	}).format(new Date());
</script>

<div class='cb-notification-toast-item'
		 class:cb-notification-toast-success={kind === 'success'}
		 class:cb-notification-toast-error={kind === 'error'}
		 class:cb-notification-toast-info={kind === 'info'}
		 class:cb-notification-toast-warning={kind === 'warning'}
>
	{#if kind === 'success'}
		<CheckCircle size={18} class='cb-notification-toast-icon' />
	{/if}
	{#if kind === 'error'}
		<Bug size={18} class='cb-notification-toast-icon' />
	{/if}
	{#if kind === 'info'}
		<Info size={18} class='cb-notification-toast-icon' />
	{/if}
	{#if kind === 'warning'}
		<Warning size={18} class='cb-notification-toast-icon' />
	{/if}

	<div class='cb-notification-toast-details'>
		<div class='cb-notification-toast-title'>{title}</div>
		<div class='cb-notification-toast-subtitle'>{subtitle}</div>
		{#if showTimestamp}
			<div class='cb-notification-toast-timestamp'>{timestamp}</div>
		{/if}
	</div>
</div>

<style lang='scss'>
  .cb-notification-toast-item {
    display: flex;
    justify-content: left;
    align-items: flex-start;
    padding: 1rem 0;
    border-left: 1rem solid var(--color);

    &.cb-notification-toast-success {
      --color: var(--color-green);
    }

    &.cb-notification-toast-info {
      --color: var(--color-blue);
    }

    &.cb-notification-toast-error {
      --color: var(--color-error);
    }

    &.cb-notification-toast-warning {
      --color: var(--color-yellow);
    }
  }

  :global(.cb-notification-toast-icon) {
    flex: 0 0 3rem;
    width: 3rem;
    color: var(--color);
  }

  :global(._toastItem) {
    --toastBackground: #000;
  }
  :global(._toastMsg) {
    --toastMsgPadding: 0;
  }

  .cb-notification-toast-details {
    flex: 1 1 auto;
  }

  .cb-notification-toast-title,
  .cb-notification-toast-subtitle,
  .cb-notification-toast-timestamp {
    margin: 0;
    text-align: left;
    color: var(--color-white);
  }

  .cb-notification-toast-title {
    font-size: var(--text-scale-16);
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
  }

  .cb-notification-toast-subtitle,
  .cb-notification-toast-timestamp {
    font-size: var(--text-scale-12);
    font-weight: var(--font-weight-regular);
    line-height: 1.2;
  }

  .cb-notification-toast-subtitle {
    margin-bottom: 1.5rem;
    font-size: var(--text-scale-16);
  }
</style>
