import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/TriveniBeautyElite/',  // Set the base path for GitHub Pages or deployment
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsDir: 'assets',  // Make sure assets are placed in the assets directory
  },
});
