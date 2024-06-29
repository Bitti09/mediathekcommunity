<script lang="ts">
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';
	import '../videojs/skins/treso/videojs.min.css';
	import videojs from 'video.js';
	import '../videojs/plugins/es/nuevo';
	import '../videojs/plugins/es/hlsjs.js';
	import '../videojs/plugins/es/playlist.js';

	import { modalProps, modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	console.log('modalProps');
	console.log($modalProps);
	console.log('modalvideo');
	console.log($modalvideo);
	console.log('omulist');
	console.log($omulist);
	console.log('noomulist');
	console.log($noomulist);
	console.log('seriestype');
	console.log($seriestype);

	let videoPlayer;
	let player;
	const videojsOptions = {
		controls: true,
		preload: 'auto',
		playsinline: false,
		fill: true
	};
	function changevideo(video, type) {
		if (player != undefined) {
			if (type == 'noomu') {
				player.pause();
				player.currentTime(0);
				player.playlist.new($noomulist);
				player.pause();
			} else if (type == 'omu') {
				player.pause();
				player.currentTime(0);
				player.playlist.new($omulist);
				player.pause();
			} else {
				let video_1 = {
					sources: [{ src: $modalvideo.src, type: $modalvideo.type }],
					poster: $modalvideo.poster,
					title: $modalvideo.title
				};
				player.pause();
				player.poster(video.poster);
				player.currentTime(0);
				player.changeSource(video_1);
			}
			//player.play();
		}
	}
	$: changevideo($modalvideo, $seriestype);
	// nuevo plugin options
	let nuevo_options = { contextMenu: false };
	onMount(async () => {
		let videoPlayer1 = document.getElementById('video1');
		if (videoPlayer != undefined) {
			//.log('changes' + videoPlayer);
			player = videojs('my-video', videojsOptions);
			let video_1 = {
				sources: { src: $modalvideo.src, type: $modalvideo.type },
				poster: $modalvideo.poster,
				title: $modalvideo.title,
				infoTitle: $modalvideo.title
			};
			player.nuevo({
				playlistUI: true,
				playlistShow: true,
				playlistNavigation: true,
				qualityMenu: true,
				shareMenu: false,
				pipButton: false,
				buttonForward: true,
				androidLock: true,
				zoomMenu: false,
				theaterButton: false,
				rateMenu: false,
				settingsButton: true
			});
			if ($seriestype == 'noomu') {
				player.playlist($noomulist);
				//player.playList($noomulwwwist);
			} else if ($seriestype == 'omu') {
				player.playlist($omulist);

				//player.playList($omulist);
			} else {
				player.src(video_1.sources);
			}
			player.on('mode', function (event, mode) {
				if (mode == 'large') {
					document.querySelector('#left_column').style.width = '100%';
				} else if (mode == 'normal') {
					document.querySelector('#left_column').style.width = '70%';
				}
			});
			player.on('fullscreenchange', (evt, mode) => {});
		}
	});
	onDestroy(() => {
		if (player) {
			player.dispose();
		}
	});
</script>

<div id="left_column" style="width: 70%;" class="flex h-fit max-h-fit items-center overflow-hidden">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="my-video"
		playsinline
		webkit-playsinline
		bind:this={videoPlayer}
		class="video-js vjs-16-9 overflow-hidden"
	/>
</div>

<style>
	.overflow-hidden {
		/* set it to not show scroll bars so 100% will work */
		overflow: hidden !important;
	}
</style>
