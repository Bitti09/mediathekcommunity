<script>
	import { slide } from 'svelte/transition';

	let isScrolled = false;
	let isMobileMenuOpen = false;

	function handleScroll() {
		isScrolled = window.scrollY > 50;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<header class:scrolled={isScrolled}>
	<div class="header-content">
		<div class="logo">
			<a href="/">
				<h1 class="site-title">
					<span class="mediathek">Mediathek</span>
					<span class="community">Community</span>
				</h1>
			</a>
		</div>
		<nav class="desktop-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/movie">Movies</a></li>
				<li><a href="/series">TV Shows</a></li>
				<li><a href="/channels">Channels</a></li>
			</ul>
		</nav>
		<button class="mobile-menu-button" on:click={toggleMobileMenu}> ☰ </button>
	</div>
</header>

{#if isMobileMenuOpen}
	<div class="mobile-menu" transition:slide={{ duration: 300 }}>
		<nav>
			<ul>
				<li><a href="/" on:click={toggleMobileMenu}>Home</a></li>
				<li><a href="/movie" on:click={toggleMobileMenu}>Movies</a></li>
				<li><a href="/series" on:click={toggleMobileMenu}>TV Shows</a></li>
				<li><a href="/channels" on:click={toggleMobileMenu}>Channels</a></li>
			</ul>
		</nav>
	</div>
{/if}

<style>
	header {
		position: sticky;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		transition: background-color 0.3s ease;
		padding: 1rem 4%;
		background-color: rgba(20, 20, 20, 0.5);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}

	header.scrolled {
		background-color: rgba(20, 20, 20, 0.9);
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo a {
		text-decoration: none;
	}

	.site-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
	}

	.mediathek {
		color: #3498db; /* Bright blue */
	}

	.community {
		color: #ffffff; /* White */
	}

	.desktop-nav ul {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.desktop-nav ul li {
		margin-left: 1.5rem;
	}

	.desktop-nav ul li a {
		color: #fff;
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.3s ease;
	}

	.desktop-nav ul li a:hover {
		color: #3498db; /* Bright blue */
	}

	.mobile-menu-button {
		display: none;
		background: none;
		border: none;
		color: #fff;
		font-size: 1.5rem;
		cursor: pointer;
	}

	.mobile-menu {
		position: fixed;
		top: 4rem;
		left: 0;
		right: 0;
		background-color: rgba(20, 20, 20, 0.9);
		padding: 1rem;
		z-index: 999;
	}

	.mobile-menu nav ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.mobile-menu nav ul li {
		margin-bottom: 1rem;
	}

	.mobile-menu nav ul li a {
		color: #fff;
		text-decoration: none;
		font-size: 1rem;
		transition: color 0.3s ease;
	}

	.mobile-menu nav ul li a:hover {
		color: #3498db; /* Bright blue */
	}

	@media (max-width: 768px) {
		.desktop-nav {
			display: none;
		}

		.mobile-menu-button {
			display: block;
		}

		.site-title {
			font-size: 1.2rem;
		}
	}
</style>
