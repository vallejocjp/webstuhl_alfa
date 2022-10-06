import App from './App.vue'
//import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/router.js'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

createApp(App)
.use(router)
.use(createPinia())
.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
.mount('#app')
