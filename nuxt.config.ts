// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "vuetify-nuxt-module",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "nuxt-directus",
    "nuxt-swiper",
    "nuxt-lodash"
  ],
  ssr: true,
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classPrefix: "",
  },
  vuetify: {
    vuetifyOptions: "./vuetify.config.ts",
  },
  directus: {
    url: "https://api.mediathek.community",
    token: "fnzDPNZGV481krf-X7F1lt6rXAs646PW",
  },
});
