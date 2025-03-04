import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import svgUse from '@svg-use/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
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
