import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: mode !== 'development',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NewspaperUIUtils',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [],
    },
  },
}));
