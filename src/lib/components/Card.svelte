<script>
	import { Card, Button, Toggle } from 'flowbite-svelte';
	// @ts-nocheck
	export let carddata;
	//console.log(carddata);
	let currentVariant = 'bg-initial';
	function inFuture(date) {
		var now = new Date();
		var then = new Date(date);
		//console.log(then > now);
		if (then > now) {
			return true;
		} else {
			return false;
		}
	}
	let hCard = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card {currentVariant} flex justify-center items-center">
	{#if inFuture(carddata.publishdate) == false}
		{#if carddata.poster}
			<Card href="/details/{carddata.id}" padding="none">
				<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{carddata.title}
				</h5>
				<img
					class="rounded-lg h-64 mx-auto"
					src="https://img.mediathek.community/t/p/original{carddata.poster}"
					alt="description"
				/>
			</Card>
		{:else}
			<Card href="/details/{carddata.id}" padding="none">
				<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
					{carddata.title}
				</h5>

				<img
					class="rounded-lg h-64 mx-auto"
					src="https://img2.mediathek.community/assets/{carddata.coverimage}"
					alt="description"
				/>
			</Card>
		{/if}
	{:else if carddata.poster != 'poster'}
		<div id="text">Coming soon</div>
		<img
			class="rounded-lg h-64 mx-auto"
			src="https://img.mediathek.community/t/p/original{carddata.poster}"
			alt="description"
		/>
	{:else}
		<img
			class="rounded-lg h-64 mx-auto"
			src="https://img2.mediathek.community/assets/{carddata.coverimage}"
			alt="description"
		/>{/if}
</div>

<style>
	#text {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 25px;
		color: white;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.863);
		-ms-transform: translate(-50%, -50%);
	}
</style>
