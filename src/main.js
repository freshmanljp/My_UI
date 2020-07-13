import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import {
  MyButton,
  MyDialog,
  MyInput,
  MySwitch
} from './package'

Vue.config.productionTip = false
// 挂载自己封装的UI组件
Vue.component(MyButton.name, MyButton)
Vue.component(MyDialog.name, MyDialog)
Vue.component(MyInput.name, MyInput)
Vue.component(MySwitch.name, MySwitch)

new Vue({
  render: h => h(App)
}).$mount('#app')
