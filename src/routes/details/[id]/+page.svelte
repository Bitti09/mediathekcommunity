<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	import { TabGroup, Tab, TabAnchor, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { modalProps, modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let myPlaylist = [];
	let myPlaylistomu = [];

	let showvideo = false;
	export let data;
	$: data1 = data.article;
	$: data1.episode_list.sort((a, b) => (a.date_created > b.date_created ? 1 : -1));
	$: console.log(data.param);
	let tabSet = 0;
	function playvideo() {
		seriestype.set('');
		let poster1;
		if (data1.backdrop) {
			poster1 = 'https://img.mediathek.community/t/p/original/' + data1.backdrop;
		} else {
			poster1 = 'https://img2.mediathek.community/assets/' + data1.heroimage;
		}
		showvideo = true;
		if (data1.streamlink) {
			modalvideo.set({
				src: data1.streamlink,
				type: data1.streamformat,
				poster: poster1,
				title: data1.title
			});
		} else {
			modalvideo.set({
				src: data1.streamlink,
				type: data1.streamformat,
				poster: poster1,
				title: data1.title
			});
		}
	}
	function playepisode(alldata, type) {
		myPlaylist = [];
		myPlaylistomu = [];
		seriestype.set(type);
		for (let i = 0; i < data1.episode_list.length; i++) {
			if (data1.episode_list[i].omu == false) {
				let sources = [];
				/*
				if (data1.episode_list[i].directlinkfhd) {
					sources.push({
						src: data1.episode_list[i].directlinkfhd,
						type: data1.episode_list[i].format,
						res: '1080',
						label: '1080p',
						default: true
					});
				}
				if (data1.episode_list[i].directlinkhd) {
					sources.push({
						src: data1.episode_list[i].directlinkhd,
						type: data1.episode_list[i].format,
						res: '720',
						label: '720p'
					});
				}
				if (data1.episode_list[i].directlinkmd) {
					sources.push({
						src: data1.episode_list[i].directlinkmd,
						type: data1.episode_list[i].format,
						res: '480',
						label: '480p'
					});
				}
				if (data1.episode_list[i].directlinklq) {
					sources.push({
						src: data1.episode_list[i].directlinklq,
						type: data1.episode_list[i].format,
						res: '360',
						label: '360p'
					});
				}*/
				console.log(data1.episode_list[i].streamlink);
				if (data1.episode_list[i].streamlink) {
					sources.push({
						src: data1.episode_list[i].streamlink,
						type: data1.episode_list[i].streamformat,
						default: true
					});
				}
				var poster12;
				if (data1.backdrop) {
					poster12 = 'https://img.mediathek.community/t/p/original/' + data1.backdrop;
				} else {
					poster12 = 'https://img2.mediathek.community/assets/' + data1.heroimage;
				}
				myPlaylist.push({
					title: data1.episode_list[i].name,
					infoTitle: data1.episode_list[i].name,
					poster: poster12,
					thumb: poster12,
					sources: sources
				});
			} else {
				let sources = [];
				/*if (data1.episode_list[i].directlinkfhd) {
					sources.push({
						src: data1.episode_list[i].directlinkfhd,
						type: data1.episode_list[i].format,
						res: '1080',
						label: '1080p',
						default: true
					});
				}
				if (data1.episode_list[i].directlinkhd) {
					sources.push({
						src: data1.episode_list[i].directlinkhd,
						type: data1.episode_list[i].format,
						res: '720',
						label: '720p'
					});
				}
				if (data1.episode_list[i].directlinkmd) {
					sources.push({
						src: data1.episode_list[i].directlinkmd,
						type: data1.episode_list[i].format,
						res: '480',
						label: '480p'
					});
				}*/
				if (data1.episode_list[i].directlinklq) {
					sources.push({
						src: data1.episode_list[i].directlinklq,
						type: data1.episode_list[i].format,
						res: '360',
						label: '360p'
					});
				}
				myPlaylistomu.push({
					title: 'omu' + data1.episode_list[i].Title,
					infoTitle: data1.episode_list[i].Title,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					sources: sources
				});
			}
		}
		noomulist.set(myPlaylist);
		omulist.set(myPlaylistomu);
		showvideo = true;
		//tabSet = 0;
	}
</script>

{#if data.article}
	<div>
		{#if showvideo != true}
			{#if data1.backdrop != 'backdrop' && data1.backdrop}
				<img
					class="rounded-lg max-h-fit mx-auto relative"
					src="https://img.mediathek.community/t/p/original{data1.backdrop}"
					alt="description"
				/>
			{:else}
				<img
					class="rounded-lg max-h-fit mx-auto relative"
					src="https://api.mediathek.community/assets/{data1.heroimage}.jpg"
					alt="description"
				/>{/if}
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
		{#if data1.category == 'movies'}
			<Tab bind:group={tabSet} name="tab2" value={1}>Links</Tab>
		{:else}
			<Tab bind:group={tabSet} name="tab3" value={2}>Episoden</Tab>
			<!-- <Tab bind:group={tabSet} name="tab4" value={3}>Episoden-OmU</Tab>-->
		{/if}
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div class=" shadow-md sm:rounded-lg">
					<table class="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<tbody>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 w-full lg:w-1/4">
								<th
									scope="row"
									class="w-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-1/4"
								>
									Land
								</th>
								<td class="px-6 py-4">
									{data1.country}
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="w-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-1/4"
								>
									Sender
								</th>

								<td class="px-6 py-4">
									{data1.channel}
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="w-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-1/4"
								>
									Quality
								</th>
								<td class="px-6 py-4">
									{data1.quality}
								</td>
							</tr>
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white lg:w-1/4"
								>
									Sendesprache
								</th>
								<td class="px-6 py-4">
									{data1.lang}
								</td>
							</tr>
							{#if data1.category == 'series'}
								<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
									<th
										scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Staffeln
									</th>
									<td class="px-6 py-4">
										{data1.episodes}
									</td>
								</tr>
								<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
									<th
										scope="row"
										class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
									>
										Folgen
									</th>
									<td class="px-6 py-4">
										{data1.episode_list.length}
									</td>
								</tr>
							{/if}
							<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									description
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
					<button type="button" class="btn variant-filled mt-0" on:click={playvideo}>play</button>
				</div>
			{:else if tabSet === 2}
				<Accordion>
					{#each data1.episode_list as episode, index (episode.date_created)}
						{#if episode.omu == false}
							<AccordionItem>
								<svelte:fragment slot="summary">{episode.name}</svelte:fragment>
								<svelte:fragment slot="content">
									<div class="grid grid-cols-4 grid-rows-1 gap-0 flex">
										<div class="col-span-3">{episode.description}</div>
										<div class="col-span-1 justify-center items-center flex">
											<button
												type="button"
												class="btn variant-filled"
												on:click={playepisode(episode, 'noomu')}>Play</button
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
					{#each data1.episode_list as episode, index}
						{#if episode.omu == true}
							<AccordionItem>
								<svelte:fragment slot="summary">{episode.Title}</svelte:fragment>
								<svelte:fragment slot="content">
									<div class="grid grid-cols-4 grid-rows-1 gap-0 flex">
										<div class="col-span-3">{episode.description}</div>
										<div class="col-span-1 justify-center items-center flex">
											<button
												type="button"
												class="btn variant-filled"
												on:click={playepisode(episode, 'noomu')}>Play</button
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
			class="bg-gradient-to-br from-pink-100 to-red-900 bg-clip-text text-transparent box-decoration-clone"
			>No Item(s) found for category:</span
		>
		{data.param}
	</h1>
{/if}
