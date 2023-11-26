<script setup> 
</script>

<template>
  <UHeader>
    <template #logo>
      Mediathek Community
      <UBadge label="v 0.4.0" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UColorModeButton />

    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <UFooter>
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>
  </UFooter>
</template>