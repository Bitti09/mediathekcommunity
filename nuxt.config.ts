// https://nuxt.com/docs/api/configuration/nuxt-
// @ts-ignore
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },

    css: ['vuetify/lib/styles/main.sass', '~/videojs/skins/treso/videojs.css'

    ],

    modules: ['nuxt-directus', 'nuxt-cloudflare-analytics', 'nuxt-icon', 'nuxt-lodash', 'nuxt-swiper', '@nuxtjs/i18n'
    ],

    build: {
        transpile: ['vuetify'],
    },

    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },

    directus: {
        autoFetch: true,
        url: 'https://api.mediathek.community/',
        token: 'Oxq-DfaVvPcWI4tNjwlMNeHUZT0q_SZE',
    },

    cloudflareAnalytics: {
        // See below for more options
        token: 'f0c80b668b0e43239ca441d5ea90cab5', // Example 1a2b3v4a5er6ac7r8afd
    },

    vue: {
        compilerOptions: {
            isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
        },
    },
    i18n: {
        locales: [
          {
            code: 'en',
            file: 'en_US.json',
          },
          {
            code: 'de',
            file: 'de_DE.json',
          },
        ],
        strategy: 'no_prefix',
        detectBrowserLanguage: true,
        lazy: true,
        langDir: 'translates',
        defaultLocale: 'en',
      },
});
