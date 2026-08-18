import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['src/**/__tests__/**', 'src/**/*.test.ts', 'src/**/*.test.tsx'],
    }),
  ],
  build: {
    emptyOutDir: mode !== 'development',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'NewspaperUIComponents',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name === 'style.css' ? 'style.css' : 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
}));
