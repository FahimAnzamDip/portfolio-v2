import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import {registerScrollSpy} from 'vue3-scroll-spy'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(router)

registerScrollSpy(app)
app.use(MotionPlugin)

app.mount('#app')