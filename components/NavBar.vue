<template>
  <v-app-bar color="teal-darken-4">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-app-bar-title>Mediathek Community v0.0.3</v-app-bar-title>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-btn icon exact to="/" active-class="btnselected">
        <v-icon :icon="mdiHomeVariantOutline" />
      </v-btn>
      <v-btn icon exact to="/movies" active-class="btnselected">
        <v-icon :icon="mdiMovieOpenOutline" />
      </v-btn>
      <v-btn icon exact to="/series" active-class="btnselected">
        <v-icon :icon="mdiTelevisionClassic" />
      </v-btn>
      <v-btn icon exact to="/music" active-class="btnselected">
        <v-icon :icon="mdiMusic" />
      </v-btn>
      <v-btn icon exact active-class="btnselected">
        <v-icon :icon="mdiChatOutline" />
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { mdiTelevisionClassic, mdiMovieOpenOutline, mdiChatOutline, mdiHomeVariantOutline, mdiMusic } from '@mdi/js'
</script>
<style scoped lang="scss">
.btnselected {
  color: #c44310 !important;
}
</style>
