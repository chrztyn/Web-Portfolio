import { createApp } from 'vue'
import { createHead } from 'unhead'
import './style.css'
import './assets/css/fonts.css' 
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view')
    } else {
      entry.target.classList.remove('in-view') 
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('section').forEach(section => {
  observer.observe(section)
})