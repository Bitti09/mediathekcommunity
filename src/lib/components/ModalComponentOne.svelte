<script lang="ts">
	import { modalStore, TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { modalProps } from '$lib/modalPropsStore';
	console.log($modalProps);
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Base Classes
	const cBase = 'relative w-modal-wide shadow-xl';
	const cButton = 'absolute -top-3 -right-3 z-1 btn-icon variant-filled';
	let tabSet: number = 0;
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<div class="card">
			<header class="card-header p-0">
				<div class="h-1/4">
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
				</div>
			</header>
			<section class="p-0 card-t px-0 w-full">
				<TabGroup justify="justify-center">
					<Tab bind:group={tabSet} name="tab1" value={0}>
						<span>(label 1)</span>
					</Tab>
					<Tab bind:group={tabSet} name="tab2" value={1}>(label 2)</Tab>
					<Tab bind:group={tabSet} name="tab3" value={2}>(label 3)</Tab>
					<!-- Tab Panels --->
					<svelte:fragment slot="panel"  >
						{#if tabSet === 0}
							<div class="table-container p-0 mt-0">
								<!-- Native Table Element -->
								<table class="table table-hover">
									<tbody>
										<tr>
											<td colspan="3">row.position</td>
											<td>row.name</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<th colspan="3">Calculated Total Weight</th>
											<td>totalWeight</td>
										</tr>
									</tfoot>
								</table>
							</div>
						{:else if tabSet === 1}
							(tab panel 2 contents)
						{:else if tabSet === 2}
							(tab panel 3 contents)
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
