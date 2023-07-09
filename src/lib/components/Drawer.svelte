<script lang="ts">
	import { drawerStore, Drawer } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';
     $: classesDrawer = $drawerStore.id === 'med-sidenav' ? 'lg:hidden' : '';

</script>

<Drawer class={classesDrawer}>
    {#if $drawerStore.id === 'med-sidenav'}
    <Navbar/>
    {:else}
    fallback
		<!-- (fallback contents) -->
	{/if}
</Drawer>

