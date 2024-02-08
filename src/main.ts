/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import './assets/global-style.css'

// Components
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/drawer'

// Composables

const app = createApp(App)
app.use(router)
app.use(store)

registerPlugins(app)

app.mount('#app')
