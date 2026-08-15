import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import svgUse from '@svg-use/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    svgUse(),
    tailwindcss(),
  ],
  build: {
    assetsInlineLimit: (filePath) => !filePath.endsWith('.svg'),
  },
});
