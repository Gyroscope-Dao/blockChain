import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import Particles from 'vue3-particles'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(Particles)
app.use(ElementPlus)
app.mount('#app')
