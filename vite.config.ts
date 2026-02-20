import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Remplacez 'overst_music' par le nom de votre repo GitHub si différent
  base: '/overst_music/',
})
