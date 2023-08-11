<template>
    <VAppBar :elevation="2" rounded>
        <VAppBarNavIcon @click.stop="app.drawer = !app.drawer" />
        <VAppBarTitle>My App</VAppBarTitle>
        <template v-slot:append>

            <v-btn @click="toggle()">
                <v-icon class="i-mdi:home"></v-icon>
            </v-btn>
        </template>
    </VAppBar>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useCustomTheme } from '~/composables/useCustomTheme'
const app = useAppStore()
const { isDark, toggle } = useCustomTheme()
</script>