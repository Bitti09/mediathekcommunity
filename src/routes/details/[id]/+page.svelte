<script>
	// @ts-nocheck
	// Modals Utils
	import { TabGroup, Tab, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let myPlaylist = [];
	let myPlaylistomu = [];

	let showvideo = false;
	export let data;
	$: data1 = data.article;
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
		if (data1.directlink) {
			modalvideo.set({
				src: data1.directlink,
				type: data1.format,
				poster: poster1,
				title: data1.title
			});
		} else {
			modalvideo.set({
				src: data1.directlinkhd,
				type: data1.format,
				poster: poster1,
				title: data1.title
			});
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
					src="https://api.mediathek.community/assets/{data1.coverimage}"
					alt="description"
				/>{/if}
		{:else}
			<div class="max-h-fit grid place-items-center">
				<svelte:component this={Videoplayer} />
			</div>
		{/if}
	</div>

	<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Details</span>
		</Tab>
		{#if data1.category != 'series'}
			<Tab bind:group={tabSet} name="tab2" value={1}>Links</Tab>
		{:else}
			<Tab bind:group={tabSet} name="tab3" value={2}>Episoden</Tab>
			<Tab bind:group={tabSet} name="tab4" value={3}>Episoden-OmU</Tab>
		{/if}
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
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
			{:else if tabSet === 1}
				<button type="button" class="btn variant-filled mt-0" on:click={playvideo}>play</button>
			{:else if tabSet === 2}
				<Accordion>
					{#each data1.listepisodes as episode}
						{#if episode.omu == false}
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
			{:else if tabSet === 3}
				<Accordion>
					{#each data1.listepisodes as episode}
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
