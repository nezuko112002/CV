import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base: works when GitHub Pages serves from /CV/ (avoids wrong absolute paths)
  base: './',
  plugins: [react()],
  // GitHub Pages is set to deploy from /docs on main — build must output there
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
