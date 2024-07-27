<script>
	// @ts-nocheck
	// Modals Utils
	export let data;

	import { TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let myPlaylist = [];
	let myPlaylistomu = [];

	function sortepisodes(data2) {
		if (data2.episodelist.length > 0) {
			//console.log(data2.episodelist);
		}
	}
	//console.log(data);
	let showvideo = false;
	$: data1 = data.page;
	$: channelinfo = data.page.channel;
	$: sortepisodes(data1);
	// $: console.log(data1);

	let tabSet = 0;

	function playvideo() {
		seriestype.set('');
		let poster1 = data1.backdrop
			? `https://img.mediathek.community/t/p/original/${data1.backdrop}`
			: `https://img2.mediathek.community/assets/${data1.heroimage}`;

		showvideo = true;
		modalvideo.set({
			src: data1.streamlink,
			type: data1.streamformat,
			poster: poster1,
			title: data1.title
		});
	}

	function playepisode(alldata, type) {
		myPlaylist = [];
		myPlaylistomu = [];
		seriestype.set(type);

		data1.episodelist.forEach((episode) => {
			let sources = [];
			if (episode.streamlink) {
				sources.push({
					src: episode.streamlink,
					type: episode.format,
					default: true
				});
			}

			let poster12 = data1.backdrop
				? `https://img.mediathek.community/t/p/original/${data1.backdrop}`
				: `https://img2.mediathek.community/assets/${data1.heroimage}`;

			if (!episode.omu) {
				myPlaylist.push({
					title: episode.title,
					infoTitle: episode.title,
					poster: poster12,
					thumb: poster12,
					sources: sources
				});
			} else {
				if (episode.directlinklq) {
					sources.push({
						src: episode.directlinklq,
						type: episode.format,
						res: '360',
						label: '360p'
					});
				}
				myPlaylistomu.push({
					title: `omu${episode.title}`,
					infoTitle: episode.title,
					poster: `https://img.mediathek.community/t/p/original/${data1.backdrop}`,
					sources: sources
				});
			}
		});
		console.log(myPlaylist);
		console.log(omulist);
		noomulist.set(myPlaylist);
		omulist.set(myPlaylistomu);
		showvideo = true;
	}
</script>

{#if data1}
	<div>
		<aside class="alert variant-ghost-error">
			<div class="alert-message">
				<h3 class="h3">WIP</h3>
				<p>I'm rebuilding this site with Directus as backend - Currently using: Directus</p>
			</div>
		</aside>
		{#if channelinfo.info}
			<aside class="alert variant-ghost-error">
				<div class="alert-message">
					<h3 class="h3">{channelinfo.name}</h3>
					<p>{channelinfo.info}</p>
				</div>
			</aside>
		{/if}
		{#if !showvideo}
			{#if data1.backdrop != 'backdrop' && data1.backdrop}
				<img
					class="relative mx-auto rounded-lg"
					src="https://img.mediathek.community/t/p/original{data1.backdrop}"
					alt="description"
				/>
			{:else}
				<img
					class="relative mx-auto rounded-lg"
					src="https://api.mediathek.community/assets/{data1.heroimage}.jpg"
					alt="description"
				/>
			{/if}
		{:else}
			<div class="flex justify-center">
				<svelte:component this={Videoplayer} />
			</div>
		{/if}
	</div>

	<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Details</span>
		</Tab>
		{#if data1.mediatype == 'movie'}
			<Tab bind:group={tabSet} name="tab2" value={1}>Links</Tab>
		{:else}
			<Tab bind:group={tabSet} name="tab3" value={2}>Episoden</Tab>
		{/if}
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div class="shadow-md sm:rounded-lg">
					<table class="w-full table-auto text-left text-sm text-gray-500 dark:text-gray-400">
						<tbody>
							<tr class="w-full border-b bg-white dark:border-gray-700 dark:bg-gray-900 lg:w-1/4">
								<th
									scope="row"
									class="w-full whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:w-1/4"
								>
									Land
								</th>
								<td class="px-6 py-4">
									{data1.country}
								</td>
							</tr>
							<tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
								<th
									scope="row"
									class="w-full whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:w-1/4"
								>
									Sender
								</th>
								<td class="px-6 py-4">
									{data1.channel.name}
								</td>
							</tr>
							<tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
								<th
									scope="row"
									class="w-full whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white lg:w-1/4"
								>
									Qualität
								</th>
								<td class="px-6 py-4">
									{data1.quality}
								</td>
							</tr>
							{#if data1.episodelist.length > 0}
								<tr class="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
									<th
										scope="row"
										class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
									>
										Staffeln
									</th>
									<td class="px-6 py-4">
										{data1.episodelist.length || 1}
									</td>
								</tr>
								<tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
									<th
										scope="row"
										class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
									>
										Folgen
									</th>
									<td class="px-6 py-4">
										{data1.episodelist.length}
									</td>
								</tr>
							{/if}
							<tr class="border-b bg-white dark:border-gray-700 dark:bg-gray-900">
								<th
									scope="row"
									class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
								>
									Description
								</th>
								<td class="px-6 py-4">
									{data1.overview}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			{:else if tabSet === 1}
				<div class="flex justify-center">
					<button type="button" class="variant-filled btn mt-0" on:click={playvideo}>play</button>
				</div>
			{:else if tabSet === 2}
				<Accordion>
					{#each data1.episodelist as episode, index (episode.id)}
						{#if !episode.omu}
							<AccordionItem>
								<svelte:fragment slot="summary"
									>E: {episode.episode} - {episode.title}</svelte:fragment
								>
								<svelte:fragment slot="content">
									<div class="grid grid-cols-4 grid-rows-1 gap-0">
										<div class="col-span-3">{episode.overview}</div>
										<div class="col-span-1 flex items-center justify-center">
											<button
												type="button"
												class="variant-filled btn"
												on:click={() => playepisode(episode, 'noomu')}>Play</button
											>
										</div>
									</div>
								</svelte:fragment>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			{:else if tabSet === 3}
				<Accordion>
					{#each data1.episodes as episode, index}
						{#if episode.omu}
							<AccordionItem>
								<svelte:fragment slot="summary"
									>E: {episode.episode} - {episode.title}</svelte:fragment
								>
								<svelte:fragment slot="content">
									<div class="grid grid-cols-4 grid-rows-1 gap-0">
										<div class="col-span-3">{episode.overview}</div>
										<div class="col-span-1 flex items-center justify-center">
											<button
												type="button"
												class="variant-filled btn"
												on:click={() => playepisode(episode, 'omu')}>Play</button
											>
										</div>
									</div>
								</svelte:fragment>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			{/if}
		</svelte:fragment>
	</TabGroup>
{:else}
	<h1 class="h1">
		<span
			class="bg-gradient-to-br from-pink-100 to-red-900 box-decoration-clone bg-clip-text text-transparent"
			>No Item(s) found for :</span
		>
		{data.param}
	</h1>
{/if}
<!---->
