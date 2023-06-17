// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    css: ['vuetify/lib/styles/main.sass',
    ],

    modules: ['nuxt-directus', 'nuxt-cloudflare-analytics', 'nuxt-icon'
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
    }
});
