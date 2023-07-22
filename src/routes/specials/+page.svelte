<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	import { groupBy, countBy, keys } from 'lodash-es';
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	export let data;
    
	let grouped;
	let grouped2;
    function group(data) {
		grouped = keys(
			countBy(data, function (data) {
				return data.specials.Name;
			})
		);
		grouped2 = groupBy(data, (item) => item.specials.Name);
        console.log(grouped2);
        console.log(grouped);
	}
	$: group(data.article);
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
		{#each grouped as lang}
			{#if lang.length > 0}
				<h1 class="h1 pb-3">
					<span
						class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
						>{lang}</span
					>
				</h1>
				<swiper-container init="false" class="mySwiper2">
					{#each grouped2[lang] as name}
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
