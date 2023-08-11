<script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		Drawer,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Footer
	} from 'flowbite-svelte';
	import { Icon } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
	import { sineIn } from 'svelte/easing';
    import { drawer } from '$lib/modalPropsStore';
	import { i } from '@inlang/sdk-js';
 	$: activeUrl = $page.url.pathname;
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<Drawer
	transitionType="fly"
	{transitionParams}
	bind:hidden={$drawer}
	id="sidebar1"
	leftOffset="z-top top-14 h-screen left-0"
>
	<Sidebar>
		<SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
			<SidebarGroup>
				<SidebarItem data-sveltekit-reload label="Home" href="/" active={activeUrl === '/'}>
					<svelte:fragment slot="icon">
						<Icon name="house-chimney-solid" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					data-sveltekit-reload
					label={i('nav.movie')}
					href="/movie"
					active={activeUrl === '/movie'}
				>
					<svelte:fragment slot="icon">
						<Icon name="video-solid" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					data-sveltekit-reload
					label={i('nav.serie')}
					href="/series"
					active={activeUrl === '/series'}
				>
					<svelte:fragment slot="icon">
						<Icon name="tv-solid" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					data-sveltekit-reload
					label={i('nav.culture')}
					href="/culture"
					active={activeUrl === '/culture'}
				>
					<svelte:fragment slot="icon">
						<Icon name="masks-theater-solid" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					data-sveltekit-reload
					label={i('nav.special')}
					href="/specials"
					active={activeUrl === '/specials'}
				>
					<svelte:fragment slot="icon">
						<Icon name="star-solid" />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					data-sveltekit-reload
					label={i('nav.other')}
					href="/other"
					active={activeUrl === '/other'}
				>
					<svelte:fragment slot="icon">
						<Icon name="circle-play-solid" />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</Drawer>
