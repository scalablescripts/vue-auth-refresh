import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './interceptors/axios'

createApp(App).use(router).mount('#app')
