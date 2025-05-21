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
      // Opcional: adicione rotas dinâmicas do blog aqui se necessário no futuro
      // dynamicRoutes: async () => {
      //   const routes = [];
      //   // Lógica para buscar posts do Firebase e gerar rotas
      //   // Ex: const posts = await getPostsFromFirebase();
      //   // posts.forEach(post => routes.push(`/blog/${post.slug}`));
      //   return routes;
      // },
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
