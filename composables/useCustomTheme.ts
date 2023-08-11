// composables/useCustomTheme.ts
export function useCustomTheme() {
    const { $vuetify } = useNuxtApp()
  
    const isDark = useDark({
      valueDark: 'dark',
      valueLight: 'light',
      initialValue: 'dark',
      onChanged: (dark: boolean) => {
        $vuetify.theme.global.name.value = dark ? 'dark' : 'light'
      },
    })
  
    const toggle = useToggle(isDark)
  
    return { isDark, toggle }
  }