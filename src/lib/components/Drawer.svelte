<script>
	import { Drawer, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { Icon } from 'svelte-awesome-icons';
	import { page } from '$app/stores';
	import { sineIn } from 'svelte/easing';
	import { drawer } from '$lib/modalPropsStore';
	import { i } from '@inlang/sdk-js';
	$: activeUrl = $page.url.pathname;
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
					label={i('nav.uhd')}
					href="/uhd"
					active={activeUrl === '/uhd'}
				>
					<svelte:fragment slot="icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M9 7h2v4h2V7h2v10h-2v-4h-2v4H9V7m8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3V7m3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6h1M7 14a3 3 0 0 1-3 3a3 3 0 0 1-3-3V7h2v7a1 1 0 0 0 1 1a1 1 0 0 0 1-1V7h2v7Z"
							/>
						</svg>
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
