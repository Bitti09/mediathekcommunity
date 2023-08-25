<script>
	// @ts-nocheck
	import { Img } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	import { Card } from 'flowbite-svelte';
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
			case 'no':
				return 'twemoji:flag-norway';
		}
	}
	let imgurl;
	function inFuture(date) {
		var now = new Date();
		var then = new Date(date);
		//console.log(then > now);
		if (then > now) {
			return true;
		} else {
			return false;
		}
	}
	if (carddata.poster) {
		imgurl = 'https://img.mediathek.community/t/p/original' + carddata.poster;
	} else {
		imgurl = 'https://img2.mediathek.community/assets/' + carddata.coverimage;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<Card class="sm:p-4 max-w-lg border-0">
	<a href="/details/{carddata.id}">
		<div class="flex justify-between w-full">
			<div>
				{#if showflag}<Icon icon={getflag(carddata.country)} style="font-size: 26px;" />
				{/if}
			</div>
			<div>{carddata.channel}</div>
		</div>
		<Img src={imgurl} figClass="relative cursor-pointer filter bg-black" />
	</a>
</Card>
