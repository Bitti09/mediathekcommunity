<template>
    <v-app>
        <AppTopBar />
        <v-main class="mx-2" :class="{ 'reduced-content-width': !isMobile }">
            <slot />
        </v-main>
        <TheFooter />
    </v-app>
</template>
<script setup>
import { useStore } from "@nanostores/vue";
const { lgAndUp, mdAndDown } = useDisplay()

import { useAppStore } from '@/stores/app'
const display = useDisplay()
const isMobile = display.smAndDown
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

// access the `store` variable anywhere in the component ✨
const app = useAppStore()
</script>