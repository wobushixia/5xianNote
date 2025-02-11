import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from '@/router/router.ts'
import "mathjax/es5/tex-svg-full"

const app = createApp(App)
app.use(route)
app.mount('#app')