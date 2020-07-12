<template>
  <div class="container">
    <!-- transition是vue的动画封装组件 -->
    <transition name="dialog-fade">
      <!-- v-show 只是简单地切换元素的 CSS property display -->
      <!-- .self代表只有点到自己才会触发 -->
      <div class="my-dialog_wrapper" v-show="visible" @click.self="close">
        <div class="my-dialog" :style="{width, marginTop: top}">
          <div class="my-dialog_header">
            <!-- title支持具名插槽的形式 -->
            <slot name="title">
              <span class="my-dialog_title">{{ title }}</span>
            </slot>
            <button class="my-dialog_headerbtn" @click="close">
              <i class="my-icon-close"></i>
            </button>
          </div>
          <div class="my-dialog_body">
            <slot><span>这是一段内容信息</span></slot>
          </div>
          <div class="my-dialog_footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'MyDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close () {
      // update:数据名 的方法名用于sync修饰符的处理,第二个参数是数据update的具体数据
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style scoped lang="scss">
  .my-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,0.5);
    .my-dialog {
      position: relative;
      // 1vh等于视口高度的1%
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      box-sizing: border-box;
      width: 30%;
      &_header {
        padding: 20px 20px 10px;
        .my-dialog_title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }
        .my-dialog_headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;
          .my-icon-close{
            color:909399
          }
        }
      }
      &_body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        // 允许在单词内换行
        word-break: break-all;
      }
      &_footer{
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;
        // 深度作用选择器，解决scope下后代选择器无法深度选择的问题
        ::v-deep .my-button:first-child{
          margin-right: 20px;
        }
      }
    }
  }
  @keyframes display {
    0% {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .dialog-fade-enter-active {
    animation: display 0.3s;
  }
  .dialog-fade-leave-active {
    animation: display 0.3s reverse;
  }
</style>
