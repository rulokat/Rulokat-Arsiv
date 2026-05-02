import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // GitHub Pages uyumluluğu için relative path
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
