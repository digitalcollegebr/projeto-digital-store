import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/drip-store-front/',
  plugins: [react()],
});
