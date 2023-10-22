<script lang="ts">
import Icon from '@iconify/svelte';
export let carddata: any;
export let showflag = false;

// Mapping of country codes to emoji flags
const flags: { [key: string]: string } = {
	de: 'twemoji:flag-germany',
	at: 'twemoji:flag-austria',
	ch: 'twemoji:flag-switzerland',
	it: 'twemoji:flag-italy',
	fr: 'twemoji:flag-france',
	es: 'twemoji:flag-spain',
	uk: 'twemoji:flag-united-kingdom',
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

// If we have a poster, use that. Otherwise, use the cover image.
const imgurl = carddata.poster ? 'https://img.mediathek.community/t/p/original/' + carddata.poster : 'https://img2.mediathek.community/assets/' + carddata.coverimage;
</script>

// This is the basic card component that is used in the home page and search results.
// It is also used in the details page to show similar shows.
<div class="card sm:p-1 max-w-md border-0">
	<a href="/details/{carddata.id}">
		// Show the channel name and country flag (if available)
		<div class="flex justify-between w-full">
			<div>{carddata.channel}</div>
			<div>
				{#if showflag}<Icon icon={flags[carddata.country]} style="font-size: 26px;" />
				{/if}
			</div>
		</div>
		// Show the image, which is a link to the details page
		<img src={imgurl} figClass="relative cursor-pointer filter bg-black" alt={carddata.title} />
		// Show the audio languages
		{#if carddata.audiolang}
			<div class="flex justify-between w-full">
				<div>Audio:</div>
				<div class="flex">
					{#each carddata.audiolang as lang}
						<Icon icon={flags[lang]} style="font-size: 26px;" class="flex" />
					{/each}
				</div>
			</div>
		{/if}
	</a>
</div>
