/// <reference types="vite-react-ssg" />
// The triple-slash reference above loads vite-react-ssg's `ssgOptions` module
// augmentation for vite's UserConfig (a plain `import type {}` would be elided by
// verbatimModuleSyntax and the augmentation would be lost).
import { defineConfig, loadEnv, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import sitemap from 'vite-plugin-sitemap'

// Fetch the published blog slugs at build time so they end up in sitemap.xml.
// Best-effort: any failure (offline, missing env) falls back to an empty list so
// the build never breaks because of the sitemap.
async function fetchPublishedBlogRoutes(supabaseUrl?: string, anonKey?: string): Promise<string[]> {
  if (!supabaseUrl || !anonKey) {
    return []
  }

  try {
    const endpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/blog_posts?select=slug&status=eq.published`
    const response = await fetch(endpoint, {
      headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
    })

    if (!response.ok) {
      return []
    }

    const rows = (await response.json()) as Array<{ slug?: string }>
    return rows.map((row) => row.slug).filter((slug): slug is string => Boolean(slug)).map((slug) => `/blog/${slug}`)
  } catch (error) {
    console.warn('[sitemap] could not fetch blog slugs, skipping article URLs', error)
    return []
  }
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
  const env = loadEnv(mode, process.cwd(), '')
  const blogRoutes = await fetchPublishedBlogRoutes(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY)

  // The plugin already emits the home route ('/'), so we only add the remaining
  // public routes plus every published article. De-duplicate just in case.
  const dynamicRoutes = Array.from(new Set(['/blog', '/agendamento', ...blogRoutes]))

  return {
    plugins: [
      react(),
      sitemap({
        hostname: 'https://www.larissanunespsi.com.br',
        dynamicRoutes,
        exclude: [
          '/admin',
          '/admin/login',
          '/admin/register',
          '/admin/blog',
          '/admin/criar-artigos',
          '/primeira-consulta',
          '/sessao-de-resolucao',
        ],
        generateRobotsTxt: false,
        readable: true,
      }),
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
    // Options consumed by `vite-react-ssg build` (Static Site Generation).
    ssgOptions: {
      // /foo -> dist/foo/index.html (clean URLs, friendly for Vercel static hosting).
      dirStyle: 'nested',
      // Load the hydration scripts asynchronously so they don't block first paint.
      script: 'async',
      // Decide which routes get pre-rendered. We keep every public route, expand the
      // blog article slugs via getStaticPaths, and explicitly skip the admin area and
      // the React Router pattern/catch-all routes (they stay client-only).
      includedRoutes(paths: string[]) {
        return paths.filter((rawPath) => {
          // Paths arrive with or without a leading slash depending on nesting depth.
          const path = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
          return !path.includes(':') && !path.includes('*') && !path.startsWith('/admin')
        })
      },
    },
    publicDir: 'public',
    server: {
      fs: {
        strict: false,
        allow: ['..'],
      },
    },
  }
})
