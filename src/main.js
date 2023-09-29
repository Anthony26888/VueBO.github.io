import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import VueApexCharts from "vue3-apexcharts";
import axios from 'axios';
const app = createApp(App);
app.use(VueApexCharts);
app.mount('#app')
