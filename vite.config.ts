import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Pages el sitio vive en /movete-landing-/.
// El workflow define VITE_BASE; en local queda en "/".
const base = process.env.VITE_BASE ?? '/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
