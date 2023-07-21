<script>
// @ts-nocheck
	/** @type {import('./$types').PageData} */

	import { groupBy } from 'lodash-es';
	import { onMount } from 'svelte';
	import {
		modalStore,
		TabGroup,
		Tab,
		TabAnchor,
		Accordion,
		AccordionItem
	} from '@skeletonlabs/skeleton';
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { modalProps, modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let myPlaylist = [];
	let myPlaylistomu = [];
	import Card from '$lib/components/Card.svelte';

	let showvideo = false;
 	let tabSet = 0;
	export let data;
    let d1
	d1 = data.article;
	let  grouped = groupBy(d1, car => car.specials.Name);
	//console.log(data);
	$: d2 = Object.keys(grouped);

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
		{#each d2 as lang, index}

			{#if lang.length > 0}
				<h1 class="h1 pb-3">
					<span
						class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
						>{lang}</span
					>
				</h1>
				<swiper-container init="false" class="mySwiper2">
					{#each grouped[lang] as name, index}
						<swiper-slide><Card carddata={name} /></swiper-slide>
					{/each}
				</swiper-container>
			{/if}
		{/each}
	</div>
{:else}
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-100 to-red-900 bg-clip-text text-transparent box-decoration-clone"
			>No Item(s) found for category:</span
		>
		{data.param}
	</h1>
{/if}