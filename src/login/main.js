import { createApp } from 'vue'
import '../style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons'
import router from '../router'

const app = createApp(App);
app.use(router)
app.mount('#app')