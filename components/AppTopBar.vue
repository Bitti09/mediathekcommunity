<template>
    <v-app-bar   scroll-behavior="elevate" rounded>
        <template v-slot:prepend>
            <VAppBarNavIcon @click.stop="app.drawer = !app.drawer" />
        </template>
        <VAppBarTitle>My App</VAppBarTitle>
    </v-app-bar>
</template>
<script setup>
import { useAppStore } from '@/stores/app'
const app = useAppStore()
</script>
