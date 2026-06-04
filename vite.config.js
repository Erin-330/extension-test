import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'login.html'),
        'email-login': resolve(__dirname, 'email-login.html'),
        profile: resolve(__dirname, 'profile.html'),
      },
    },
  },
})
