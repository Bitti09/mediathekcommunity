<script>
	// @ts-nocheck
	import {
		VideoSolid,
		HouseChimneySolid,
		TvSolid,
		MusicSolid,
		MasksTheaterSolid,
		ClockSolid
	} from 'svelte-awesome-icons';

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
			data-sveltekit-reload
			href="/"
			selected={$page.url.pathname === '/'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><HouseChimneySolid /></svelte:fragment>
			<span>Home</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
		<AppRailAnchor
			data-sveltekit-reload
			href="/movie"
			selected={$page.url.pathname === '/movie'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><VideoSolid /></svelte:fragment>
			<span>Movies</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
		<AppRailAnchor
			data-sveltekit-reload
			href="/series"
			selected={$page.url.pathname === '/series'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><TvSolid /></svelte:fragment>
			<span>Serien</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-3" value={3} title="tile-3">
		<AppRailAnchor
			data-sveltekit-reload
			href="/music"
			selected={$page.url.pathname === '/music'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><MusicSolid /></svelte:fragment>
			<span>Musik</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-4" value={4} title="tile-4">
		<AppRailAnchor
			data-sveltekit-reload
			href="/culture"
			selected={$page.url.pathname === '/culture'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><MasksTheaterSolid /></svelte:fragment>
			<span>Kultur</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-5" value={5} title="tile-5">
		<AppRailAnchor
			data-sveltekit-reload
			href="/specials"
			selected={$page.url.pathname === '/specials'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><ClockSolid /></svelte:fragment>
			<span>Specials</span>
		</AppRailAnchor>
	</AppRailTile>
	<AppRailTile bind:group={currentTile} name="tile-6" value={6} title="tile-6">
		<AppRailAnchor
			data-sveltekit-reload
			href="/others"
			selected={$page.url.pathname === '/others'}
			on:click={() => {
				onClickAnchor();
			}}
		>
			<svelte:fragment slot="lead"><MusicSolid /></svelte:fragment>
			<span>Sonstige</span>
		</AppRailAnchor>
	</AppRailTile>
</AppRail>
