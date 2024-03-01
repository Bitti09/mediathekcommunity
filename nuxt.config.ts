// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@vueuse/nuxt", "nuxt-directus"],
  devtools: { enabled: true },
  ui: {
    icons: ["heroicons", "simple-icons"],
    safelistColors: ["primary", "red", "orange", "green"],
  },
  directus: {
    token: process.env.DIRECTUS_TOKEN,
    url: process.env.DIRECTUS_URL,
  },
});
