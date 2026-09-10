import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
// Pure static export for GitHub Pages; no Worker or runtime secrets.
export default defineConfig({css: {postcss: {plugins: [tailwindcss()]}}, plugins: [vinext()]});
