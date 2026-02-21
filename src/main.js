import { createApp } from 'vue'
import { createHead } from 'unhead'
import './style.css'
import './assets/css/fonts.css' 
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')