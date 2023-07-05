<template>
  <div class="mediacontainer">
    <video ref="videoPlayer" class="video-js vjs-fluid"></video>
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
    coverimage: '',
  }),
  mounted() {
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
    };
  },

  watch: {
    // whenever question changes, this function will run
    showvideo(showvideo1, oldQuestion) {
      if (oldQuestion == false) {
        if (this.alldate.mid) {
          console.log('showvideo changed to mid ' + JSON.stringify(this.alldate.mid))

          this.coverimage = this.alldate.mid.coverimage
        } else {
          console.log('showvideo changed to ' + JSON.stringify(this.alldate.coverimage))

          this.coverimage = this.alldate.coverimage.id
        }
        let video_1 = {}
        video_1.sources = []
        //console.log('showvideo changed to ' + this.videotitl1)
        video_1.infoTitle = this.videotitl1
        video_1.title = this.videotitl1
        if (this.alldate.format == 'application/dash+xml') {
          let x = {
            src: this.alldate.directlink, type: "application/dash+xml",
          }
          video_1.sources.push(x)
        }
        else if (this.alldate.format == 'application/x-mpegURL') {
          let x = {
            src: this.alldate.directlink, type: "application/x-mpegURL"
          }
          video_1.sources.push(x)
        } else {
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
              res: "1080", label: "1080", default: true
            }
            video_1.sources.push(x)
          }
          if (this.alldate.directlinkhd) {
            let x = {
              src: this.alldate.directlinkhd, type: "video/mp4",
              res: "720", label: "720", default: true
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
        }
        this.player = videojs(
          this.$refs.videoPlayer,
          this.videojsOptions,
          function onPlayerReady() {
          }),
          this.player.nuevo(this.nuevoOptions)
        this.player.poster('https://api.mediathek.community/assets/' + this.coverimage)
        this.player.setSource(video_1)
        this.player.pause()
        this.player.currentTime(0)
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