
<script>
	import { AppBar, LightSwitch, getDrawerStore } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	const toggleDrawer = () => {
		drawerStore.open({
			id: 'demo',
			position: 'left',
			width: 'w-[90px]',
			padding: 'p-0',
			meta: 'Styled Drawer'
		});
	};
</script>

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-begin" slotTrail="place-content-end">
	<a href="/">Mediathek Community v0.3.2</a>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<button on:click={toggleDrawer}>
			Menu
		</button>
	</svelte:fragment>
</AppBar>
