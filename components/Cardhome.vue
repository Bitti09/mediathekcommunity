<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img :src="'https://api.mediathek.community/assets/' + posts.heroimage.id" height="200px" contain></v-img>

      <v-card-title>
        {{ posts.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ posts.subtitle }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" :href="posts.detailslink" target="_blank">
          Details
        </v-btn>
        <v-btn v-if="posts.directlink" color="orange-lighten-2" variant="text" :href="posts.directlink" target="_blank">
          <Icon name="mdi:play-circle-outline" size="36" />
        </v-btn>
        <v-spacer></v-spacer>

        <Icon :name="channels[posts.channel].icon" size="36" :color="channels[posts.channel].color" />
        <v-spacer></v-spacer>

        <Icon :name="quality[posts.quality].icon" size="36" :color="quality[posts.quality].color" />
        <v-spacer></v-spacer>
        <v-btn @click="show = !show">
          <v-icon :icon="mdiChevronUp" v-if="show" />
          <v-icon :icon="mdiChevronDown" v-else />
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            {{ posts.description }}
          </v-card-text>
          <v-card-text>
            {{ posts }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script setup>
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'
</script>
<script>
export default {
  props: [
    'posts'
  ],
  data: () => ({
    show: false,
    channels: {
      svt: { icon: "arcticons:svtplay", color: "green" },
      ard: { icon: "arcticons:daserste", color: "blue" },
      zdf: { icon: "simple-icons:zdf", color: "orange" }
    },
    quality: {
      uhd: { icon: "material-symbols:4k-outline", color: "red" },
      fhd: { icon: "material-symbols:hd-outline", color: "green" },
      hd: { icon: "ic:outline-high-quality", color: "green" },
      sd: { icon: "mdi:quality-low", color: "yellow" },
      lq: { icon: "mdi:quality-low", color: "yellow" }
    }
  }),
}
</script>


<style></style>
