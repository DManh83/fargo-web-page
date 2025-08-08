import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import * as Icons from '@ant-design/icons-vue'

const app = createApp(App)

app.use(router).use(Antd)

for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}

app.mount('#app')
