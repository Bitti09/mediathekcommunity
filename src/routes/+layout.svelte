<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<Header></Header>
<div class="overflow-hidden lg:flex"> 
<div class="relative h-min-screen w-full overflow-y-auto pt-[80px]">
	<slot></slot>
</div>
<Footer />
</div>
