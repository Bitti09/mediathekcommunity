<template>
    <VNavigationDrawer app v-model="app.drawer" temporary>
        <v-list nav>
            <v-list-item prepend-icon="i-mdi:home" :title="t('nav.home')" to="/" />
            <v-list-item prepend-icon="i-mdi:movie-open-outline" :title="t('nav.movies')" to="/movies" />
            <v-list-item prepend-icon="i-mdi:television-classic" :title="t('nav.series')" to="/sereis" />
            <v-list-item prepend-icon="i-mdi:drama-masks" :title="t('nav.culture')" to="/culture" />
            <v-list-item prepend-icon="i-mdi:star-circle" :title="t('nav.special')" to="/special" />
            <v-list-item prepend-icon="i-mdi:play-box-outline" :title="t('nav.others')" to="/others" />
        </v-list>
    </VNavigationDrawer>
</template>

<script setup>
const { t } = useI18n()
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>