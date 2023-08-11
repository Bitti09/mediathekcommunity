// Nuxt config file
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "vuetify-nuxt-module",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-swiper",
    "nuxt-directus",
    "nuxt-lodash"
  ],
  i18n: {
    locales: [
      {
        code: "de-DE",
        iso: "de-DE",
        file: "de-DE.json",
        name: "Deutsch",
        dir: "ltr",
      },
    ],
    lazy: false,
    strategy: "no_prefix",
    detectBrowserLanguage: false,
    langDir: "locales/",
    defaultLocale: "de-DE",
    types: "composition",
    pages: undefined,
    dynamicRouteParams: false,
    skipSettingLocaleOnNavigate: true,
    // debug: true,
    // Vue configuration file, you can move it to the root folder
    vueI18n: "./config/i18n.config.ts",
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: "dark",
      },
      icons: {
        defaultSet: "unocss-mdi",
      },
    },
  },
  devtools: true,
  runtimeConfig: {
    directusUrl: "",
    directusToken: "",
    directus: {
      token: "",
    },
  },
});
