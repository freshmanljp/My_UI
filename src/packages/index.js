import MyButton from './button.vue'
import MyDialog from './dialog.vue'
import MyInput from './input.vue'
import MySwitch from './switch.vue'
import MyRadio from './radio.vue'
import MyRadioGroup from './radioGroup.vue'
import MyCheckBox from './checkbox.vue'
import MyCheckBoxGroup from './checkboxGroup.vue'
import MyForm from './form.vue'
import MyFormItem from './formItem.vue'
import './fonts/iconfont.css'

// 存储安装组件的列表
const components = [
  MyButton,
  MyDialog,
  MyInput,
  MySwitch,
  MyRadio,
  MyRadioGroup,
  MyCheckBox,
  MyCheckBoxGroup,
  MyForm,
  MyFormItem
]

// 安装函数
const install = (Vue) => {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

// 若有全局Vue，则自动安装，不需要调用use方法了
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue)
// }

export default install
