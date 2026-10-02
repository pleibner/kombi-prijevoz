import type { Directive } from 'vue'

/**
 * v-reveal: fades and lifts an element into place the first time it scrolls into view.
 * The element stays fully visible without JavaScript, when the viewer prefers reduced
 * motion, or when it is already on screen at mount, so nothing flashes.
 * An optional value sets a stagger delay in milliseconds (`v-reveal="120"`).
 */
let observer: IntersectionObserver | null = null

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const getObserver = () => {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
  }
  return observer
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
  getSSRProps() {
    return {}
  },
}
