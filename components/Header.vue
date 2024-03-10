<script setup lang="ts">
 
const links = [{
  label: 'Home',
  icon: 'i-heroicons-book-open',
  to: '/'
}, {
  label: 'Movie',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/movie'
}, {
  label: 'TV',
  icon: 'i-heroicons-rocket-launch',
  to: '/tv'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Mediathek Community
    </template>

    <template #right>
      <UButton to="https://github.com/Bitti09/mediathekcommunity" target="_blank" icon="i-simple-icons-github" color="gray" variant="ghost" />
    </template>
 
  </UHeader>
</template>