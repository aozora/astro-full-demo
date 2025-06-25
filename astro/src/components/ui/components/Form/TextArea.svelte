<script lang='ts'>
	import type { InputConstraint } from 'sveltekit-superforms';

	interface Props {
		id: string;
		label: string;
		name: string;
		value: string;
		rows: number;
		helperText?: string | undefined;
		errors?: string[] | undefined;
		constraints?: InputConstraint | undefined;
	}

	let {
		id = crypto.randomUUID(),
		label,
		name,
		value,
		rows,
		helperText = undefined,
		errors = undefined, constraints = undefined,
		...restProps
	}: Props = $props();
</script>

<label for={id}>
	{label}
	<!--{#if required}<span aria-label='required'>*</span>{/if}-->
</label>
<div class='cb-form-field-wrapper'>
  <textarea id={id}
						name={name}
						rows={rows}
						aria-invalid={errors ? 'true' : undefined}
						aria-describedby={errors ? `${name}-message` : helperText ? `${name}-helper`: undefined }
						bind:value
						{...constraints}
						{...restProps}
	></textarea>

	{#if helperText}
		<p id={`${name}-helper`}>{helperText}</p>
	{/if}

	{#if errors}
		<p id={`${name}-message`} role='alert'>{errors}</p>
	{/if}
</div>
