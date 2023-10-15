<script>
	// @ts-nocheck
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	//import { Tabs, TabItem, AccordionItem, Accordion, Alert, Img } from 'flowbite-svelte';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	import { writable } from 'svelte/store';
	const tabSet = writable(0);
	const tabSetSeason = writable(0);

	import { modalvideo, seriestype, playlists } from '$lib/modalPropsStore';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import Icon from '@iconify/svelte';

	import { groupBy } from 'lodash-es';
	let myPlaylist = [];
	let showvideo = false;
	let imgsrc1;
	let d1;
	let keyz;
	let omulist1;
	let omulist2;
	let episodelist;
	export let data;
	d1 = data.article.listepisodes;
	$: data1 = data.article;
	if (data.article.category == 'series') {
		episodelist = d1;
		omulist1 = groupBy(episodelist, (item) => item.season);
		omulist2 = groupBy(episodelist, (item) => item.omu);

		keyz = Object.keys(omulist1);
		console.log(episodelist);
		console.log(omulist2);
	}
	function playvideo() {
		seriestype.set(0);
		let poster1;
		if (data1.backdrop) {
			poster1 = 'https://img.mediathek.community/t/p/original/' + data1.backdrop;
		} else {
			poster1 = 'https://img2.mediathek.community/assets/' + data1.heroimage;
		}
		showvideo = true;
		//console.log(data1);
		if (data1.medialink) {
			modalvideo.set({
				source: [{ src: data1.medialink, type: data1.format }],
				type: data1.format,
				poster: poster1,
				title: data1.title
			});
		} else {
			let sources = [];
			if (data1.directlinkfhd) {
				sources.push({
					src: data1.directlinkfhd,
					type: data1.format,
					res: '1080',
					label: '1080p',
					default: true
				});
			}
			if (data1.directlinkhd) {
				sources.push({
					src: data1.directlinkhd,
					type: data1.format,
					res: '720',
					label: '720p'
				});
			}
			if (data1.directlinkmd) {
				sources.push({
					src: data1.directlinkmd,
					type: data1.format,
					res: '480',
					label: '480p'
				});
			}
			if (data1.directlinklq) {
				sources.push({
					src: data1.directlinklq,
					type: data1.format,
					res: '360',
					label: '360p'
				});
			}
			modalvideo.set({
				source: sources,
				type: data1.format,
				poster: poster1,
				title: data1.title
			});
			//console.log($modalvideo);
		}
	}
	function playepisode(type, season) {
		let d2;
		d2 = omulist1[season];
		myPlaylist = [];
		seriestype.set('omu');
		for (let i = 0; i < d2.length; i++) {
 			let sources = [];
			if (d2[i].directlink) {
				sources.push({
					src: type != 'omu' ? d2[i].directlink : d2[i].directlink_omu,
					type: d2[i].format,
					title: data1.title,
					default: true
				});
			}
			if (d2[i].directlink2) {
				sources.push({
					src: type != 'omu' ? d2[i].directlink2 : d2[i].directlink2_omu,
					type: d2[i].format,
					title: data1.title,
					default: true
				});
			}
			if (d2[i].directlinkfhd) {
				sources.push({
					src: type != 'omu' ? d2[i].directlinkfhd : d2[i].directlinkfhd_omu,
					type: d2[i].format,
					res: '1080',
					label: '1080p',
					default: true
				});
			}
			if (d2[i].directlinkhd) {
				sources.push({
					src: type != 'omu' ? d2[i].directlinkhd : d2[i].directlinkhd_omu,
					type: d2[i].format,
					res: '720',
					label: '720p'
				});
			}
			if (d2[i].directlinkmd) {
				sources.push({
					src: type != 'omu' ? d2[i].directlinkmd : d2[i].directlinkmd_omu,
					type: d2[i].format,
					res: '480',
					label: '480p'
				});
			}
			if (d2[i].directlinklq) {
				sources.push({
					src: type != 'omu' ? d2[i].directlinkl : d2[i].directlinklq_omu,
					type: d2[i].format,
					res: '360',
					label: '360p'
				});
			}
			myPlaylist.push({
				title: type == 'omu' ? d2[i].Title + ' OmU' : d2[i].Title,
				infoTitle: type == 'omu' ? d2[i].Title + ' OmU' : d2[i].Title,
				poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
				sources: sources
			});
		}
		playlists.set(myPlaylist);
		console.log(myPlaylist);
		showvideo = true;
		console.log($playlists);
	}
	if (data.article.backdrop != 'backdrop' && data.article.backdrop) {
		imgsrc1 = 'https://image.tmdb.org/t/p/original' + data.article.backdrop;
	} else {
		imgsrc1 = 'https://api.mediathek.community/assets/' + data.article.coverimage;
	}
</script>

{#if data.article}
	{#if data.article.channel == 'rai'}
		<aside class="alert variant-ghost">
			<!-- Icon -->
			<div><Icon name="info-circle-solid" slot="icon" class="w-4 h-4" /></div>
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">Info</h3>
				<p>Select VO as audio language for English audio</p>
			</div>
		</aside>
	{/if}
	{#if data1.quality == 'uhd'}
		<aside class="alert variant-ghost">
			<!-- Icon -->
			<div><Icon name="info-circle-solid" slot="icon" class="w-4 h-4" /></div>
			<!-- Message -->
			<div class="alert-message">
				<h3 class="h3">Info</h3>
				<p>UHD ist aktuell buggy im Edge Browser - nehmt besser Chrome /p></p>
			</div>
		</aside>
	{/if}
	<div class="">
		{#if showvideo != true}
			<div class=" h-image1 mx-auto grid place-items-center">
				<img src={imgsrc1} />
			</div>
		{:else}
			<div class="h-image1 mx-auto grid place-items-center">
				<svelte:component this={Videoplayer} />
			</div>
		{/if}
	</div>
	<div class="grid grid-rows-2 grid-cols-4">
		<div class="col-span-4">
			<TabGroup justify="justify-center">
				<Tab bind:group={$tabSet} name="tab1" value={0}>
					<span>Details</span>
				</Tab>
				{#if data1.category != 'series'}
					<Tab bind:group={$tabSet} name="tab2" value={1}>Links</Tab>
				{/if}
				{#if keyz && keyz.length > 0}
					<Tab bind:group={$tabSet} name="tab3" value={2}>Seasons: {keyz.length}</Tab>
				{/if}
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if $tabSet === 0}
						<div class=" shadow-md sm:rounded-lg">
							<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<tbody>
									<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
										<th
											scope="row"
											class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Sender
										</th>
										<td class="px-6 py-4">
											{data1.channel}
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
												{data1.listepisodes.length}
											</td>
										</tr>
									{/if}
									<tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
										<th
											scope="row"
											class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
											class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											description
										</th>
										<td class="px-6 py-4">
											{data1.description}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					{:else if $tabSet === 1}
						<div class=" shadow-md sm:rounded-lg">
							<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
								<tbody>
									<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
										<th
											scope="row"
											class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
										>
											Direktlink
										</th>
										<td class="px-4 py-2">
											<button type="button" class="btn variant-filled mt-0" on:click={playvideo}>
												play
											</button>
										</td>
									</tr>
									{#if data1.detailslink}
										<tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
											<th
												scope="row"
												class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
											>
												Direktlink 2
											</th>
											<td class="px-4 py-2">
												<a href={data1.detailslink} target="_blank">
													<button type="button" class="btn variant-filled mt-0">Detailseite</button>
												</a>
											</td>
										</tr>
									{/if}
								</tbody>
							</table>
						</div>
					{:else if $tabSet === 2}
						<TabGroup justify="justify-center">
							{#each keyz as season, i}
								<Tab bind:group={$tabSetSeason} name="tab1" value={i}>
									Season {season} 
								</Tab>
							{/each}
							<svelte:fragment slot="panel">
								{#each keyz as season, i}
									{#if $tabSetSeason === i}
										<Accordion autocollapse>
											{#each omulist1[season] as episode, i}
												<AccordionItem>
													{episode}
													<svelte:fragment slot="summary">{episode.Title}</svelte:fragment>
													<svelte:fragment slot="content">
														<div class="grid grid-cols-5 grid-rows-1 gap-0 flex">
															{#if episode.omu}
																<div class="col-span-3 col-end-auto">{episode.description}</div>
																<div class="col-span-1 justify-center items-center flex">
																	<button
																		type="button"
																		class="btn variant-filled"
																		on:click={playepisode('noomu', season)}
																	>
																		Play Episode {i + 1}
																	</button>
																</div>
																<div class="col-span-1 justify-center items-center flex">
																	<button
																		type="button"
																		class="btn variant-filled"
																		on:click={playepisode('omu', season)}
																	>
																		Play Episode {i + 1} - OmU
																	</button>
																</div>
															{:else}
																<div class="col-span-4 col-end-auto">{episode.description}</div>
																<div class="col-span-1 justify-center items-center flex">
																	<button
																		type="button"
																		class="btn variant-filled"
																		on:click={playepisode('noomu', season)}
																	>
																		Play Episode {i + 1}
																	</button>
																</div>
															{/if}
														</div>
													</svelte:fragment>
												</AccordionItem>
											{/each}
										</Accordion>
									{/if}
								{/each}
							</svelte:fragment>
						</TabGroup>
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
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

<style>
	.h-image1 {
		max-width: 54rem !important;
		height: auto !important;
	}
</style>
