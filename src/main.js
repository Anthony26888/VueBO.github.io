import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons';
import VueApexCharts from "vue3-apexcharts";
import VueCountdown from '@chenfengyuan/vue-countdown';
import router from './router.js'
const app = createApp(App);
app.component(VueCountdown.name, VueCountdown);
app.use(VueApexCharts);
app.use(router)
app.mount('#app')
