// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/ui", "nuxt-lodash", "nuxt-icon"],
  ui: {
    icons: ["heroicons", "simple-icons"],
  },
  runtimeConfig: {
    directusToken: "",
    directusUrl: "",
  },
  // Devtools / Typescript
  devtools: { enabled: true },
  typescript: { strict: false },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
});
