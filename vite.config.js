import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {
    plugins: [vue()],
    base: '/myappquran',
    build: {
      outDir: 'dist'
    }
  }
  if(command !== 'dev')
    config.base = '/myappquran'
  return config
})
