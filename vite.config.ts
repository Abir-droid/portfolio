import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Relative path: works on file://, /me/, and any subpath without blank white screen!
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
});
