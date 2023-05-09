import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chatbot from '../src/components/ChatBot.vue'
import '../assets/main.scss'

const app = createApp(App)
app.use(router).use(store)
app.component('ChatBot', Chatbot)
app.mount('#app')
