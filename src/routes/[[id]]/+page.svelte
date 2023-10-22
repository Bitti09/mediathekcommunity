<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import { groupBy } from 'lodash-es';
	import Card from '$lib/components/Card.svelte';
	const flags = {
		de: 'twemoji:flag-germany',
		at: 'twemoji:flag-austria',
		ch: 'twemoji:flag-switzerland',
		it: 'twemoji:flag-italy',
		fr: 'twemoji:flag-france',
		es: 'twemoji:flag-spain',
		uk: 'twenoji:flag-united-kingdom',
		pl: 'twemoji:flag-poland',
		nl: 'twemoji:flag-netherlands',
		be: 'twemoji:flag-belgium',
		dk: 'twemoji:flag-denmark',
		fi: 'twemoji:flag-finland',
		ie: 'twemoji:flag-ireland',
		no: 'twemoji:flag-norway',
		pt: 'twemoji:flag-portugal',
		se: 'twemoji:flag-sweden'
	};
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
		{#if data.param != 'specials'}
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
		{/if}
		{#each keyz as lang}
			<h1 class="h1 pb-1">
				<div
					class="flex items-center bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>
					{#if data.param == 'specials'}
						{lang}
					{:else}
						<Icon icon={flags[lang]} inline style="font-size: 26px;" class="pr-1" />
						{lang} Mediathek
					{/if}
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
