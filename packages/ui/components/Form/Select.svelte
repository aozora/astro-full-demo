<script lang='ts'>
	import type { InputConstraint } from 'sveltekit-superforms';

	interface Props {
		id: string;
		label: string;
		name: string;
		value: string;
		helperText?: string | undefined;
		errors?: string[] | undefined;
		constraints?: InputConstraint | undefined;
	}

	let {
		id = crypto.randomUUID(),
		label,
		name,
		value,
		helperText = undefined,
		errors = undefined, constraints = undefined,
		...restProps
	}: Props = $props();
</script>

<label for={id}>
	{label}
</label>

<div class='form-field-wrapper'>
	<select id={id}
					name={name}
					aria-invalid={errors ? 'true' : undefined}
					aria-describedby={errors ? `${name}-message` : helperText ? `${name}-helper`: undefined }
					bind:value
					{...constraints}
					{...restProps}>
		<slot></slot>
	</select>

	{#if helperText}
		<p id={`${name}-helper`}>{helperText}</p>
	{/if}

	{#if errors}
		<p id={`${name}-message`} role='alert'>{errors}</p>
	{/if}
</div>
