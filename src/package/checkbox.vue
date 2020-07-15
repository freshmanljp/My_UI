<template>
  <label class="my-checkbox" :class="{'is-checked': isChecked}">
    <span class="my-checkbox_input">
      <span class="my-checkbox_inner"></span>
      <!-- value和label绑定是因为group的时候需要传递的value为label -->
      <input
        type="checkbox"
        class="my-checkbox_original"
        v-model="model"
        :name="name"
        :value="label"
      >
    </span>
    <span class="my-checkbox_label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'MyCheckBox',
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: [String, Number],
      required: true
    },
    // value是用来绑定父组件的v-model的，在没有group的时候使用
    value: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  computed: {
    isInGroup () {
      return Boolean(this.checkboxGroup)
    },
    model: {
      get () {
        return this.isInGroup ? this.checkboxGroup.value : this.value
      },
      set (value) {
        return this.isInGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 根据不同情况决定不同的选中判定
    isChecked () {
      return this.isInGroup ? this.checkboxGroup.value.includes(this.label) : this.value
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
  .my-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .my-checkbox_input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .my-checkbox_inner {
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &::after {
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          width: 3px;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
    }
    .my-checkbox_original {
      opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
    }
    .my-checkbox_label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
    &.is-checked {
      .my-checkbox_input{
        .my-checkbox_inner{
          background-color: #409eff;
          border-color: #409eff;
          &::after{
            transform: rotate(45deg) scaleY(1);
          }
        }
      }
      .my-checkbox_label{
        color: #409eff;
      }
    }
  }
</style>
