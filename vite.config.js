import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Set base to repository name so built assets use correct paths on GitHub Pages
  base: '/VS-Style-Portfolio/',
  plugins: [react()],
})
