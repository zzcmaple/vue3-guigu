import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
createApp(App).mount('#app')

const fn = () => {
  console.log('fn')
}

fn()
