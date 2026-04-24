import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain rockyscafe9.com is served from root — base is always '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
