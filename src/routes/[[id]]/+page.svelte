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
	let langdata = {};
	let langlist = [];
	let visible = false;
	const unsubscribe = alllang.subscribe((current) => {
		visible = current;
	});
	$: ({ Mediathek } = data); 
	//console.log(data);
	function capitalizeFirstLetter(string) {
		//console.log(string);
		string = string.toLowerCase();
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	$: {
		langdata = Object.groupBy($Mediathek.data.Mediatheks.docs, ({ channel   }) => capitalizeFirstLetter(channel.country));
		langlist = Object.keys(langdata);
	}
	/*
	console.log(data);
	

	onDestroy(unsubscribe);
	// Local state

	// Group by country
	const result = Object.groupBy(data.posts, ({ country }) => country);
	// Reactive statement to filter posts by country


	var geo1 = capitalizeFirstLetter(data.geo);*/
</script>

 
  {#if $Mediathek.data.Mediatheks.docs}
	<div>
		<aside class="alert variant-ghost-error">
			<div class="alert-message">
				<h3 class="h3">WIP</h3>
				<p>I'm rebuilding this site with PayloadCMS as backend - Currently using: PayloadCMS</p>
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
				{#each $Mediathek.data.Mediatheks.docs as name, index}
					<div class="embla__slide"><Card carddata={name} geo="dew" /></div>
				{/each}
			</div>
		</div><!-- 
 		{#key visible}
			<Slider1 {langlist} {visible} {langdata} {alllang} geo={"geo1"} />
		{/key}-->
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
{/if}<!--
-->
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
