<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang='ts'>
	import type { InputConstraint } from 'sveltekit-superforms';
	import { Switch } from 'bits-ui';


	interface Props {
		id: string;
		label: string;
		name: string;
		value: boolean;
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
	<Switch.Root
		class="toggle" name={name}
		bind:checked={value}
		aria-invalid={errors ? 'true' : undefined}
		aria-describedby={errors ? `${name}-message` : helperText ? `${name}-helper`: undefined }
		{...constraints}
		{...restProps}
	>
		<Switch.Thumb
			class="toggle-thumb"
		/>
		<Switch.Input id={id} />
	</Switch.Root>

	{#if helperText}
		<p id={`${name}-helper`}>{helperText}</p>
	{/if}

	{#if errors}
		<p id={`${name}-message`} role='alert'>{errors}</p>
	{/if}
</div>
