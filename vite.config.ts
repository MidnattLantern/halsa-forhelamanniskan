import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base: '/halsa-forhelamanniskan/', // keep disabled when using Strato's domain
  plugins: [react()],
})
