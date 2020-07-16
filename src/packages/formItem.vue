<template>
  <div class="my-form-item">
    <label class="my-form-item_label" :style="{'width':this.form.labelWidth}">{{label}}</label>
    <div class="my-form-item_content">
      <slot></slot>
      <!-- 校验信息提示 -->
      <span v-if="isErr" class="err">{{errMessage}}</span>
    </div>
  </div>
</template>
<script>
import Schema from 'async-validator'
export default {
  name: 'MyFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      isErr: false,
      errMessage: ''
    }
  },
  provide () {
    return {
      formItem: this
    }
  },
  mounted () {
    this.$on('validate', this.validator)
  },
  methods: {
    validator () {
      console.log('inValid')
      const value = this.form.value[this.prop]
      const rule = this.form.rules[this.prop]
      const descriptor = { [this.prop]: rule }
      const schema = new Schema(descriptor)
      // console.log(descriptor, schema, value)
      schema.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMessage = errors[0].message
          this.isErr = true
        } else {
          this.errMessage = ''
          this.isErr = false
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .my-form-item {
    margin-bottom: 25px;
    .my-form-item_label {
      float: left;
      padding: 0 12px 0 0 ;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      text-align: right;
      vertical-align: middle;
      box-sizing: border-box;
    }
    .my-form-item_content {
      position: relative;
      line-height: 40px;
      font-size: 14px;
      overflow: hidden;
    }
  }
  .err {
    color: red;
    font-size: 14px;
    line-height: 14px;
  }
</style>
