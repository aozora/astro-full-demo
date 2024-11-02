<script lang='ts'>
	import type { InputConstraint } from 'sveltekit-superforms';

	interface Props {
		id: string;
		label: string;
		name: string;
		checked: boolean;
		helperText?: string | undefined;
		errors?: string[] | undefined;
		constraints?: InputConstraint | undefined;
	}

	let {
		id = crypto.randomUUID(),
		label,
		name,
		checked,
		helperText = undefined,
		errors = undefined, constraints = undefined,
		...restProps
	}: Props = $props();
</script>

<label for={id}>
	{label}
	<!--{#if required}<span aria-label='required'>*</span>{/if}-->
</label>

<div class='form-field-wrapper'>
	<input id={id}
				 name={name}
				 type="checkbox"
				 aria-invalid={errors ? 'true' : undefined}
				 aria-describedby={errors ? `${name}-message` : helperText ? `${name}-helper`: undefined }
				 bind:checked
				 {...constraints}
				 {...restProps}
	/>

	{#if helperText}
		<p id={`${name}-helper`}>{helperText}</p>
	{/if}

	{#if errors}
		<p id={`${name}-message`} role='alert'>{errors}</p>
	{/if}
</div>
