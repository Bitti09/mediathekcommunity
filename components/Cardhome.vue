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
        <v-dialog v-model="dialog" activator="parent" width="auto">
          <Carddetail :posts="posts" :showtype="showtype" />
        </v-dialog></v-img>
    </v-card>
  </div>
</template>
<script setup>
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
</script>
<script>
export default {
  props: [
    'posts',
    'showtype'
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
