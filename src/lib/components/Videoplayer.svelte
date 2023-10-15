<script lang="ts">
	// @ts-nocheck
	import { onDestroy, onMount } from 'svelte';
	import videojs from 'video.js';
	import '../videojs/components/hlsjs';
	import '../videojs/components/nuevo';
	import '../videojs/components/playlist?client';
	import '../videojs/skins/nuevo/videojs.css';
	import { modalvideo, omulist, playlists, seriestype } from '$lib/modalPropsStore';
	let videoPlayer;
	let player;
	const videojsOptions = {
		controls: true,
		preload: 'false',
		playsinline: 'false',
		fill: true,
		html5: {
			hls: {
				bandwidth: 30000000
			},
			hlsjsConfig: {
				debug: true,
				enableWorker: true,
				lowLatencyMode: true,
				backBufferLength: 90,
				smoothQualityChange: true,
				capLevelToPlayerSize: false
			}
		}
	};
	function changevideo(video, type, ply) {
		if (player != undefined) {
			if (type == 'omu') {
				player.pause();
				player.currentTime(0);
				player.playlist.new($playlists);
				player.pause();
			} else {
 				let video_1 = {
					sources: $modalvideo.source,
					poster: $modalvideo.poster,
					title: $modalvideo.title
				};
 				player.pause();
				player.poster(video.poster);
				player.currentTime(0);
				player.src(video_1);
			}
			//player.play();
		}
	}
	$: changevideo($modalvideo, $seriestype, $playlists);
	// nuevo plugin options
	onMount(async () => {
		if (videoPlayer != undefined) {
			//.log('changes' + videoPlayer);
			player = videojs('my-video', videojsOptions);
  			let video_1 = {
				sources: $modalvideo.source,
				poster: $modalvideo.poster,
				title: $modalvideo.title,
				infoTitle: $modalvideo.title
			};
			player.nuevo({
				playlistUI: true,
				playlistShow: false,
				playlistNavigation: true,
				shareMenu: false,
				pipButton: false,
				buttonForward: true,
				androidLock: true,
				zoomMenu: false,
				theaterButton: false,
				rateMenu: false,
				settingsButton: false
			});
			if ($seriestype == 'noomu' || $seriestype == 'omu') {
				player.playlist($playlists);
			} else {
				player.pause();
				player.poster(video_1.poster);
 				player.currentTime(0);
 				player.src(video_1.sources);
			}
			player.on('mode', function (event, mode) {
				if (mode == 'large') {
					document.querySelector('#left_column').style.width = '100%';
				} else if (mode == 'normal') {
					document.querySelector('#left_column').style.width = '70%';
				}
			});
		}
	});
	onDestroy(() => {
		if (player) {
			player.dispose();
		}
	});
</script>

<div id="left_column" style="" class=" h-image1 mx-auto overflow-hidden">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="my-video"
		playsinline
		webkit-playsinline
		bind:this={videoPlayer}
		class="video-js vjs-fluid overflow-hidden"
	></video>
</div>

<style>
	.overflow-hidden {
		/* set it to not show scroll bars so 100% will work */
		overflow: hidden !important;
	}
	.h-image1 {
		max-width: 54rem !important;
		height: auto !important;
		width: 100% !important;
	}
</style>
