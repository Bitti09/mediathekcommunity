<template>
VContainer
  </template>
  
  <script>
  
  export default {
    setup () {
      const theme = useTheme()
  
      return {
        theme,
        toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    },
  }
  </script>
  