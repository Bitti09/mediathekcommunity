<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	export let data;
	let langdata = {};
	import * as Flag from 'svelte-flag-icons';
	$: langdata['De'] = data.posts.filter((e) => e.country === 'de');
	$: langdata['Se'] = data.posts.filter((e) => e.country === 'se');
	$: langdata['It'] = data.posts.filter((e) => e.country === 'it');
	$: langdata['Uk'] = data.posts.filter((e) => e.country === 'uk');
	const languages = ['De', 'Se', 'It', 'Uk'];
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

{#if data.posts.length > 0}
	<div>
		<aside class="alert variant-ghost-error">
			<!-- Icon -->
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">WIP</h3>
				<p>I'm rebuilding this site with turso as backend</p>
			</div>
			<!-- Actions -->
		</aside>
		<h1 class="h1 pb-3">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
				>Zuletzt hinzugefügt.</span
			>
		</h1>
		<swiper-container init="false" class="'mySwiper2">
			{#each data.posts as name, index}
				<swiper-slide><Card carddata={name} /></swiper-slide>
			{/each}
		</swiper-container>
		{#each languages as lang, index}
			{#if langdata[lang].length > 0}
				<h1 class="h1 pb-3">
					<div
						class="flex items-center place-self-center bg-gradient-to-br from-blue-500 to-cyan-300 box-decoration-clone bg-clip-text text-transparent"
					>
						<svelte:component
							this={Flag[lang]}
							class="mr-1 inline-flex place-self-center"
							size="50"
						/> Mediatheken
					</div>
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
		<span
			class="bg-gradient-to-br from-pink-100 to-red-900 box-decoration-clone bg-clip-text text-transparent"
			>No Item(s) found for category:</span
		>
		{data.param || '*'}
	</h1>
{/if}
