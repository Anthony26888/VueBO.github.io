import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons';
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios';
import VueCountdown from '@chenfengyuan/vue-countdown';
import Notifications from '@kyvg/vue3-notification'
const app = createApp(App);
app.component(VueCountdown.name, VueCountdown);
app.use(VueApexCharts);
app.use(Notifications);
app.mount('#app')
