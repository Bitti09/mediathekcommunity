<template>
        <VNavigationDrawer v-model="app.drawer" temporary>
        <v-list nav>
            <v-list-item prepend-icon="mdi-home" title="Home" to="/" />
            <v-list-item prepend-icon="mdi-home" title="Movies" to="/movies" />
            <v-list-item prepend-icon="mdi-home" title="Series" to="/sereis" />
            <v-list-item prepend-icon="mdi-home" title="Culture" to="/culture" />
            <v-list-item prepend-icon="mdi-home" title="special" to="/special" />
            <v-list-item prepend-icon="mdi-home" title="Others" to="/others" />
        </v-list>
    </VNavigationDrawer>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>