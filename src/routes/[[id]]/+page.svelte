<script>
	// @ts-nocheck
	// Modals Utils
	import { alllang } from '../../store.js';
	import { onDestroy } from 'svelte';
	import * as Flag from 'svelte-flag-icons';
	import emblaCarouselSvelte from 'embla-carousel-svelte';

	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import Slider1 from '$lib/components/Slider1.svelte';
	// Component props
	/* @type { import('./$houdini').PageData } */
	export let data;
	//data.page.channel = data.page.channel[0];
	console.log(data);
	let langdata = {};
	let langlist = [];
	let visible = false;
	const unsubscribe = alllang.subscribe((current) => {
		visible = current;
	});
	const groupByChannelCountry = (array) => {
		array = array.page;
		return array.reduce((acc, item) => {
			const country = item.channel.country;
			if (!acc[country]) {
				acc[country] = [];
			}
			acc[country].push(item);
			return acc;
		}, {});
	};
	langdata = groupByChannelCountry(data);
	langlist = Object.keys(langdata);

	console.log(langdata);
	console.log(Object.keys(langdata));

	/*var geo1 = capitalizeFirstLetter(data.geo);*/
</script>

{#if data.page.length > 0}
	<div>
		<aside class="alert variant-ghost-error">
			<div class="alert-message">
				<h3 class="h3">WIP</h3>
				<p>I'm rebuilding this site with Directus as backend - Currently using: Directus</p>
			</div>
		</aside>

		<h1 class="h1 pb-3">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
			>
				Zuletzt hinzugefügt.
			</span>
		</h1>
		<div class="embla" use:emblaCarouselSvelte>
			<div class="embla__container flex">
				{#each data.page as name, index}
					<div class="embla__slide"><Card carddata={name} geo="De" /></div>
				{/each}
			</div>
		</div>
		{#key visible}
			<Slider1 {langlist} {visible} {langdata} {alllang} geo="De" />
		{/key}
	</div>
{:else}
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-100 to-red-900 box-decoration-clone bg-clip-text text-transparent"
		>
			No Item(s) found for category:ss
		</span>
		{data.param || '*'}
	</h1>
{/if}

<style scoped>
	.embla__slide {
		flex: 0 0 200px !important;
		min-width: 0;
	}
	.embla__container {
		display: flex;
		flex-direction: row;
	}
</style>
