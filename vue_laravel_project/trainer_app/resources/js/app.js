require('./bootstrap');

import { createApp } from 'vue'

import router from './router'
import Apps from './Apps'
import '../css/app.css'

createApp(Apps)
  .use(router)
  .mount('#app')
