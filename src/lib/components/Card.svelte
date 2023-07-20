<script>
	// @ts-nocheck
	import { modalStore } from '@skeletonlabs/skeleton';
	import { modalProps } from '$lib/modalPropsStore';

	export let carddata;
	let currentVariant = 'bg-initial';
	const modal = {
		type: 'component',
		component: 'modalComponentOne'
	};
	function modalComponentEmbed() {
		modalProps.set(carddata);
		modalStore.trigger(modal);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card {currentVariant} flex justify-center items-center">
	<a href="details/{carddata.id}">
		{#if carddata.poster != 'poster'}
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
	</a>
</div>
