<template>
  <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-app-bar-title>Mediathek Community v0.0.1</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon :icon="mdiMovieOpenOutline" />
    </v-btn>

    <v-btn icon>
      <v-icon :icon="mdiTelevisionClassic" />
    </v-btn>

    <v-btn icon>
      <v-icon :icon="mdiChatOutline" />
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { mdiTelevisionClassic, mdiMovieOpenOutline, mdiChatOutline } from '@mdi/js'
</script>



<style></style>
