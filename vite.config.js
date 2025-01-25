import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.PROXY_API_URL || "https://elitebuy-1.onrender.com",
        changeOrigin: true,
      },
      "/user": {
        target: process.env.PROXY_API_URL || "https://elitebuy-1.onrender.com",
        changeOrigin: true,
      },
    },
  },
})
