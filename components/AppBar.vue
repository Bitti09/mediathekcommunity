<template>
    <VAppBar app :elevation="2" rounded>
        <VAppBarNavIcon @click.stop="app.drawer = !app.drawer" />
        <VAppBarTitle> {{ t('app.title') }}</VAppBarTitle>
        <template v-slot:append>

            <v-btn @click="toggle()">
                <v-icon :class="isDark ? 'i-mdi:weather-sunny' : 'i-mdi:moon-full'"></v-icon>
            </v-btn>
        </template>
    </VAppBar>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useCustomTheme } from '~/composables/useCustomTheme'
const { locale, locales, t, setLocale } = useI18n()

const app = useAppStore()
const { isDark, toggle } = useCustomTheme()
</script>