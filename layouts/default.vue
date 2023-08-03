<template>
    <VApp>
        <VAppBar app clipped-left color="secondary" dark elevate-on-scroll comfortable>
            <template v-slot:prepend>
                <VAppBarNavIcon @click.stop="app.drawer = !app.drawer" />
            </template>
            <VAppBarTitle>My App</VAppBarTitle>
        </VAppBar>
        <VNavigationDrawer v-model="app.drawer" temporary>aa</VNavigationDrawer>
        <VMain>
            <VResponsive>
                <VAlert>aaa</VAlert>
                <slot />
            </VResponsive>
        </VMain>
        <VFooter clipped-left app>eee</VFooter>

    </VApp>
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