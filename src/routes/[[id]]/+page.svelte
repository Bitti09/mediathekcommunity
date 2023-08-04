<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	import { groupBy } from 'lodash-es';
	import Card from '$lib/components/Card.svelte';
	// register Swiper custom elements
	register();
	export let data;
	let d1;
	let keyz;
	let grouped;
	d1 = data.article;
	if (data.param == 'specials') {
		grouped = groupBy(d1, (item) => item.specials.Name);
		keyz = Object.keys(grouped);
	} else {
		grouped = groupBy(d1, (item) => item.country);
		keyz = Object.keys(grouped);
	}
	onMount(async () => {
		const swiperParams = {
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				490: {
					slidesPerView: 2,
					spaceBetween: 0
				},
				960: {
					slidesPerView: 3,
					spaceBetween: 0
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 0
				},
				1900: {
					slidesPerView: 5,
					spaceBetween: 0
				},
				2300: {
					slidesPerView: 6,
					spaceBetween: 0
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
		<h1 class="h1 pb-1">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Zuletzt hinzugefügt.</span
			>
		</h1>
		<swiper-container init="false" class="'mySwiper2">
			{#each data.article as name}
				<swiper-slide><Card carddata={name} /></swiper-slide>
			{/each}
		</swiper-container>
		{#each keyz as lang}
			<h1 class="h1 pb-1">
				<span
					class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
					>{lang}</span
				>
			</h1>
			<swiper-container init="false" class="mySwiper2">
				{#each grouped[lang] as name}
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
