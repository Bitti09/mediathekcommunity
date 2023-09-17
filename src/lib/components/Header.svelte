<script>
	import { Navbar, NavBrand, NavHamburger, Footer, DarkMode } from 'flowbite-svelte';
	import { drawer } from '$lib/modalPropsStore';
	import { lang } from '$lib/modalPropsStore';

	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
	import { getTolgee, getTranslate } from '@tolgee/svelte';
	const hide = () => drawer.set(false);
	const tolgee = getTolgee(['language']);
	const { t } = getTranslate();
	lang.subscribe((l) => {
		$tolgee.changeLanguage(l);
		localStorage.setItem('language', l);
	});
</script>

<header class="sticky top-0 z-50 shadow-md">
	<Navbar fluid navDivClass="flex justify-between">
		<NavBrand href="/">
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				{$t('nav.title')}
			</span>
		</NavBrand>
		<DarkMode {btnClass} />
		<!-- <Select class="mt-2 w-40" placeholder="Sprachauswahl" items={languages} bind:value={$lang} />-->
		<NavHamburger on:click={() => hide()} class="ml-3 md:block" />
	</Navbar>
</header>
