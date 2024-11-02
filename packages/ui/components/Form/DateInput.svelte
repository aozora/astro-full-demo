<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang='ts'>
	import type { InputConstraint } from 'sveltekit-superforms';
	import { DateField } from 'bits-ui';
	import { CalendarDate } from '@internationalized/date';

	interface Props {
		id: string;
		label: string;
		name: string;
		value: Date;
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

	let _value: CalendarDate = $derived(value ? new CalendarDate(value.getFullYear(), value.getMonth() + 1, value.getDate()) :
		new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()));
	// $effect(() => {
	// 	_value = value ? new CalendarDate(value.getFullYear(), value.getMonth() + 1, value.getDate()) :
	// 		new CalendarDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
	// });
</script>

<label for={id}>
	{label}
</label>

<div class='form-field-wrapper'>
	<!--	<input id={id}-->
	<!--				 name={name}-->
	<!--				 type="date"-->
	<!--				 aria-invalid={errors ? 'true' : undefined}-->
	<!--				 aria-describedby={errors ? `${name}-message` : helperText ? `${name}-helper`: undefined }-->
	<!--				 bind:value-->
	<!--				 {...constraints}-->
	<!--				 {...$$props}-->
	<!--	/>-->
	<DateField.Root bind:value={_value} name={name} {...constraints} {...restProps} locale="it"
									class="date-input-wrapper">
		<DateField.Input let:segments class="date-input-segments-wrapper">
			{#each segments as { part, value }}
				<DateField.Segment {part} class="date-input-segment">
					{value}
				</DateField.Segment>
			{/each}
		</DateField.Input>
	</DateField.Root>

	{#if helperText}
		<p id={`${name}-helper`}>{helperText}</p>
	{/if}

	{#if errors}
		<p id={`${name}-message`} role='alert'>{errors}</p>
	{/if}
</div>
