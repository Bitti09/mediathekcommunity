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
          Explore
        </v-btn>
        <v-chip class="ma-2" color="primary">{{ posts.quality }} </v-chip>
        <v-chip class="ma-2" color="primary">{{ posts.channel }} </v-chip>

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
  }),
}
</script>


<style></style>
