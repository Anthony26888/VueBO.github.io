import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/VueBO.github.io/' // Thay tên repository của các bạn vào đây nhé
    : '/'
})
