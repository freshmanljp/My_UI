<template>
  <div class="my-switch" :class="{'is-checked': value}">
    <span class="my-switch_core" ref="core">
      <button
      class="my-switch_btn"
      @click="changeCheck"
      ></button>
      <!-- checkbox输入框用于收集表单数据，其checked值与value绑定 -->
      <input
        type="checkbox"
        class="my-switch_input"
        :name="name"
        :checked="value"
        ref="input"
      >
    </span>
  </div>
</template>
<script>
export default {
  name: 'MySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    // setInterval(() => {
    //   console.log(this.$refs.input.checked)
    // }, 1000)
  },
  methods: {
    async changeCheck () {
      this.$emit('input', !this.value)
      // nextTick使等待组件渲染完成的方法
      await this.$nextTick()
      // 等渲染完才能设置颜色，因为传到父组件需要事件
      this.setColor()
    },
    // 根据状态设置组件颜色
    setColor () {
      const color = this.value ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = color
      this.$refs.core.style.backgroundColor = color
    }
  }
}
</script>
<style scoped lang="scss">
  .my-switch {
    display: inline-block;
    line-height: 20px;
    position: relative;
    font-size: 14px;
    vertical-align: middle;
    .my-switch_core {
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: #dcdfe6;
      cursor: pointer;
      vertical-align: middle;
      transition: border-color .3s,background-color .3s;
      .my-switch_btn {
        position: absolute;
        width: 16px;
        height: 16px;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        background-color: #fff;
        transition:  all .3s;
        outline: none;
      }
      .my-switch_input {
        position:absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
      }
    }
  }
  .is-checked {
    .my-switch_core {
      border-color: #409eff;
      background-color: #409eff;
      .my-switch_btn {
        transform: translateX(20px);
      }
    }
  }
</style>
