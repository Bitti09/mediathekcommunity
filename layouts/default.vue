<template>
    <VApp :theme="isDark ? 'dark' : 'light'">
        <VLayout class="rounded rounded-md">
            <AppBar />
            <AppDrawer />
            <VMain>
                is dark? {{ isDark }}
                {{ t('xxx') }}
                <slot />
            </VMain>
            <VFooter app class="d-flex flex-column">
                <span class="flex-auto text-gray-500 dark:text-gray-400 text-xs md:text-lg">
                    This project uses the TMDB API but is not endorsed or certified by TMDB. - Data & Images
                    provided by TMDB
                </span>
            </VFooter>
        </VLayout>
    </VApp>
</template>
<script setup>
import { useCustomTheme } from '~/composables/useCustomTheme'
const { isDark } = useCustomTheme()
</script>