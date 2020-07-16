<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MyRadioGroup',
  props: {
    // 用于接收各组件的绑定值，其值的摄制由子组件radio触发
    value: null
  },
  provide () {
    return {
      // 将此组件传递给需要用到的radio子组件
      radioGroup: this
    }
  }
}
</script>
<style scoped lang="scss">
</style>
