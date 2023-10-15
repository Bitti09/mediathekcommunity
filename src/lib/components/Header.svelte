<script>
// @ts-nocheck

	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getDrawerStore, Drawer } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();

	const toggleDrawer = () => {
		const s = {
			id: 'demo',
			// Property Overrides
			position: 'left',
			width: 'w-[90px]',
			padding: 'p-0',
			// Metadata
			meta: 'Styled Drawer'
		};
		drawerStore.open(s);
	};
</script>

<AppBar gridColumns="grid-cols-2" slotDefault="place-self-begin" slotTrail="place-content-end">
	<a href="/">Mediathek Community v0.3.0</a>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<button
			on:click={() => {
				toggleDrawer();
			}}
		>
			Menu
		</button>
 	</svelte:fragment>
</AppBar>
