import Vue from 'vue'
import App from './App.vue'
import MyComponent from '../src'


Vue.config.productionTip = false
Vue.use(MyComponent)

new Vue({
  render: h => h(App),
}).$mount('#app')
