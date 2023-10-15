<script>
	// @ts-nocheck

	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { AppShell } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Drawer from '$lib/components/Drawer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Drawer />
<AppShell regionPage="relative" slotHeader="sticky top-0 z-10">
	<svelte:fragment slot="header"><Header /></svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
</AppShell>