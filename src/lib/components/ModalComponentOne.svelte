<script lang="ts">
	import {
		modalStore,
		TabGroup,
		Tab,
		TabAnchor,
		Accordion,
		AccordionItem
	} from '@skeletonlabs/skeleton';
	import { modalProps, modalvideo } from '$lib/modalPropsStore';
	import Videoplayer from './Videoplayer.svelte';
	console.log($modalProps);
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Base Classes
	const cBase = 'relative w-modal-wide shadow-xl';
	const cButton = 'absolute -top-3 -right-3 z-1 btn-icon variant-filled';
	let tabSet: number = 0;
	let showvideo: boolean = false;
	function playvideo() {
		showvideo = true;
		if ($modalProps.directlink) {
			modalvideo.set({
				src: $modalProps.directlink,
				type: $modalProps.format,
				poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
				title: $modalProps.title
			});
		} else {
			modalvideo.set({
				src: $modalProps.directlinkhd,
				type: $modalProps.format,
				poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
				title: $modalProps.title
			});
		}
	}
	function playepisode(quality, alldata) {
		showvideo = true;
		tabSet = 0;
		switch (quality) {
			case 'hd':
				modalvideo.set({
					src: alldata.directlinkhd,
					type: $modalProps.format,
					poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
					title: alldata.Title
				});

			case 'md':
				modalvideo.set({
					src: alldata.directlinkmd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
					title: alldata.Title
				});
			case 'sd':
				modalvideo.set({
					src: alldata.directlinksd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
					title: alldata.Title
				});
			default:
				modalvideo.set({
					src: alldata.directlinkhd,
					type: alldata.format,
					poster: 'https://img.mediathek.community/t/p/original/' + $modalProps.backdrop,
					title: alldata.Title
				});
		}
	}
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<div class="card">
			<header class="card-header p-0">
				<div class="h-1/4">
					{#if showvideo != true}
						{#if $modalProps.backdrop != 'backdrop'}
							<img
								class="rounded-lg max-h-fit mx-auto relative"
								src="https://img.mediathek.community/t/p/original{$modalProps.backdrop}"
								alt="description"
							/>
						{:else}
							<img
								class="rounded-lg max-h-fit mx-auto relative"
								src="https://api.mediathek.community/assets/{$modalProps.coverimage}"
								alt="description"
							/>{/if}
					{:else}
						<svelte:component this={Videoplayer} />
					{/if}
				</div>
			</header>
			<section class="p-0 card-t px-0 w-full">
				<TabGroup justify="justify-center">
					<Tab bind:group={tabSet} name="tab1" value={0}>
						<span>Infos</span>
					</Tab>
					{#if $modalProps.category != 'series'}
						<Tab bind:group={tabSet} name="tab2" value={1}>Links</Tab>
					{/if}
					{#if $modalProps.category == 'series'}
						<Tab bind:group={tabSet} name="tab3" value={2}>Episoden - OmU</Tab>
						<Tab bind:group={tabSet} name="tab4" value={3}>Episoden</Tab>
					{/if}
					<!-- Tab Panels --->
					<svelte:fragment slot="panel">
						{#if tabSet === 0}
							<div class="table-container p-0 mt-0">
								<!-- Native Table Element -->
								<table class="table table-hover">
									<tbody>
										<tr>
											<td colspan="3">Sender</td>
											<td>{$modalProps.channel} </td>
										</tr>
										{#if ($modalProps.category == 'series')}
											<tr>
												<td colspan="3">Staffeln</td>
												<td>{$modalProps.episodes} </td>
											</tr>
                                            <tr>
												<td colspan="3">Folgen</td>
												<td>{$modalProps.listepisodes.length} </td>
											</tr>
										{/if}
										<tr>
											<td colspan="3">Quality</td>
											<td>{$modalProps.quality} </td>
										</tr>
										<tr>
											<td colspan="3">publishdate </td>
											<td>{$modalProps.publishdate} </td>
										</tr>
										<tr>
											<td colspan="3">Online until</td>
											<td>{$modalProps.delistdate} </td>
										</tr>
										<tr>
											<td colspan="3">description</td>
											<td>{$modalProps.description} </td>
										</tr>
									</tbody>
								</table>
							</div>
						{:else if tabSet === 1}
							<button type="button" class="btn variant-filled mt-0" on:click={playvideo}
								>play</button
							>
						{:else if tabSet === 2 && $modalProps.category == 'series'}
							<Accordion>
								{#each $modalProps.listepisodes as episode, index}
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
						{:else if tabSet === 3 && $modalProps.category == 'series'}
							<Accordion>
								{#each $modalProps.listepisodes as episode, index}
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
						{/if}
					</svelte:fragment>
				</TabGroup>
				<!-- Responsive Container (recommended) -->
			</section>
		</div>
		<button class={cButton} on:click={parent.onClose}>✕</button>
	</div>
{/if}

<style>
	.dark .card-t {
		background-color: rgb(var(--color-surface-800));
	}
</style>
