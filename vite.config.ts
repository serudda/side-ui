import path, { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

// Define the TypeScript path aliases you want to resolve
const aliasConfig = [
  {
    find: /^@common$/,
    replacement: path.resolve(__dirname, 'src/common/') + '',
  },
  {
    find: /^@components$/,
    replacement: path.resolve(__dirname, 'src/components/') + '',
  },
  {
    find: /^@contexts$/,
    replacement: path.resolve(__dirname, 'src/contexts/') + '',
  },
  {
    find: /^@hooks$/,
    replacement: path.resolve(__dirname, 'src/hooks/') + '',
  },
];

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: aliasConfig,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.tsx', 'src/storybook/**/*'],
    }),
    viteStaticCopy({
      targets: [
        {
          src: './tailwind.config.js',
          dest: '',
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'side-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `side-ui.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
});
