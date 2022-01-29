import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // サーバーの設定
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          aourceMap: false,
          additionalData: `@import "@/assets/scss/_modules.scss";`,
        }
      }
    },
  },

  // Typescript設定
  typescript: {
    strict: true
  },

  // scss
  css: [
    '@/assets/scss/main.scss',
  ],

  meta: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // JAMSTACK設定
  // target: 'static',
})
