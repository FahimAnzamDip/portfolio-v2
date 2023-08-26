import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
import {registerScrollSpy} from 'vue3-scroll-spy'

const app = createApp(App)

registerScrollSpy(app)
app.use(VueSmoothScroll)

app.mount('#app')
