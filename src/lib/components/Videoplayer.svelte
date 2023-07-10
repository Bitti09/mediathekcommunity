<script>
	// @ts-nocheck

	import { onDestroy, onMount } from 'svelte';
	import videojs from 'video.js';
	import '../videojs/components/nuevo';
	import '../videojs/components/playlist';
	import '../videojs/skins/nuevo/videojs.css';

	import { modalProps, modalvideo, omulist, noomulist, seriestype } from '$lib/modalPropsStore';
	let videoPlayer;
	let player;
	const videojsOptions = {
		controls: true,
		preload: 'auto',
		playsinline: 'false',
		fluid: true
	};
	function changevideo(video, type) {
		console.log(video);
		console.log(type);
		//console.log(video);
		if (player != undefined) {
			if (type == 'noomu') {
				player.pause();
				player.currentTime(0);
				player.playlist.new($noomulist)
				player.pause();
			} else if (type == 'omu') {
				player.pause();
				player.currentTime(0);
				player.playlist.new($omulist)
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
	let nuevoOptions = {};
	onMount(async () => {
		let videoPlayer1 = document.getElementById('video1');
		//console.log(document.getElementById('media1'));
		if (videoPlayer != undefined) {
			//.log('changes' + videoPlayer);
			player = videojs('my-video', videojsOptions);
			//console.log('Player ready');
			let video_1 = {
				sources: [{ src: $modalvideo.src, type: $modalvideo.type }],
				poster: $modalvideo.poster,
				title: $modalvideo.title,
				infoTitle: $modalvideo.title
			};
			console.log($omulist.length);
			console.log(player.nuevo);
			player.nuevo({
				playlistUI: true,
				playlistShow: false,
				playlistNavigation: true,
				shareMenu: false,
				pipButton : false,
			});
			console.log(player);
			if ($seriestype == 'noomu') {
				player.playlist($noomulist);
				//player.playList($noomulist);
			} else if ($seriestype == 'omu') {
				player.playlist($omulist);
				//player.playList($omulist);
			} else {
				player.changeSource(video_1);
			}
			//player.play();
		}
	});
	onDestroy(() => {
		if (player) {
			//.log('destroy');
			player.dispose();
		}
	});
</script>

<div style="height: 600px; width: 800px">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video id="my-video" playsinline webkit-playsinline bind:this={videoPlayer} class="video-js" />
</div>

<style>
</style>
