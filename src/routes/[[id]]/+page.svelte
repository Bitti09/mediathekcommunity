<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	export let data;
 	let langdata = {};
	$: langdata['de'] = data.article.filter((e) => e.country === 'de');
	$: langdata['se'] = data.article.filter((e) => e.country === 'se');
	$: langdata['it'] = data.article.filter((e) => e.country === 'it');
	$: langdata['uk'] = data.article.filter((e) => e.country === 'uk');
	const languages = ['de', 'se', 'it', 'uk'];
	import Card from '$lib/components/Card.svelte';
	function modalComponentEmbed() {
		const modal = {
			type: 'component',
			component: 'exampleEmbed'
		};
		modalStore.trigger(modal);
	}
	onMount(async () => {
		const swiperParams = {
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 1
				},
				490: {
					slidesPerView: 2,
					spaceBetween: 1
				},
				960: {
					slidesPerView: 3,
					spaceBetween: 1
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 1
				},
				1900: {
					slidesPerView: 5,
					spaceBetween: 1
				},
				2300: {
					slidesPerView: 6,
					spaceBetween: 1
				}
			},
			on: {
				init() {
					// ...
				}
			}
		};

		const swiperEl = document.querySelectorAll('swiper-container');
		for (let i = 0; i < swiperEl.length; i++) {
			Object.assign(swiperEl[i], swiperParams);
			swiperEl[i].initialize();
		}
	});
</script>

{#if data.article.length > 0}
	<div>
		<h1 class="h1 pb-3">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Zuletzt hinzugefügt.</span
			>
		</h1>
		<swiper-container init="false" class="'mySwiper2">
			{#each data.article as name, index}
				<swiper-slide><Card carddata={name} /></swiper-slide>
			{/each}
		</swiper-container>
		{#each languages as lang, index}
			{#if langdata[lang].length > 0}
				<h1 class="h1 pb-3">
					<span
						class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
						>{lang} Mediatheken</span
					>
				</h1>
				<swiper-container init="false" class="mySwiper2">
					{#each langdata[lang] as name, index}
						<swiper-slide><Card carddata={name} /></swiper-slide>
					{/each}
				</swiper-container>
			{/if}
		{/each}
	</div>
{:else}
<h1 class="h1">
	<span class="bg-gradient-to-br from-pink-100 to-red-900 bg-clip-text text-transparent box-decoration-clone">No Item(s) found for category:</span>
	{data.param}
</h1>
{/if}