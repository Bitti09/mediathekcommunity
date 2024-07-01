<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	export let form;
	let choicesCount = 2;
	let isSubmitting = false;
	let choices = [
		{ name: 'choice_0', value: '' },
		{ name: 'choice_1', value: '' }
	];
	function addChoice(ev) {
		ev.preventDefault();
		if (choicesCount < 10) {
			choices = [...choices, { name: `choice_${choicesCount}`, value: '' }];
			choicesCount++;
			return;
		}
		console.log("Can't have more than 10 choices");
	}

	function validateLength(index) {
		if (choices[index].value.length >= 20) {
			choices[index].value = choices[index].value.slice(0, 20);
		}
	}
</script>

<h1 class="tect-center flex justify-center text-2xl">New Poll</h1>

<form
	method="post"
	class="mx-auto flex max-w-xl flex-col gap-4 p-2 lg:p-8"
	use:enhance={() => {
		isSubmitting = true;
		return async ({ result }) => {
			await applyAction(result);
			isSubmitting = false;
		};
	}}
>
	<div>
		{#if form?.ok}
			<div class="flex gap-2 rounded bg-green-200 p-2 text-green-700">
				<span>{form.message}</span> <span>(deleteId: {JSON.stringify(form)})</span>
			</div>
		{:else if !form?.ok && form?.message}
			<div class="mx-auto w-fit rounded bg-red-200 p-2 text-red-700">{form.message}</div>
		{/if}
	</div>
	<div class="flex flex-col gap-2">
		<label for="">Question</label>
		<textarea name="question" required rows="3" class=" text-gray-500" />
	</div>
	<div class="dark flex flex-col gap-2">
		{#each choices as choice, i}
			<div class="flex flex-col gap-2">
				<div>
					<label for=""
						>Choice {i + 1} <span class="text-gray-400">{i > 1 ? '(Optional)' : ''}</span></label
					>
				</div>
				<div class="flex gap-4">
					<div class="relative flex w-full">
						<input
							class="w-full grow text-black"
							type="text"
							name={choice.name}
							bind:value={choice.value}
							max="20"
							required={i < 2}
							on:input={() => validateLength(i)}
						/>
						<span class="absolute right-2 flex h-full items-center justify-center text-gray-500"
							>({choice.value.length} / 20)</span
						>
					</div>
					{#if choicesCount === i + 1}
						<button
							type="button"
							class="flex w-8 shrink-0 items-center justify-center text-gray-500"
							on:click={addChoice}
						>
							+
						</button>
					{/if}
				</div>
			</div>
		{/each}
		<div>
			<label for="">Poll Duration</label>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex flex-col gap-2">
					<label class="text-sm text-red-500" for="">Days</label>
					<select name="days" class="text-sm text-gray-500">
						{#each { length: 10 } as _, i}
							<option value={i}>{i}</option>
						{/each}
					</select>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-sm text-red-500" for="">Hours</label>

					<select name="hours" class="text-sm text-gray-500">
						{#each { length: 24 } as _, i}
							<option selected={i === 1} value={i}>{i}</option>
						{/each}
					</select>
				</div>
				<div class="flex flex-col gap-2">
					<label class="text-sm text-gray-500" for="">Minutes</label>
					<select name="minutes" class="text-sm text-gray-500">
						{#each { length: 60 } as _, i}
							<option value={i}>{i}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<input type="hidden" name="choices_count" value={choicesCount} />
	</div>
	<div class="flex justify-center">
		<button
			type="submit"
			class=" flex w-32 items-center justify-center gap-1 rounded bg-blue-600 p-2 text-black hover:bg-blue-700 active:bg-blue-800"
		>
			{#if isSubmitting}
				load
			{/if} <span>Add Poll</span></button
		>
	</div>
</form>
