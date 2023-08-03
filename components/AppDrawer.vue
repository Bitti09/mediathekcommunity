<template>
    <VNavigationDrawer v-model="app.drawer" fixed temporary app disable-resize-watcher>
        Test
    </VNavigationDrawer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>
