// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-directus",
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "nuxt-swiper",
  ],
  ssr: true,
  directus: {
    url: "https://api.mediathek.community",
    token: "fnzDPNZGV481krf-X7F1lt6rXAs646PW",
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
});
