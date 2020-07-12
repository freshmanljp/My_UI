<template>
  <div id="app">
    <div style="width: 30%">
      用户名：{{username}}
      密码：{{password}}
      <MyInput placeholder="占位的东西哦" name="username" :clearable="true" v-model="username"></MyInput>
      <MyInput type="password" name="password" :visible="true" v-model="password" :clearable="true"></MyInput>
      <MyInput :disabled="true"></MyInput>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: 'darling',
      password: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
