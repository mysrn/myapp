import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {createRouter, createWebHistory} from 'vue-router'
import AllSuratVue from './components/AllSurat.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/myappquran',
      name: 'Home',
      component: AllSuratVue
    },
  ]
})

app.config.globalProperties.$http = axios
app.use(router)
app.mount('#app')
