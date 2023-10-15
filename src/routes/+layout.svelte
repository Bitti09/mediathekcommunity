<script>
// @ts-nocheck

	import '../app.postcss';
	import { initializeStores } from '@skeletonlabs/skeleton';
	initializeStores();
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Drawer from '$lib/components/Drawer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<Drawer />
<div class="flex flex-col h-screen">

<Header />
<main class="max-w-screen-xxl m-auto flex-grow w-full">
	<slot />
</main>
<Footer />
</div>