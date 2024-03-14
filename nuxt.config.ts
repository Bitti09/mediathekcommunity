// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-directus",
    "@nuxt/image",
    "nuxt-lodash",
    "@nuxtjs/hanko",
    "nuxt-swiper",
  ],
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
  hanko: {
    // You can also configure this by setting NUXT_PUBLIC_HANKO_API_URL at runtime
    apiURL: "https://f5dd8000-56bc-40bd-8ad2-7907165faa34.hanko.io",
    // You can also customise these if required
    // cookieName: 'hanko'
    redirects: {
      login: "/admin/login",
      success: "/admin/profile",
      home: "/",
      followRedirect: true,
    },
    registerComponents: true,
    augmentContext: true,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('swiper-'),
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }
});
