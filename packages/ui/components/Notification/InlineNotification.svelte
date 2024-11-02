<script lang='ts'>
  import Close from 'carbon-icons-svelte/lib/Close.svelte';
  import InformationFilled from 'carbon-icons-svelte/lib/InformationFilled.svelte';
  import WarningAltFilled from 'carbon-icons-svelte/lib/WarningAltFilled.svelte';
  import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
  import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';

  interface Props {
    kind: 'error' | 'info' | 'success' | 'warning';
    title: string;
    subtitle: string;
    hideCloseButton?: boolean;
  }

  let {
    kind,
    title,
    subtitle,
    hideCloseButton = false
  }: Props = $props();
</script>


<div class='cb-notification-inline' role='status'
     class:cb-notification-inline-success={kind === 'success'}
     class:cb-notification-inline-error={kind === 'error'}
     class:cb-notification-inline-info={kind === 'info'}
     class:cb-notification-inline-warning={kind === 'warning'}
>
  {#if kind === 'success'}
    <CheckmarkFilled size={18} class='cb-notification-inline-icon' />
  {/if}
  {#if kind === 'error'}
    <ErrorFilled size={18} class='cb-notification-inline-icon' />
  {/if}
  {#if kind === 'info'}
    <InformationFilled size={18} class='cb-notification-inline-icon' />
  {/if}
  {#if kind === 'warning'}
    <WarningAltFilled size={18} class='cb-notification-inline-icon' />
  {/if}
  <p class='cb-notification-inline-title'>{title}</p>
  <p class='cb-notification-inline-subtitle'>{subtitle}</p>

  {#if !hideCloseButton}
    <button type='button' class='cb-notification-inline-close'>
      <Close size={16} />
    </button>
  {/if}
</div>


<style lang='scss'>
  .cb-notification-inline {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-left: 3px solid var(--color);
    background-color: var(--token-color-background-inverse);

    &.cb-notification-inline-success {
      --color: var(--token-support-success-inverse);
    }

    &.cb-notification-inline-error {
      --color: var(--token-support-error-inverse);
    }

    &.cb-notification-inline-info {
      --color: var(--token-support-error-inverse);
    }

    &.cb-notification-inline-warning {
      --color: var(--token-support-warning-inverse);
    }


    :global(.cb-notification-inline-icon) {
      margin: 0 1rem;
      color: var(--color);
    }
  }


  .cb-notification-inline-title {
    flex: 0 0 auto;
    margin: 0 .5rem 0 0;
    font-size: var(--token-heading-compact-01-font-size);
    font-weight: var(--token-heading-compact-01-font-weight);
    line-height: var(--token-heading-compact-01-line-height);
    letter-spacing: var(--token-heading-compact-01-letter-spacing);
    text-align: left;
    color: var(--token-color-gray100);
  }

  .cb-notification-inline-subtitle {
    flex: 1 1 auto;
    margin: 0;
    font-size: var(--token-body-compact-01-font-size);
    font-weight: var(--token-body-compact-01-font-weight);
    line-height: var(--token-body-compact-01-line-height);
    letter-spacing: var(--token-body-compact-01-letter-spacing);
    text-align: left;
    color: var(--token-color-gray100);
  }

  .cb-notification-inline-close {
    flex: 0 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    border: 0;
    background-color: var(--token-color-button-tertiary-hover);
    cursor: pointer;

    &:hover {
      background-color: var(--token-color-button-tertiary);
    }

    &:focus, &:focus-visible {
      border: var(--button-button-primary-focus-outline-border);
      box-shadow: var(--button-button-primary-focus-outline-inset);
    }
  }
</style>
