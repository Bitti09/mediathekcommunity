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
	import upperFirst from 'lodash-es';
	// Component props
	export let data;
	let visible = false;
	const unsubscribe = alllang.subscribe((current) => {
		visible = current;
	});
	onDestroy(unsubscribe);
	// Local state
	let langdata = {};
	let langlist = [];
	// Group by country
	const result = Object.groupBy(data.posts, ({ country }) => country);
	// Reactive statement to filter posts by country
	$: {
		langdata = Object.groupBy(data.posts, ({ country }) => upperFirst(country));
		langlist = Object.keys(langdata);
	}

</script>

{#if data.posts.length > 0}
	<div>
        <aside class="alert variant-ghost-error">
            <div class="alert-message">
                <h3 class="h3">WIP</h3>
				<p>I'm rebuilding this site with turso as backend</p>
            </div>
        </aside>
		<!-- Last added section -->
		<h1 class="h1 pb-3">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
			>
				Zuletzt hinzugefügt.
			</span>
		</h1>
		<div class="embla" use:emblaCarouselSvelte>
			<div class="embla__container flex">
				{#each data.posts as name, index}
                <div class="embla__slide"><Card carddata={name} /></div>
				{/each}
			</div>
		</div>
		<!-- Language-specific sections -->
         {data.geo}
			{#key visible}
				<Slider1 {langlist} {visible} {langdata} {alllang} geo={data.geo}/>
			{/key}

	</div>
{:else}
	<!-- No items found section -->
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-100 to-red-900 box-decoration-clone bg-clip-text text-transparent"
		>
			No Item(s) found for category:
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