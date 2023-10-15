<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { groupBy } from 'lodash-es';
	import Card from '$lib/components/Card.svelte';

	export let data;
	register();

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
	function getflag(country) {
		switch (country) {
			case 'de':
				return 'twemoji:flag-germany';
			case 'at':
				return 'twemoji:flag-austria';
			case 'ch':
				return 'twemoji:flag-switzerland';
			case 'it':
				return 'twemoji:flag-italy';
			case 'fr':
				return 'twemoji:flag-france';
			case 'es':
				return 'twemoji:flag-spain';
			case 'uk':
				return 'twemoji:flag-united-kingdom';
			case 'pl':
				return 'twemoji:flag-poland';
			case 'nl':
				return 'twemoji:flag-netherlands';
			case 'be':
				return 'twemoji:flag-belgium';
			case 'dk':
				return 'twemoji:flag-denmark';
			case 'fi':
				return 'twemoji:flag-finland';
			case 'ie':
				return 'twemoji:flag-ireland';
			case 'no':
				return 'twemoji:flag-norway';
			case 'pt':
				return 'twemoji:flag-portugal';
			case 'se':
				return 'twemoji:flag-sweden';
		}
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
					slidesPerView: 7,
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

<aside class="alert variant-ghost">
	<!-- Icon -->
	<div><Icon name="info-circle-solid" slot="icon" class="w-4 h-4" /></div>
	<!-- Message -->
	<div class="alert-message">
		<h3 class="h3">Info</h3>
		<p>
			Die Seite ist immer noch im Aufbau und wird daher unregelmäßig mit neuen Inhalten befüllt! -
			Serienansicht wird aktuell überarbeitet
		</p>
	</div>
</aside>
<br />
{#if data.article.length > 0}
	<div class="pl-2">
		<h1 class="h1 pb-2">
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
			>
				Zuletzt hinzugefügt.
			</span>
		</h1>
		<swiper-container init="false" class="'mySwiper2">
			{#each data.article as name}
				<swiper-slide><Card carddata={name} showflag /></swiper-slide>
			{/each}
		</swiper-container>
		{#each keyz as lang}
			<h1 class="h1 pb-1">
				<div
					class="flex items-center bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					<Icon icon={getflag(lang)} inline style="font-size: 26px;" class="pr-1" /> Mediatheken
				</div>
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
		>
			No Item(s) found for category:
		</span>
		{data.param}
	</h1>
{/if}
