import { useHead } from '@unhead/vue'

/** Adds a JSON-LD block to the page head; `key` keeps one block per kind. */
export function useJsonLd(key: string, data: object) {
  useHead({
    script: [{ key, type: 'application/ld+json', innerHTML: JSON.stringify(data) }],
  })
}
