<script lang="ts">
	// @ts-nocheck
	import { onDestroy, onMount } from 'svelte';
	import videojs from 'video.js';
	import '../videojs/components/nuevo';
	import '../videojs/components/playlist';
	import '../videojs/skins/nuevo/videojs.css';

	import { modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let videoPlayer;
	let player;
	const videojsOptions = {
		controls: true,
		preload: 'auto',
		playsinline: 'false',
		fill: true
	};
	function changevideo(video, type) {
		//console.log(video);
		//console.log(type);
		//console.log(video);
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
					sources: $modalvideo.source,
					poster: $modalvideo.poster,
					title: $modalvideo.title
				};
				//console.log(video_1);
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
	onMount(async () => {
		//let videoPlayer1 = document.getElementById('video1');
		//console.log(document.getElementById('media1'));
		if (videoPlayer != undefined) {
			//.log('changes' + videoPlayer);
			player = videojs('my-video', videojsOptions);
			//console.log('Player ready');
			let video_1 = {
				sources: $modalvideo.source,
				poster: $modalvideo.poster,
				title: $modalvideo.title,
				infoTitle: $modalvideo.title
			};
			//console.log(video_1);
			//console.log($omulist.length);
			//console.log(player.nuevo);
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
			//console.log(player);
			if ($seriestype == 'noomu') {
				player.playlist($noomulist);
				//player.playList($noomulist);
			} else if ($seriestype == 'omu') {
				player.playlist($omulist);

				//player.playList($omulist);
			} else {
				player.changeSource(video_1);
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
			//.log('destroy');
			player.dispose();
		}
	});
</script>

<div id="left_column" style="width: 70%;" class=" max-h-fit mx-auto relative overflow-hidden">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		id="my-video"
		playsinline
		webkit-playsinline
		bind:this={videoPlayer}
		class="video-js vjs-16-9 overflow-hidden"
	></video>
</div>

<style>
	.overflow-hidden {
		/* set it to not show scroll bars so 100% will work */
		overflow: hidden !important;
	}
</style>
