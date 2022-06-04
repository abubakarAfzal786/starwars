import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import VueTablerIcons from 'vue-tabler-icons'
import { createPinia } from 'pinia'
import { createClient, defaultPlugins } from 'villus'
import './style.css'

function authPlugin ({ opContext }) {
  opContext.headers.auth = 'sdflkjasdf'
}
// Creates a villus client instance
const client = createClient({
  url: 'http://45.77.99.150:4001/graphql',
  use: [authPlugin, ...defaultPlugins()]
})
createApp(App)
  .use(VueTablerIcons)
  .use(createPinia())
  .use(naive)
  .use(client)
  .mount('#app')
