<template>
  <div>
    {{ posts }}
    <v-img :height="300" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
  </div>
</template>

<script setup>
const route = useRoute()
let posts = ref()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const { getItemById } = useDirectusItems();
posts.value = await getItemById({ collection: "mediathek", id: route.params.id, fields: ['*,coverimage.id,heroimage.id,listepisodes.*.*'] });
console.log(posts.value)
</script>



<style></style>
