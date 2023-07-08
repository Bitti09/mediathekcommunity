<script>
	import Hls from 'hls.js';
	// vidstack imports
	import 'vidstack/styles/defaults.css';
	import 'vidstack/styles/community-skin/video.css';
	import { defineCustomElements } from 'vidstack/elements';
	import { onDestroy, onMount } from 'svelte';
	import { modalvideo, modalProps } from '$lib/modalPropsStore';
	let player;
	let videoEle;
	import { MediaRemoteControl } from 'vidstack';
	const remote = new MediaRemoteControl();

	const initPlayer = async () => {
		await defineCustomElements();

		player.logLevel = 'warn';

		const res = player.querySelector('media-time-slider:first-of-type');
		// set custom seek duration
		if (res) {
			res.step = 2;
			res.keyStep = 5;
		}

		player.addEventListener('provider-change', (event) => {
			console.log('provider change', event);

			const provider = event.detail;
			if (provider?.type === 'hls') {
				// Static import
				provider.library = Hls;

				const cfg = {
					// your own HLS.js config
				};
				provider.config = cfg;

				console.log('HLS library set');
			}
		});
	};

	onMount(async () => {
		await initPlayer();

		// do with player whatever you want here, e.g. load some HLS stream:
		player.src = { src: $modalvideo.src, type: $modalvideo.format };
		player.title = $modalvideo.title;
		player.poster = $modalvideo.poster;
	});
	$: $modalvideo, run();

	function run() {
		console.log('changes' + $modalvideo);
		if (videoEle != undefined) {
			console.log('changes' + $modalvideo);
			remote.setTarget(videoEle);
			remote.togglePaused();

			videoEle.poster = $modalvideo.poster;
			videoEle.title = $modalvideo.title;
			videoEle.src = { src: $modalvideo.src, type: $modalvideo.format };
		}
	}
	onDestroy(() => {
		//player.destroy();
	});
	let loaded = false;

	function playerAttached(e) {
		videoEle = player;
		player.subscribe(({ volume }) => {
			if (loaded) {
				console.log('volume changed', player);
			}
		});
		loaded = true;
	}
</script>

<media-player aspect-ratio="16/9" crossorigin bind:this={player} on:attached|once={playerAttached}>
	<media-outlet />
	<media-poster />

	<media-community-skin />
</media-player>

<!-- svelte-ignore a11y-media-has-caption
<media-player title={$modalvideo.title} poster={poster1} aspect-ratio="16/9">
	<media-outlet>
		<media-poster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
		<source src={$modalvideo.src} type={$modalvideo.format} />
	</media-outlet>
	<media-community-skin />
</media-player>
 
<template>
	<div class="mediacontainer">
		<video bind:this={videoEle} class="video-js vjs-fluid" />
	</div>
</template>
-->

<style>
	/* Disable overlay when player is focused */
	media-player {
		--video-scrim-bg: transparent;
	}
	media-pip-button {
		display: none !important;
	}
</style>
