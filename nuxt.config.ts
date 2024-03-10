// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "@vueuse/nuxt", "nuxt-directus", "@nuxt/image","nuxt-lodash"],
  devtools: { enabled: true },
  ui: {
    icons: ["heroicons", "simple-icons"],
    safelistColors: ["primary", "red", "orange", "green"],
  },
  directus: {
    token: process.env.DIRECTUS_TOKEN,
    url: process.env.DIRECTUS_URL,
  },
  image: {
    bunny: {
      baseURL: "https://mediathekc.b-cdn.net/t/p/original",
    },
  },
});
