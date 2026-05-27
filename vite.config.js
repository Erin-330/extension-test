import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        login: resolve(__dirname, 'login.html'),
        profile: resolve(__dirname, 'profile.html'),
        rank: resolve(__dirname, 'rank.html'),
      },
    },
  },
  publicDir: 'public',
})
