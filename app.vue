<script setup>
import { useCustomTheme } from '~/composables/useCustomTheme'

const { isDark, toggle } = useCustomTheme()
</script>

<template>

<VApp :theme="isDark ? 'dark' : 'light'">
    <NuxtLayout>

      <NuxtPage />
    </NuxtLayout>
  </VApp>
</template>