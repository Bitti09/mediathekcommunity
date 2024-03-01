<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <UModals />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
console.log(process.env)
const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')
</script>
