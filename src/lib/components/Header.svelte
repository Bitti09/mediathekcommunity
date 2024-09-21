<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	import { DarkMode } from 'flowbite-svelte';
</script>

<div class="fixed top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800">
	<Navbar class="">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Mediathek Community</span
			>
		</NavBrand>
		<div class="flex items-center md:order-2">
			<DarkMode></DarkMode>
			<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
		</div>
 		<NavUl {activeUrl}>
			<NavLi href="/">Home</NavLi>
			<NavLi href="/docs/components/navbar">Navbar</NavLi>
			<NavLi href="/docs/components/accordion">Accordion</NavLi>
			<NavLi href="/docs/components/alert">Alert</NavLi>
			<NavLi href="/docs/components/avatar">Avatar</NavLi>
		</NavUl>
	</Navbar>
</div>
