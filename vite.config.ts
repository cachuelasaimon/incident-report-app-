import { resolve } from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import pluginRewriteAll from 'vite-plugin-rewrite-all';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      outDir: './dist',
      target: 'esnext',
    },
    publicDir: './public',
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
      },
    },
    plugins: [
      react({
        include: '**/*.{jsx,tsx}',
      }),
      checker({ typescript: true }),
      tsconfigPaths(),
    ],
    server: {
      port: 3000,
    },
  };
});
