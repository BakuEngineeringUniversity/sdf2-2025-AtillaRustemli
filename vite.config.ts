import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import electron from 'vite-plugin-electron';

export default defineConfig({
  base: './', // Critical for Electron
  plugins: [
    react(),
    electron({
      entry: 'src/main/main.js', // Path to your main process file
    })
  ],
  build: {
    outDir: 'renderer/dist',
    emptyOutDir: true,
  }
});