<script>
// @ts-nocheck

	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	let currentTile
</script>

<AppRail>
	<!-- --- -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
		<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead"><i class="fa-solid fa-house"/></svelte:fragment>
		<span>Home</span>
	</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<AppRailAnchor href="/movie" selected={$page.url.pathname === '/movie'}>
		<svelte:fragment slot="lead"><i class="fa-solid fa-video"/></svelte:fragment>
		<span>Tile 1</span>
	</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<AppRailAnchor href="/series" selected={$page.url.pathname === '/series'}>
		<svelte:fragment slot="lead"><i class="fa-solid fa-tv"/></svelte:fragment>
		<span>Tile 2</span>
	</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<AppRailAnchor href="/music" selected={$page.url.pathname === '/music'}>
		<svelte:fragment slot="lead"><i class="fa-solid fa-music"/></svelte:fragment>
		<span>Tile 3</span>
	</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-4" value={4} title="tile-4">
		<AppRailAnchor href="/others" selected={$page.url.pathname === '/others'}>
		<svelte:fragment slot="lead"><i class="fa-solid fa-music"/></svelte:fragment>
		<span>others</span>
	</AppRailAnchor>
	</AppRailTile>
</AppRail>
