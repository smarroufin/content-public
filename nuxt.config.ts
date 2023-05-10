// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxthq/studio'
  ],
  content: {
    documentDriven: true
  }
})
