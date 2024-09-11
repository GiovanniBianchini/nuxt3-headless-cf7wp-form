// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/css/style.css'
  ],

  //setting runtime variable
  runtimeConfig: {
    public: {
      //project name for dynamic data such as submission email object when using CF7 form api
      projectName: 'Portfolio'
    }
  },

  compatibilityDate: '2024-09-11'
})