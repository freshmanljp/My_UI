import Vue from 'vue'
import App from './App.vue'
import MyUI from '../src/packages'

Vue.config.productionTip = false

// 安装自己封装的UI组件
Vue.use(MyUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
