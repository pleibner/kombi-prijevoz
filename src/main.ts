import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'

const app = createApp(App)

app.use(router)

router.isReady().then(() => {
  const currentRoute = router.currentRoute.value
  if (currentRoute.name) {
    // Import the updateMetaTags function
    import('./router/index').then(({ updateMetaTags }) => {
      updateMetaTags(currentRoute.name as string)
    })
  }
})

app.mount('#app')
