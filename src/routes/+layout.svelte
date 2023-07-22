<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, drawerStore } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';
	import { BarsSolid } from 'svelte-awesome-icons';
	function drawerOpen() {
		const s = { id: 'med-sidenav' };
		drawerStore.open(s);
		console.log(drawerStore);
	}
	import Drawer from '$lib/components/Drawer.svelte';
</script>
<Drawer />

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="header">
		<AppBar
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
			gap="gap-0"
		>
			<svelte:fragment slot="lead">
				<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
					<BarsSolid />
				</button>
			</svelte:fragment>
			<svelte:fragment slot="default">Mediathek Community v0.0.9</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarLeft">
		<div class="hidden lg:block h-full">
			<Navbar />
		</div>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
