import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.scss'
import './assets/css/base.scss'
import './assets/css/variables.scss'


createApp(App).use(router).mount("#app");
