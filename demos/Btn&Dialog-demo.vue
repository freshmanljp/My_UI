<template>
  <div id="app">
    <!-- <div>
      <MyButton @click="sayHi">哎呀</MyButton>
      <MyButton type="primary">哎呀</MyButton>
      <MyButton type="success">哎呀</MyButton>
      <MyButton type="warning">哎呀</MyButton>
      <MyButton type="danger">哎呀</MyButton>
      <MyButton type="info">哎呀</MyButton>
    </div>
    <div>
      <MyButton :plain="true">哎呀</MyButton>
      <MyButton type="primary" :plain="true">哎呀</MyButton>
      <MyButton type="success" :plain="true">哎呀</MyButton>
      <MyButton type="warning" :plain="true">哎呀</MyButton>
      <MyButton type="danger" :plain="true">哎呀</MyButton>
      <MyButton type="info" :plain="true">哎呀</MyButton>
    </div>
    <div>
      <MyButton :plain="true" :round="true">哎呀</MyButton>
      <MyButton type="primary" :plain="true" :round="true">哎呀</MyButton>
      <MyButton type="success" :plain="true" :round="true">哎呀</MyButton>
      <MyButton type="warning" :plain="true" :round="true">哎呀</MyButton>
      <MyButton type="danger" :plain="true" :round="true">哎呀</MyButton>
      <MyButton type="info" :plain="true" :round="true">哎呀</MyButton>
    </div>
    <div>
      <MyButton :plain="true" :circle="true" icon="address">哎呀</MyButton>
      <MyButton type="primary" :plain="true" :circle="true" icon="address">哎呀</MyButton>
      <MyButton type="success" :plain="true" :circle="true" icon="address">哎呀</MyButton>
      <MyButton type="warning" :plain="true" :circle="true" icon="address">哎呀</MyButton>
      <MyButton type="danger" :plain="true" :circle="true" icon="address">哎呀</MyButton>
      <MyButton type="info" :plain="true" :circle="true" icon="address">哎呀</MyButton>
    </div>
    <div>
      <MyButton icon="address"></MyButton>
      <MyButton type="primary" icon="close1"></MyButton>
      <MyButton type="success" icon="cancel1"></MyButton>
      <MyButton type="warning" icon="entertainmentmark"></MyButton>
      <MyButton type="danger" icon="address"></MyButton>
      <MyButton type="info" icon="address"></MyButton>
    </div>
    <div>
      <MyButton @click="sayHi" :disabled="true">哎呀</MyButton>
      <MyButton type="primary" :disabled="true">哎呀</MyButton>
      <MyButton type="success" :disabled="true">哎呀</MyButton>
      <MyButton type="warning" :disabled="true">哎呀</MyButton>
      <MyButton type="danger" :disabled="true">哎呀</MyButton>
      <MyButton type="info" :disabled="true">哎呀</MyButton>
    </div> -->
    <!-- <MyDialog title="标题"></MyDialog> -->
    <MyButton type="info" @click="visible=true">对话框来玩啊</MyButton>
    <!-- sync修饰符的使用简便了组件的使用,不用另外绑定事件 -->
    <MyDialog width="30%" top="15vh" :visible.sync="visible">
      <!-- 使用具名插槽的用法 -->
      <template v-slot:title>
        <h3 :style="{color: 'red'}">红色的标题</h3>
      </template>
      <template v-slot:default>
        我想将天使的小礼物呈上
      </template>
      <template v-slot:footer>
        <MyButton type="primary" @click="visible=false">确定</MyButton>
        <MyButton @click="visible=false">取消</MyButton>
      </template>
    </MyDialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: true
    }
  },
  methods: {
    sayHi () {
      console.log('Hi')
    }
    // close () {
    //   this.visible = false
    // }
  }
}
</script>

<style lang="scss">
</style>
