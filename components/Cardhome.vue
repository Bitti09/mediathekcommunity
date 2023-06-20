<template>
  <div>
    <v-card max-width="400" min-width="300" height="280">
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
      <v-img :src="'https://api.mediathek.community/assets/' + posts.coverimage.id" height="200px" contain>
        <v-dialog activator="parent" scrollable width="calc(100% - 48px)%">
          <v-card>
            <v-card-text style="height: calc(100% - 48px)%;">
          <Carddetail :posts="posts" :showtype="showtype" :width2="width1" />
              </v-card-text>
           </v-card> 
        </v-dialog></v-img>
    </v-card>
  </div>
</template>
<script setup>
import { useDisplay } from 'vuetify'
const { name } = useDisplay()
const width1 = computed(() => {
  // name is reactive and
  // must use .value
  switch (name.value) {
    case 'xs': return 300
    case 'sm': return 600
    case 'md': return 700
    case 'lg': return 900
    case 'xl': return 1200
    case 'xxl': return 1200
  }

  return undefined
})
</script>
<script>
export default {
  props: [
    'posts',
    'showtype',
    'height1'
  ],
  data: () => ({
    dialog: false,
    show: false,
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
  }),
}
</script>


<style></style>
