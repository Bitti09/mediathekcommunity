<template>
  <v-container fluid>
    <div absolute top-0 right-0 lt-lg="left-0" lg="bottom-0 left-1/3">
      <swiper-container centered-slides="true" space-between="0" slides-per-view="1" zoom="true" aspect-ratio="16/9">
        <swiper-slide v-for="post in posts" :key="post.id">
          
          <v-img width="4000" aspect-ratio="25/9" height="500"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </swiper-slide>
      </swiper-container>
    </div>
  </v-container>
</template>

<script setup>
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
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


<style>
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  overflow: hidden !important
}
</style>
