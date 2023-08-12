<script>
	// @ts-nocheck
	import { A, Img } from 'flowbite-svelte';
	export let carddata;
 	let currentVariant = 'bg-initial';
	let imgurl;
	function inFuture(date) {
		var now = new Date();
		var then = new Date(date);
		//console.log(then > now);
		if (then > now) {
			return true;
		} else {
			return false;
		}
	}
	if (carddata.poster) {
		imgurl = 'https://img.mediathek.community/t/p/original' + carddata.poster;
	} else {
		imgurl = 'https://img2.mediathek.community/assets/' + carddata.coverimage;
	}
	let cption = carddata.title + ' - ' + carddata.channel;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="card {currentVariant} flex justify-center items-center">
	<A href="/details/{carddata.id}">
		<Img
			src={imgurl}
			size="max-w-xs"
			figClass="relative max-w-sm  cursor-pointer filter bg-black"
			captionClass="absolute bottom-0 px-4 text-lg text-black bg-white w-full bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
			caption={cption}
		/>
	</A>
</div>
