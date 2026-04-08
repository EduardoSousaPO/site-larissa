import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://site-larissa-three.vercel.app',
      dynamicRoutes: ['/', '/blog', '/depoimentos', '/agendamento'],
      exclude: ['/admin', '/admin/login', '/admin/register', '/admin/blog', '/admin/criar-artigos', '/primeira-consulta', '/sessao-de-resolucao'],
      generateRobotsTxt: false,
      readable: true,
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    cssMinify: true,
    minify: 'esbuild',
  },
  publicDir: 'public',
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  }
})
