// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {
        enabled: false
    },
    css: ['vuetify/lib/styles/main.sass',
    ],

    modules: ['nuxt-directus'],
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
});
