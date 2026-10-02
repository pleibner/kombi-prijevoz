import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import type { ViteSSGOptions } from 'vite-ssg'
import { buildLlmsTxt } from './src/seo/llms'
import { buildSitemap } from './src/seo/sitemap'

const outDir = fileURLToPath(new URL('./dist', import.meta.url))
let sitemapPaths: string[] = []

/** Date of the commit being built, so sitemap lastmod only moves when the site changes. */
const lastModified = () => {
  try {
    return execSync('git log -1 --format=%cs', { encoding: 'utf8' }).trim()
  } catch {
    return new Date().toISOString().slice(0, 10)
  }
}

const ssgOptions: ViteSSGOptions = {
  includedRoutes(paths) {
    const pages = paths.filter((path) => !path.includes(':') && !path.includes('*'))
    sitemapPaths = pages.filter((path) => path !== '/404')
    return pages
  },
  onFinished() {
    writeFileSync(`${outDir}/sitemap.xml`, buildSitemap(sitemapPaths, lastModified()))
    writeFileSync(`${outDir}/llms.txt`, buildLlmsTxt())
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions,
})
