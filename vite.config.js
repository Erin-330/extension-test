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
        follow: resolve(__dirname, 'follow.html'),
        rank: resolve(__dirname, 'rank.html'),
        splash: resolve(__dirname, 'splash.html'),
      },
    },
  },
  publicDir: 'public',
})
