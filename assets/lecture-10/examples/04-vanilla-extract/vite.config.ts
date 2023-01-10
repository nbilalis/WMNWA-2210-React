import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  base: '',
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
