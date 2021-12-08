import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/index.js'
// import store from './store/index.js'

const app = createApp(App)
app.use(routes)
// app.use(store)

app.mount('#app')
