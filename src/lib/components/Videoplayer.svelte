<!--
<script>
	import 'vidstack/styles/defaults.css';
	import 'vidstack/styles/community-skin/video.css';
	// @ts-ignore
	import { modalvideo, modalProps } from '$lib/modalPropsStore';
	import Hls from 'hls.js';
	// @ts-ignore
	import { onMount, onDestroy } from 'svelte';

	import { defineCustomElements } from 'vidstack/elements';
	// @ts-ignore
	let vidposter;
	// @ts-ignore
	let player;
	console.log($modalvideo);
	defineCustomElements();

</script>

<media-player
 	title={$modalvideo.title}
	poster={$modalvideo.poster}
	aspect-ratio="16/9"
	crossorigin
>
	<media-outlet>
		<media-poster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
		<source src={$modalvideo.src} type={$modalvideo.type} />
	</media-outlet>
	<media-community-skin />
</media-player> 
-->

<script>
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';
	import videojs from 'video.js';
	import '../videojs/components/nuevo';
    import '../videojs/skins/treso/videojs.css'

    import { modalvideo, modalProps } from '$lib/modalPropsStore';
	let videoPlayer;
	let player;
	const videojsOptions = {
		controls: true,
		preload: 'auto',
		playsinline: 'false',
		responsive: false
	};
	// nuevo plugin options
	let nuevoOptions = {};
	onMount(async () => {
		let videoPlayer1 = document.getElementById('video1');
		//console.log(document.getElementById('media1'));
		if (videoPlayer != undefined) {
			//.log('changes' + videoPlayer);
			player = videojs('my-video', videojsOptions);
			//console.log('Player ready');
			player.src({
				src: $modalvideo.src,
				type: $modalvideo.type
			}); 
 			player.poster($modalvideo.poster);
            player.nuevo({shareMenu:false,qualityMenu:true});
			player.play();
		}
	});
	onDestroy(() => {
		if (player) {
			//.log('destroy');
			player.dispose();
		}
	});
</script>

<video id="my-video" bind:this={videoPlayer} class="video-js cam_video" />

<style>
	.video-container {
		position: relative;
	}
	.cam_video {
		object-fit: fill;
		width: 100%;
	}
</style>
