<template>
    <label class="my-radio" :class="{'is-checked': label === model}">
      <span class="my-radio_input">
        <span class="my-radio_inner"></span>
        <input
          type="radio"
          class="my-radio_original"
          :name="name"
          :value="label"
          v-model="model"
        >
      </span>
      <span class="my-radio_label">
        <slot>{{label}}</slot>
      </span>
    </label>
</template>
<script>
export default {
  name: 'MyRadio',
  props: {
    label: {
      type: [String, Boolean, Number],
      required: true
    },
    // value获取父组件v-model传来的值
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  // 接收父组件radioGroup的传值
  inject: {
    // 写成对象的形式是方便设置默认值,没有此值的时候会报错
    radioGroup: {
      default: ''
    }
  },
  computed: {
    // 判断组件是否在radioGroup组件内
    isInGroup () {
      return Boolean(this.radioGroup)
    },
    model: {
      get () {
        return this.isInGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        return this.isInGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
  .my-radio {
    display: inline-block;
    position: relative;
    margin-right: 30px;
    color: #606266;
    font-size: 14px;
    font-weight: 500;
    // 根据字号大小设置行距
    line-height: 1;
    outline: none;
    white-space: nowrap;
    cursor: pointer;
    // 禁止文本选择
    -moz-user-select: none;
    -webkit-user-select: none;
    .my-radio_input {
      position: relative;
      display: inline-block;
      line-height: 1;
      vertical-align: middle;
      outline: none;
      white-space: nowrap;
      cursor: pointer;
      .my-radio_inner {
        position: relative;
        display: inline-block;
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        border-radius: 50%;
        cursor: pointer;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #409eff;
          // scale显示与隐藏
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .my-radio_original {
        opacity: 0;
        outline: none;
        position: absolute;
      }
    }
    .my-radio_label {
      font-size: 14px;
      padding-left: 10px;
    }
    &.is-checked {
      .my-radio_input {
        .my-radio_inner {
          border-color: #409eff;
          &::after{
            transform: translate(-50%,-50%) scale(1);
          }
        }
      }
      .my-radio_label{
        color:#409eff;
      }
    }
  }
</style>
