import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

createApp(App)
    .use(VueSmoothScroll)
    .mount('#app')
