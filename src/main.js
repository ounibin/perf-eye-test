import { createApp } from 'vue'
import App from './App.vue'


import PerfEye from 'perf-eye'


const perf_ins = new PerfEye({
  postUrl: 'http://localhost:3000/api/perf'
})

perf_ins.init()

createApp(App).mount('#app')
