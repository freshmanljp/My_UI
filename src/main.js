import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import MyButton from './package/button.vue'

Vue.config.productionTip = false
// 挂载自己封装的UI组件
Vue.component(MyButton.name, MyButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
