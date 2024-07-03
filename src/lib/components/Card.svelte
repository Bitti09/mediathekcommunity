<script>
	// @ts-nocheck
	import * as Flag from 'svelte-flag-icons';

	export let carddata, geo;
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
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if inFuture(carddata.publishdate) == false}
	{#if carddata.country !== geo}
		<div class="flex">
			<div class="relative mx-auto max-w-xl">
				<div class="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>

				<figure>
					{#if carddata.poster}
						<img
							class="h-64 rounded-lg"
							src="https://img.mediathek.community/t/p/original{carddata.poster}"
							alt="description"
						/>
					{:else}
						<img
							class="image-full mx-auto h-64 rounded-lg"
							src="https://img2.mediathek.community/assets/{carddata.coverimage}"
							alt="description"
						/>
					{/if}
				</figure>
				<div class="absolute inset-0 flex min-h-full items-center justify-center">
					<p>
						<svelte:component
							this={Flag[carddata.country]}
							class="mr-1 inline-flex place-self-center"
							size="30"
						/> IP wird benötigt
					</p>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex">
			<a href="details/{carddata.id}">
				{#if carddata.poster}
					<img
						class="image-full mx-auto h-64 rounded-lg"
						src="https://img.mediathek.community/t/p/original{carddata.poster}"
						alt="description"
					/>
				{:else}
					<img
						class="image-full mx-auto h-64 rounded-lg"
						src="https://img2.mediathek.community/assets/{carddata.coverimage}"
						alt="description"
					/>
				{/if}
			</a>
		</div>
	{/if}
{:else}
	<div class="flex">
		<div class="relative mx-auto max-w-xl">
			<div class="absolute inset-0 rounded-md bg-gray-700 opacity-60"></div>

			<figure>
				{#if carddata.poster}
					<img
						class="h-64 rounded-lg"
						src="https://img.mediathek.community/t/p/original{carddata.poster}"
						alt="description"
					/>
				{:else}
					<img
						class="image-full mx-auto h-64 rounded-lg"
						src="https://img2.mediathek.community/assets/{carddata.coverimage}"
						alt="description"
					/>
				{/if}
			</figure>
			<div class="absolute inset-0 flex min-h-full items-center justify-center">
				<p>Coming soon</p>
			</div>
		</div>
	</div>
{/if}
