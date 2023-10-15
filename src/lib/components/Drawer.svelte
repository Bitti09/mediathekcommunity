<script>
	import { AppRail, AppRailAnchor, getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {
		HouseChimneySolid,
		TvSolid,
		VideoSolid,
		MasksTheaterSolid,
		StarSolid,
		CirclePlaySolid
	} from 'svelte-awesome-icons';
	const drawerStore = getDrawerStore();
	$: classesDrawer = $drawerStore.id === 'demo' ? 'top-14' : 'top-14';
</script>

<Drawer class={classesDrawer}>
	<AppRail>
		<AppRailAnchor href="/" selected={$page.url.pathname === '/'} data-sveltekit-reload>
			<svelte:fragment slot="lead"><HouseChimneySolid /></svelte:fragment>
			Home
		</AppRailAnchor>
		<AppRailAnchor href="/movie" selected={$page.url.pathname === '/movie'} data-sveltekit-reload>
			<svelte:fragment slot="lead"><VideoSolid /></svelte:fragment>
			movie
		</AppRailAnchor>
		<AppRailAnchor href="/series" selected={$page.url.pathname === '/series'} data-sveltekit-reload>
			<svelte:fragment slot="lead"><TvSolid /></svelte:fragment>
			series
		</AppRailAnchor>
		<AppRailAnchor
			href="/culture"
			selected={$page.url.pathname === '/culture'}
			data-sveltekit-reload
		>
			<svelte:fragment slot="lead"><MasksTheaterSolid /></svelte:fragment>
			culture
		</AppRailAnchor>
		<AppRailAnchor
			href="/specials"
			selected={$page.url.pathname === '/specials'}
			data-sveltekit-reload
		>
			<svelte:fragment slot="lead"><StarSolid /></svelte:fragment>
			specials
		</AppRailAnchor>
		<AppRailAnchor href="/uhd" selected={$page.url.pathname === '/uhd'} data-sveltekit-reload>
			<svelte:fragment slot="lead">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="currentColor"
						d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9V7m8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3V7m3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6h1M7 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3V7h2v7a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7h2v7Z"
					/>
				</svg>
			</svelte:fragment>
			uhd
		</AppRailAnchor>
		<AppRailAnchor href="/other" selected={$page.url.pathname === '/other'} data-sveltekit-reload>
			<svelte:fragment slot="lead"><CirclePlaySolid /></svelte:fragment>
			other
		</AppRailAnchor>
	</AppRail>
</Drawer>
