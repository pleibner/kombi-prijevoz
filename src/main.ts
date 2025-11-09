import App from './App.vue'
import router from './router/index'
import './styles/global.css'
import { ViteSSG } from 'vite-ssg'

export const createApp = ViteSSG(App, { routes: router.options.routes }, async ({ router }) => {
  if (!import.meta.env.SSR) {
    // Lazy import tracking service only when not in SSR mode
    const { trackingService } = await import('./utils/tracking')

    router.isReady().then(() => {
      trackingService.trackPageView(
        (router.currentRoute.value.name as string) || router.currentRoute.value.path,
      )
    })

    router.afterEach((to) => {
      trackingService.trackPageView((to.name as string) || to.path)
    })
  }
})
