<script>
	// @ts-nocheck
	// Modals Utils
	import { onMount } from 'svelte';
	import {
		modalStore,
		TabGroup,
		Tab,
		TabAnchor,
		Accordion,
		AccordionItem
	} from '@skeletonlabs/skeleton';
	import Videoplayer from '$lib/components/Videoplayer.svelte';
	import { modalProps, modalvideo } from '$lib/modalPropsStore';

	let showvideo = false;
	export let data;
	$: data1 = data.article;

	let tabSet = 0;
	function playvideo() {
		//console.log(data1);
		let poster1;
		if (data1.backdrop) {
			poster1 = 'https://img.mediathek.community/t/p/original/' + data1.backdrop;
		} else {
			poster1 = 'https://img2.mediathek.community/assets/' + data1.heroimage;
		}
		//console.log(data1);
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
	function playepisode(quality, alldata) {
		showvideo = true;
		//tabSet = 0;
		switch (quality) {
			case 'hd':
				modalvideo.set({
					src: alldata.directlinkhd,
					type: data1.format,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					title: alldata.Title
				});

			case 'md':
				modalvideo.set({
					src: alldata.directlinkmd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					title: alldata.Title
				});
			case 'sd':
				modalvideo.set({
					src: alldata.directlinksd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					title: alldata.Title
				});
			default:
				modalvideo.set({
					src: alldata.directlinkhd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + data1.backdrop,
					title: alldata.Title
				});
		}
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
			<div>
				<div class=" "><svelte:component this={Videoplayer} /></div>
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
					{#each data1.listepisodes as episode, index}
						{#if episode.omu == false}
							<AccordionItem>
								<svelte:fragment slot="summary">{episode.Title}</svelte:fragment>
								<svelte:fragment slot="content">
									<div class="table-container p-0 mt-0">
										<!-- Native Table Element -->
										<table class="table table-hover">
											<tbody>
												<tr> {episode.description}</tr>
												<tr>
													{#if episode.directlinkhd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('hd', episode)}>play HD</button
														>
													{/if}
													{#if episode.directlinkmd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('md', episode)}>play MD</button
														>
													{/if}
													{#if episode.directlinksd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('sd', episode)}>play SD</button
														>
													{/if}
												</tr>
											</tbody>
										</table>
									</div></svelte:fragment
								>
							</AccordionItem>
						{/if}
					{/each}
				</Accordion>
			{:else if tabSet === 3}
				<Accordion>
					{#each data1.listepisodes as episode, index}
						{#if episode.omu == true}
							<AccordionItem>
								<svelte:fragment slot="summary">{episode.Title}</svelte:fragment>
								<svelte:fragment slot="content">
									<div class="table-container p-0 mt-0">
										<!-- Native Table Element -->
										<table class="table table-hover">
											<tbody>
												<tr> {episode.description}</tr>
												<tr>
													{#if episode.directlinkhd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('hd', episode)}>play HD</button
														>
													{/if}
													{#if episode.directlinkmd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('md', episode)}>play MD</button
														>
													{/if}
													{#if episode.directlinksd != ''}
														<button
															type="button"
															class="btn variant-filled"
															on:click={playepisode('sd', episode)}>play SD</button
														>
													{/if}
												</tr>
											</tbody>
										</table>
									</div></svelte:fragment
								>
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
