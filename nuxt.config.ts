// https://nuxt.com/docs/api/configuration/nuxt-
// @ts-ignore
export default defineNuxtConfig({
    devtools: {
        enabled: true
    },

    css: ['vuetify/lib/styles/main.sass', '~/videojs/skins/treso/videojs.css'

    ],

    modules: ['nuxt-directus', 'nuxt-cloudflare-analytics', 'nuxt-icon', 'nuxt-lodash', 'nuxt-swiper'
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
        token: 'fnzDPNZGV481krf-X7F1lt6rXAs646PW',
    },

    cloudflareAnalytics: {
        // See below for more options
        token: 'f0c80b668b0e43239ca441d5ea90cab5', // Example 1a2b3v4a5er6ac7r8afd
    },

    vue: {
        compilerOptions: {
            isCustomElement: tag => ['swiper-container', 'swiper-slide'].includes(tag),
        },
    }
});
