<template>
  <div>
    <v-card max-width="400" min-width="400" height="230" :href="'/details/' + posts.id">
      <v-img :src="'https://api.mediathek.community/assets/' + posts.coverimage" height="230px" contain>
        <v-card-title class="cardimage">
          <template v-if="showtype">
            <Icon :name="type[posts.category].icon" size="24" :color="type[posts.category].color" />
          </template>
          {{ posts.title }}
        </v-card-title>
      </v-img>
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
    case 'xs': return 350
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
      music: { icon: "mdi:music", color: "white" },
    },
  }),
}
</script>
<style scoped>
.cardimage {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .47);

}
</style>