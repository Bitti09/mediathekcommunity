<script>
	// @ts-nocheck
	import {  A,Img } from 'flowbite-svelte';
	export let carddata;
	//console.log(carddata);
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
		caption={carddata.title}
	/> </A>
</div>

<style>
	#text {
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 25px;
		color: white;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.863);
		-ms-transform: translate(-50%, -50%);
	}
</style>
