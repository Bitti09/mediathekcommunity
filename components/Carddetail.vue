<template>
  <div>
    <v-card :width="width2" class="mx-auto">
      <v-card-title>
        <template v-if="showtype">
          <Icon :name="type[posts.type].icon" size="24" :color="type[posts.type].color" />
        </template>
        {{ posts.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ posts.subtitle }}
        <template v-show="posts.type == 'series'">
          - {{ posts.episodes }} Episode(n)
        </template>
      </v-card-subtitle>
      <v-template v-show="showvideo == false">
        <v-img :src="'https://api.mediathek.community/assets/' + posts.heroimage.id" max-height="450px"></v-img>
      </v-template>
      <v-template v-show="showvideo == true">
        <Player ref="player1" @vPlaybackReady="onPlaybackReady" :currentTime="currentTime">
          <Video>
            <source :data-src="videolink" type="video/mp4" quality="720p"/>
            <source :data-src="videolink" type="video/mp4" quality="1080p"/>
          </Video>

          <DefaultUi>
            <!-- Custom UI component. -->
            <TapSidesToSeek />
          </DefaultUi>
        </Player>
        <v-clappr :source="videolink" />
      </v-template>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">Details</v-tab>
        <v-tab v-if="posts.type == 'series'" value="two">Episoden</v-tab>
        <v-tab v-if="posts.type == 'series'" value="three">Episoden - OMU</v-tab>
        <v-tab v-if="posts.type == 'movie'" value="four">Links</v-tab>
      </v-tabs>
      <v-card-text>

        <v-window v-model="tab">
          <v-window-item value="one">
            <v-table>
              <tbody>
                <tr v-if="posts.type == 'series'">
                  <td> Episodes</td>
                  <td> {{ posts.episodes }} </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{{ posts.description }}</td>
                </tr>
                <tr>
                  <td> Quality</td>
                  <td>
                    <Icon :name="quality[posts.quality].icon" size="36" :color="quality[posts.quality].color" />
                  </td>
                </tr>
                <tr v-if="posts.publishdate">
                  <td> Online since</td>
                  <td>{{ posts.publishdate }}</td>
                </tr>
                <tr v-if="posts.delistdate">
                  <td> Online until</td>
                  <td>{{ posts.delistdate }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-window-item>

          <v-window-item value="two" v-if="posts.type == 'series'">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel v-for="(i, index) in posts.listepisodes" :key="index" v-show="!i.omu">
                <v-expansion-panel-title>
                  <v-row no-gutters>
                    <v-col cols="10" class="d-flex justify-start">
                      {{ i.Title }}
                    </v-col>
                    <v-col v-if="i.omu == true" cols="2" class="d-flex justify-center">
                      OmU
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row no-gutters>
                    <v-col>
                      <v-sheet class="pa-2 ma-2">
                        <v-btn color="orange-lighten-2" variant="text" target="_blank" :href="i.link">
                          Senderseite
                        </v-btn> </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                      <v-sheet class="pa-2 ma-2">
                        <v-btn v-show="showvideo == false" color="orange-lighten-2" variant="text"
                          @click="showvideo1(i.directlink)">
                          Play
                        </v-btn>
                        <v-btn v-show="showvideo == true" color="orange-lighten-2" variant="text" @click="closevideo()">
                          Close Video
                        </v-btn>
                      </v-sheet>
                    </v-col>
                  </v-row>
                  <v-template v-if="i.description">
                    <v-row no-gutters>
                      <v-col cols="12" class="d-flex justify-start">
                        {{ i.description }}
                      </v-col>
                    </v-row>
                  </v-template>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-window-item>
          <v-window-item value="three">
            <v-expansion-panels variant="accordion">
              <v-expansion-panel v-for="(i, index) in posts.listepisodes" :key="index" v-show="i.omu">
                <v-expansion-panel-title>
                  <v-row no-gutters>
                    <v-col cols="10" class="d-flex justify-start">
                      {{ i.Title }}
                    </v-col>
                    <v-col v-if="i.omu == true" cols="2" class="d-flex justify-center">
                      OmU
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row no-gutters>
                    <v-col>
                      <v-sheet class="pa-2 ma-2">
                        <v-btn color="orange-lighten-2" variant="text" target="_blank" :href="i.link">
                          Senderseite
                        </v-btn> </v-sheet>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col v-show="i.directlink">
                      <v-sheet class="pa-2 ma-2">
                        <v-btn v-show="showvideo == false" color="orange-lighten-2" variant="text"
                          @click="showvideo1(i.directlink)">
                          <Icon name="mdi:play" size="24" color="white" /> Play
                        </v-btn>
                        <v-btn v-show="showvideo == true" color="orange-lighten-2" variant="text" @click="closevideo()">
                          <Icon name="mdi:stop" size="24" color="white" /> Stop
                        </v-btn>
                      </v-sheet>
                    </v-col>
                  </v-row>
                  <v-template v-if="i.description">
                    <v-row no-gutters>
                      <v-col cols="12" class="d-flex justify-start">
                        {{ i.description }}
                      </v-col>
                    </v-row>
                  </v-template>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels> </v-window-item>
          <v-window-item value="four">
            <v-row no-gutters>
              <v-col cols="4" class="d-flex justify-start">
                Senderseite
              </v-col>
              <v-col cols="8" class="d-flex justify-center">
                <a :href="posts.detailslink" target="_blank">{{ posts.channel }}</a>
              </v-col>
            </v-row>
            <v-row v-show="posts.directlink">
              <v-col cols="4" class="d-flex justify-start">
                Direktlink
              </v-col>
              <v-col class="d-flex justify-center">
                <v-btn v-show="showvideo == false" color="orange-lighten-2" variant="text"
                  @click="showvideo1(posts.directlink)">
                  <Icon name="mdi:play" size="24" color="white" /> Play
                </v-btn>
                <v-btn v-show="showvideo == true" color="orange-lighten-2" variant="text" @click="closevideo()">
                  <Icon name="mdi:stop" size="24" color="white" /> Stop
                </v-btn>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
<script setup>
import { Player, Video, DefaultUi } from '@vime/vue-next';

// Default theme.
import '@vime/core/themes/default.css';
/*
let videolink = ref('')
let player1 = ref(null)
let currentTime = ref(0)
let showvideo = ref(false)
function closevideo() {
  console.log(this.$refs.player1)
  this.$refs.player1.pause()
  showvideo.value = false
  videolink.value = ''
  currentTime.value = 0
}
function showvideo1(link) {
  console.log(link)
  showvideo.value = true
  videolink.value = link
  currentTime.value = 0
  console.log(link + '-' + videolink + '-' + showvideo)

}*/
</script>
<script>
export default {
  props: [
    'posts',
    'showtype',
    'width2'
  ],
  computed: {
    player11() {
      return this.$refs.player1;
    },
  },
  data() {
    return {
      dialog: false,
      show: false,
      tab: '',
      videolink:'',
      player1: null,
      currentTime: 0,
      showvideo: false,
      channels: {
        svt: { icon: "arcticons:svtplay", color: "green" },
        ard: { icon: "arcticons:daserste", color: "blue" },
        zdf: { icon: "simple-icons:zdf", color: "orange" },
        arte: { icon: "arcticons:arte", color: "red" },
      },
      quality: {
        uhd: { icon: "material-symbols:4k-outline", color: "red" },
        fhd: { icon: "material-symbols:hd-outline", color: "green" },
        hd: { icon: "ic:outline-high-quality", color: "green" },
        sd: { icon: "mdi:quality-low", color: "yellow" },
        lq: { icon: "mdi:quality-low", color: "yellow" }
      },
      type: {
        movie: { icon: "mdi:movie-open-outline", color: "white" },
        series: { icon: "mdi:television", color: "white" },
        others: { icon: "material-symbols:tv-gen-outline", color: "red" },
      },
    }
  },
  methods: {
    closevideo() {
      //console.log(this.$refs.player1)
      this.$refs.player1.pause()
      this.showvideo = false
      this.videolink = ''
      this.currentTime = 0
    },
    showvideo1(link) {
      //console.log(link)
      this.showvideo = true
      this.videolink = link
      this.currentTime = 0
//      console.log(link + '-' + videolink + '-' + showvideo)
    }
  },
}
</script>


<style></style>
