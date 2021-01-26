import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'
import 'vant/lib/index.css'

Vue.use(Vant)

new Vue({
  render: h => <App />
}).$mount('#app')
