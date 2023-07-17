<script>
	// @ts-nocheck

	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { drawerStore } from '@skeletonlabs/skeleton';
	function onClickAnchor() {
		drawerStore.close();
	}
	let currentTile;
</script>

<AppRail>
	<!-- --- -->
	<AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<AppRailAnchor
			href="/"
			selected={$page.url.pathname === '/'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-house" /></svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<AppRailAnchor
			href="/movie"
			selected={$page.url.pathname === '/movie'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-video" /></svelte:fragment>
			<span>Movies</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<AppRailAnchor
			href="/series"
			selected={$page.url.pathname === '/series'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-tv" /></svelte:fragment>
			<span>Serien</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<AppRailAnchor
			href="/music"
			selected={$page.url.pathname === '/music'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-music" /></svelte:fragment>
			<span>Musik</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-4" value={4} title="tile-4">
		<AppRailAnchor
			href="/culture"
			selected={$page.url.pathname === '/culture'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-masks-theater" /></svelte:fragment>
			<span>Kultur</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-5" value={5} title="tile-5">
		<AppRailAnchor
			href="/others"
			selected={$page.url.pathname === '/others'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><i class="fa-solid fa-music" /></svelte:fragment>
			<span>Sonstige</span>
		</AppRailAnchor>
	</AppRailTile>
</AppRail>
