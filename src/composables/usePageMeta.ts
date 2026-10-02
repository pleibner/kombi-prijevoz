import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { site } from '@/data/site'
import { pageUrl } from '@/utils/schema'

export const ogImage = {
  url: `${site.url}/og-image.png`,
  width: 1200,
  height: 630,
  alt: 'Kombi Transport: selidbe, dostava i prijevoz kombijem po Zagrebu',
}

interface PageMeta {
  title: string
  description: string
  /** Keeps the page out of search results: no canonical and no og:url. */
  noindex?: boolean
}

/** Title, description, canonical and social preview tags for the current route. */
export function usePageMeta({ title, description, noindex = false }: PageMeta) {
  const route = useRoute()
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`
  const url = pageUrl(route.path)

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:locale', content: 'hr_HR' },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      ...(noindex ? [] : [{ property: 'og:url', content: url }]),
      { property: 'og:image', content: ogImage.url },
      { property: 'og:image:width', content: String(ogImage.width) },
      { property: 'og:image:height', content: String(ogImage.height) },
      { property: 'og:image:alt', content: ogImage.alt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage.url },
    ],
    link: noindex ? [] : [{ rel: 'canonical', href: url }],
  })
}
