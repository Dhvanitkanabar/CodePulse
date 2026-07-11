import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: false, // Do not delete the main build output!
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'content/index.jsx')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        format: 'iife', // Immediately Invoked Function Expression
        inlineDynamicImports: true // Ensure everything is in one file
      }
    }
  }
});
