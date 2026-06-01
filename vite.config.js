import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'login.html'),
        redirect: resolve(__dirname, 'redirect.html'),
      },
    },
  },
})
