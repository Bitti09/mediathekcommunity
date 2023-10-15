<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';
	import { Card, Img } from 'flowbite-svelte';
	export let carddata;
	export let showflag = false;
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
			case 'se':
				return 'twemoji:flag-sweden';
		}
	}
	let imgurl;
	if (carddata.poster) {
		imgurl = 'https://img.mediathek.community/t/p/original/' + carddata.poster;
	} else {
		imgurl = 'https://img2.mediathek.community/assets/' + carddata.coverimage;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<Card class="sm:p-4 max-w-lg border-0">
	<a href="/details/{carddata.id}">
		<div class="flex justify-between w-full">
			<div>{carddata.channel}</div>
			<div>
				{#if showflag}<Icon icon={getflag(carddata.country)} style="font-size: 26px;" />
				{/if}
			</div>
		</div>
		<Img src={imgurl} figClass="relative cursor-pointer filter bg-black" />
		{#if carddata.audiolang}
			<div class="flex justify-between w-full">
				<div>Audio:</div>
				<div class="flex">
					{#each carddata.audiolang as lang}
						<Icon icon={getflag(lang)} style="font-size: 26px;" class="flex" />
					{/each}
				</div>
			</div>
		{/if}
	</a>
</Card>
