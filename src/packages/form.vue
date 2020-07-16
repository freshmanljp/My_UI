<template>
  <div class="my-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MyForm',
  props: {
    value: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '200px'
    },
    rules: {
      type: Object
    }
  },
  computed: {
    isValidate () {
      return Boolean(this.rules)
    }
  },
  provide () {
    return {
      form: this
    }
  }
}
</script>
<style scoped lang="scss">
</style>
