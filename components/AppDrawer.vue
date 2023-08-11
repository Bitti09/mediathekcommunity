<template>
    <VNavigationDrawer app v-model="app.drawer" temporary>
        <v-list nav>
            <v-list-item prepend-icon="i-mdi:home" title="Home" to="/" />
            <v-list-item prepend-icon="i-mdi:movie-open-outline" title="Movies" to="/movies" />
            <v-list-item prepend-icon="i-mdi:television-classic" title="Series" to="/sereis" />
            <v-list-item prepend-icon="i-mdi:drama-masks" title="Culture" to="/culture" />
            <v-list-item prepend-icon="i-mdi:star-circle" title="special" to="/special" />
            <v-list-item prepend-icon="i-mdi:play-box-outline" title="Others" to="/others" />
        </v-list>
    </VNavigationDrawer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>