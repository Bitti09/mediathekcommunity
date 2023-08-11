<template>
<AppBar />
<AppDrawer />
    <VMain>

        is dark? {{ isDark }}
        {{ t('xxx') }}
        <slot />
    </VMain>
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