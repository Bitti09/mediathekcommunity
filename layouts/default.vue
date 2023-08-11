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
const value = reactive({
    name1: undefined,
    name2: undefined,
    name3: undefined,
})
const { locale, locales, t, setLocale } = useI18n()
 
 import { useAppStore } from '@/stores/app'
import { useCustomTheme } from '~/composables/useCustomTheme'
const app = useAppStore()
const { isDark, toggle } = useCustomTheme()
</script>