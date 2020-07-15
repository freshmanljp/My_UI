<template>
  <div class="my-input">
    <!-- 若是密码框的类型由显示变量控制，其他则有type控制 -->
    <input
      :type="type === 'password' ? (isPwShow ? 'text' : 'password') : type"
      class="my-input-inner"
      :class="{
        'is-disabled': disabled
      }"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="my-input_suffix" v-if="clearable || visible">
      <i
        class="my-icon-cancel"
        v-if="clearable && value"
        @click="handleClear"
      ></i>
      <i
        class="my-icon-visible"
        :class="{'my-icon-active': isPwShow}"
        v-if="type==='password' && visible"
        @click="handleVisible"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'MyInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: null,
      default: ''
    }
  },
  inject: {
    form: {
      default: ''
    },
    formItem: {
      default: ''
    }
  },
  data () {
    return {
      isPwShow: false
    }
  },
  methods: {
    // 双向绑定
    handleInput (e) {
      // 触发值修改
      this.$emit('input', e.target.value)
      // 触发值验证
      if (this.form.isValidate) {
        this.formItem.$emit('validate')
      }
    },
    handleClear () {
      this.$emit('input', '')
    },
    handleVisible () {
      this.isPwShow = !this.isPwShow
    }
  }
}
</script>
<style scoped lang="scss">
  .my-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-box;
    .my-input-inner {
      // 去除浏览器默认样式
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-box;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      width: 100%;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      &:focus {
        outline: none;
        border-color: #409eff;
      }
      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
    .my-input_suffix {
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      cursor: pointer;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .my-icon-active {
        color: blue;
      }
    }
  }
</style>
