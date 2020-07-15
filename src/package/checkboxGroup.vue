<template>
  <div class="my-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MyCheckBoxGroup',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
</style>
