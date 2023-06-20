<template>
  <div id='app'>
    <div class="mediacontainer">
      <video ref="videoPlayer" class="video-js vjs-fluid"></video>
    </div>
  </div>
</template>
  
<script>
//import './assets/styles.css'
import '~/videojs/skins/treso/videojs.css'
import videojs from 'video.js'
import '~/videojs/components/nuevo'
import '~/videojs/components/thumbnails'

export default {
  props: ['showvideo', 'videoid', 'vidtitle', 'videotitl1', 'alldate'],
  name: 'App',
  data: () => ({
  }),
  mounted() {

    console.log('Component mounted.' + this.showvideo + ' - ' + this.videoid + ' - ' + this.vidtitle)
    // Prepare 2 videos with details
    // videojs options
    const videojsOptions = {
      controls: true,
      preload: 'auto',
      playsinline: 'true',
    }

    // nuevo plugin options
    let nuevoOptions = {
      videoInfo: true,
      contextMenu: false,
      resume: false,
      pipButton: false,
      relatedMenu: false,
      shareMenu: false
    };/**/

    // initialize videojs player

    this.player = videojs(
      this.$refs.videoPlayer,
      videojsOptions,
      function onPlayerReady() {
        console.log('onPlayerReady')

      }
    )


    //console.log("ready" + video_1);
    console.log("source set");
    //initialize nuevo plugin
    console.log('nuevoOptions')
    this.player.nuevo(nuevoOptions)
    this.player.currentTime(0)
    //initialize VTT thumbnails plugin (optionally)
    // set video 1 source when nuevo plugin is ready 

    this.player.on("ready", function () {
      this.player.currentTime(0)
      //console.log("ready" + video_1);
      console.log("source set");
    });
  },

  watch: {
    // whenever question changes, this function will run
    alldate(newQuestion, oldQuestion) {
      console.log('alldate changed to ' + newQuestion)
    },
    showvideo(showvideo1, oldQuestion) {
      if (oldQuestion == false) {
        if (this.player) {
          let video_1 = {}
          video_1.sources = []
          console.log('showvideo changed to ' + this.videotitl1)
          video_1.infoTitle = this.videotitl1
          video_1.title = this.videotitl1
          if (this.alldate.directlink) {
            let x = {
              src: this.alldate.directlink, type: "video/mp4",
              res: "720", label: "720", default: true
            }
            video_1.sources.push(x)
          }
          if (this.alldate.directlinkfhd) {
            let x = {
              src: this.alldate.directlinkfhd, type: "video/mp4",
              res: "1080", label: "1080",default: true
            }
            video_1.sources.push(x)
          }
          if (this.alldate.directlinkhd) {
            let x = {
              src: this.alldate.directlinkhd, type: "video/mp4",
              res: "720", label: "720",default: true
            }
            video_1.sources.push(x)
          }
          if (this.alldate.directlinkmd) {
            let x = {
              src: this.alldate.directlinkmd, type: "video/mp4",
              res: "560", label: "560"
            }
            video_1.sources.push(x)
          }
          if (this.alldate.directlinklq) {
            let x = {
              src: this.alldate.directlinklq, type: "video/mp4",
              res: "360", label: "360"
            }
            video_1.sources.push(x)
          }
          console.log('video_1 changed to ' + JSON.stringify(video_1.sources))

          this.player.setSource(video_1)
          console.log(this.alldate)
          this.player.pause()
          this.player.currentTime(0)
        }
      } else {
        if (this.player) {

          this.player.pause()
          this.player.currentTime(0)
        }
      }
    }
  },


}
</script>
<!-- 
  < style >
  .mediacontainer {
  with: 100 %;
  max - width: 800px;
  margin: 10px auto;
}
  .p {
  text - align: center;
}
  </style >*/-->