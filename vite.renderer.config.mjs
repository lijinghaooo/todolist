import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  // 端口被占用可修改这里
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  }
});