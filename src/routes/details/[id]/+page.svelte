<script>
	// @ts-nocheck
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { Card, Tabs, TabItem, AccordionItem, Accordion } from 'flowbite-svelte';
	import { modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let myPlaylist = [];
	let myPlaylistomu = [];
	import { A, Img } from 'flowbite-svelte';
	let showvideo = false;
	let imgsrc1;
	export let data;
	$: data1 = data.article;
	//console.log(data.article);
	function playvideo() {
		seriestype.set('');
		let poster1;
		if (data1.backdrop) {
			poster1 = 'https://img.mediathek.community/t/p/original/' + data1.backdrop;
		} else {
			poster1 = 'https://img2.mediathek.community/assets/' + data1.heroimage;
		}
		showvideo = true;
		//console.log(data1);
		if (data1.directlink) {
			modalvideo.set({
				source: [{ src: data1.directlink, type: data1.format }],
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
	function playepisode(alldata, type) {
		myPlaylist = [];
		myPlaylistomu = [];
		seriestype.set(type);
		for (let i = 0; i < data1.listepisodes.length; i++) {
			if (data1.listepisodes[i].omu == false) {
				let sources = [];
				if (data1.listepisodes[i].directlinkfhd) {
					sources.push({
						src: data1.listepisodes[i].directlinkfhd,
						type: data1.listepisodes[i].format,
						res: '1080',
						label: '1080p',
						default: true
					});
				}
				if (data1.listepisodes[i].directlinkhd) {
					sources.push({
						src: data1.listepisodes[i].directlinkhd,
						type: data1.listepisodes[i].format,
						res: '720',
						label: '720p'
					});
				}
				if (data1.listepisodes[i].directlinkmd) {
					sources.push({
						src: data1.listepisodes[i].directlinkmd,
						type: data1.listepisodes[i].format,
						res: '480',
						label: '480p'
					});
				}
				if (data1.listepisodes[i].directlinklq) {
					sources.push({
						src: data1.listepisodes[i].directlinklq,
						type: data1.listepisodes[i].format,
						res: '360',
						label: '360p'
					});
				}

				myPlaylist.push({
					title: data1.listepisodes[i].Title,
					infoTitle: data1.listepisodes[i].Title,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					sources: sources
				});
			} else {
				let sources = [];
				if (data1.listepisodes[i].directlinkfhd) {
					sources.push({
						src: data1.listepisodes[i].directlinkfhd,
						type: data1.listepisodes[i].format,
						res: '1080',
						label: '1080p',
						default: true
					});
				}
				if (data1.listepisodes[i].directlinkhd) {
					sources.push({
						src: data1.listepisodes[i].directlinkhd,
						type: data1.listepisodes[i].format,
						res: '720',
						label: '720p'
					});
				}
				if (data1.listepisodes[i].directlinkmd) {
					sources.push({
						src: data1.listepisodes[i].directlinkmd,
						type: data1.listepisodes[i].format,
						res: '480',
						label: '480p'
					});
				}
				if (data1.listepisodes[i].directlinklq) {
					sources.push({
						src: data1.listepisodes[i].directlinklq,
						type: data1.listepisodes[i].format,
						res: '360',
						label: '360p'
					});
				}
				myPlaylistomu.push({
					title: 'omu' + data1.listepisodes[i].Title,
					infoTitle: data1.listepisodes[i].Title,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					sources: sources
				});
			}
		}
		noomulist.set(myPlaylist);
		omulist.set(myPlaylistomu);
		showvideo = true;
	}

	if (data.article.backdrop != 'backdrop' && data.article.backdrop) {
		imgsrc1 = 'https://img.mediathek.community/t/p/original/' + data.article.backdrop;
	} else {
		imgsrc1 = 'https://img2.mediathek.community/assets/' + data.article.coverimage;
	}
</script>

{#if data.article}
	<div class="">
		{#if showvideo != true}
			<div class=" h-image1 mx-auto grid place-items-center">
 					<Img src={imgsrc1} />
 			</div>
		{:else}
			<div class="h-image1 mx-auto grid place-items-center">
				<svelte:component this={Videoplayer} />
			</div>
		{/if}
	</div>
	<div class="grid grid-rows-2 grid-cols-4">

		<div class="col-span-4">
			<Tabs style="underline" class="px-2">
				<TabItem open>
					<div slot="title" class="flex items-center gap-2">Details</div>
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
				</TabItem>
				{#if data1.category != 'series'}
					<TabItem>
						<div slot="title" class="flex items-center gap-2">Links</div>
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
					</TabItem>
				{:else}
					<TabItem>
						<div slot="title" class="flex items-center gap-2">Episoden</div>
						<Accordion>
							{#each data1.listepisodes as episode, i}
								{#if episode.omu == false}
									<AccordionItem>
										<svelte:fragment slot="header">{episode.Title}</svelte:fragment>
										<div class="grid grid-cols-4 grid-rows-1 gap-0 flex">
											<div class="col-span-3">{episode.description}</div>
											<div class="col-span-1 justify-center items-center flex">
												<button
													type="button"
													class="btn variant-filled"
													on:click={playepisode(episode, 'noomu')}
												>
													Play E{i + 1}
												</button>
											</div>
										</div>
									</AccordionItem>
								{/if}
							{/each}
						</Accordion>
					</TabItem>
					<TabItem>
						<div slot="title" class="flex items-center gap-2">Episoden-OmU</div>
						<Accordion>
							{#each data1.listepisodes as episode, i}
								{#if episode.omu == true}
									<AccordionItem>
										<svelte:fragment slot="header">{episode.Title}</svelte:fragment>
										<div class="grid grid-cols-4 grid-rows-1 gap-0 flex">
											<div class="col-span-3">{episode.description}</div>
											<div class="col-span-1 justify-center items-center flex">
												<button
													type="button"
													class="btn variant-filled"
													on:click={playepisode(episode, 'noomu')}
												>
													Play E{i + 1} OmU
												</button>
											</div>
										</div>
									</AccordionItem>
								{/if}
							{/each}
						</Accordion>
					</TabItem>
				{/if}
			</Tabs>
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
