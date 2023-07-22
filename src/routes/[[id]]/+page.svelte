<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	import { groupBy, countBy, keys } from 'lodash-es';

	// register Swiper custom elements
	register();
	export let data;
	let grouped;
	let grouped2;
	function group(data) {
		grouped = keys(
			countBy(data, function (data) {
				return data.country;
			})
		);
		grouped2 = groupBy(data, (item) => item.country);
	}
	$: group(data.article);

	import Card from '$lib/components/Card.svelte';
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
		{#each grouped as lang, index}
			<h1 class="h1 pb-3">
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>{lang} Mediatheken</span
				>
			</h1>
			<swiper-container init="false" class="mySwiper2">
				{#each grouped2[lang] as name, index}
					<swiper-slide><Card carddata={name} /></swiper-slide>
				{/each}
			</swiper-container>
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
