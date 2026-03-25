import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/CV/',
  plugins: [react()],
  // GitHub Pages is set to deploy from /docs on main — build must output there
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
