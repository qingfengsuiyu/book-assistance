import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/style/index.css' // 引入全局css样式

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
