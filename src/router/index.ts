import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import { trackingService } from '../utils/tracking'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactView,
    },
  ],
})

router.afterEach((to) => {
  if (to.name) {
    trackingService.trackPageView(to.name as string)
  } else if (to.path) {
    trackingService.trackPageView(to.path.split('/').pop() || '')
  }
})

export default router
