// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],

  // todo: if I can't get it working then use @fontface imports
  // buildModules: ["@nuxtjs/google-fonts"],
  // todo: follow this issue when there is a solution.. https://github.com/nuxt-community/google-fonts-module/issues/109
  // googleFonts: {
  //   download: true
  // },
  compatibilityDate: "2025-09-08",

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
});
