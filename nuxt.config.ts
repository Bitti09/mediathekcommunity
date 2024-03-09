// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxthub/core"],
  devtools: { enabled: true },
  hub: {
    remote: true,
  },
});
