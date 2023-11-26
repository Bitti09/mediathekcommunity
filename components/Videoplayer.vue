<template>
    <div>
        {{ vdata }}
        <h1>Video.js Demo</h1>
        <div class="container">
            <video ref="videoPlayer" class="video-js vjs-fluid"></video>
        </div>
    </div>
</template>
    
<script>

import './videojs/skins/treso/videojs.css'
import videojs from 'video.js'
import './videojs/components/nuevo.js'

export default {
    name: 'App',
    props: ['vdata'],
    mounted() {
        let vm = this;
        console.log(vm.vdata);
        const videojsOptions = {
            controls: true,
            preload: false,
            playsinline: true,
            poster: vm.vdata.poster,
            sources: vm.vdata.source[0]
        }

        const nuevoOptions = {
            logo: "//url-to-logo-image.png",
            logourl: "//url-to-go-on-logo-click.com"
        }
        //Initialize Video.js player

        this.player = videojs(
            this.$refs.videoPlayer,
            videojsOptions,
            function onPlayerReady() {
                console.log('onPlayerReady')
            }
        )

        // Initialize Nuevo module

        this.player.nuevo(nuevoOptions)
    }, 
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
    
<style>
.container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}
</style>
