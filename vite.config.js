import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        splash:         resolve(__dirname, 'splash.html'),
        login:          resolve(__dirname, 'login.html'),
        profile:        resolve(__dirname, 'profile.html'),
        follow:         resolve(__dirname, 'follow.html'),
        rank:           resolve(__dirname, 'rank.html'),
        streakHistory:  resolve(__dirname, 'streak-history.html'),
        boostList:      resolve(__dirname, 'boost-list.html'),
        purchaseList:   resolve(__dirname, 'purchase-list.html'),
      },
    },
  },
})
