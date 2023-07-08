<script>
	// @ts-nocheck
	// Modals Utils
	import { modalStore } from '@skeletonlabs/skeleton';
	export let data;
	let langdata = {};
	langdata['de'] = data.article.filter((e) => e.country === 'de');
	langdata['se'] = data.article.filter((e) => e.country === 'se');
	langdata['it'] = data.article.filter((e) => e.country === 'it');
	langdata['uk'] = data.article.filter((e) => e.country === 'uk');
	const languages = ['de', 'se', 'it', 'uk'];
	import Card from '$lib/components/Card.svelte';

		// Demo ---

		function modalComponentEmbed() {
		const modal = {
			type: 'component',
			component: 'exampleEmbed'
		};
		modalStore.trigger(modal);
	}


</script>

<div>
	<h1 class="h1 pb-3">
		<span
			class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>Zuletzt hinzugefügt.</span
		>
	</h1>
	<swiper-container slides-per-view={5} loop={false}>
		{#each data.article as name, index}
			<swiper-slide><Card carddata={name} /></swiper-slide>
		{/each}
	</swiper-container>
	{#each languages as lang, index}
		{#if langdata[lang].length > 0}
			<h1 class="h1 pb-3">
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>{lang} Mediathek</span
				>
			</h1>
			<swiper-container slides-per-view={5} loop={false}>
				{#each langdata[lang] as name, index}
					<swiper-slide><Card carddata={name} /></swiper-slide>
				{/each}
			</swiper-container>
		{/if}
	{/each}
</div>

<!-- <script>
	// @ts-nocheck

	export let data;
	import { register } from 'swiper/element/bundle';
	register();

	import Card from '$lib/components/Card.svelte';

	const spaceBetween = 10;
</script>

YOU CAN DELETE EVERYTHING IN THIS PAGE 


-->
