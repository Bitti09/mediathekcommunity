<template>
    <VApp id="inspire">
        <VAppBar scrollBehavior="elevate" scrollThreshold="0" floating location="top">
            <template v-slot:prepend>
                <VAppBarNavIcon @click.stop="app.drawer = !app.drawer" />
            </template>
            <VAppBarTitle>My App</VAppBarTitle>
        </VAppBar>
        <VNavigationDrawer v-model="app.drawer" temporary>
            <v-list nav>
                <v-list-item prepend-icon="mdi-home" title="Home" to="/"/>
                <v-list-item prepend-icon="mdi-home" title="Movies" to="/movies"/>
                <v-list-item prepend-icon="mdi-home" title="Series" to="/sereis"/>
                <v-list-item prepend-icon="mdi-home" title="Culture" to="/culture"/>
                <v-list-item prepend-icon="mdi-home" title="special" to="/special"/>
                <v-list-item prepend-icon="mdi-home" title="Others" to="/others"/>
            </v-list>
        </VNavigationDrawer>
        <VMain>
                <slot />
        </VMain>
        <VFooter app>
            <span class="svg">
                This project uses the TMDB API but is not endorsed or certified by TMDB.
                <img src="/tmdb-logo2.svg" :height="20" class="svg" />
            </span>
        </VFooter>

    </VApp>
</template>
<style scoped>
img {
    vertical-align: text-bottom;
}
</style>
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