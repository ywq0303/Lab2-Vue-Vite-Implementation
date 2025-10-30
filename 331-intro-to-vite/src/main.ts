// Updated CSS import to load Tailwind settings
import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

// 配置NProgress
NProgress.configure({ showSpinner: false })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
