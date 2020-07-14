<template>
  <div id="app">
    <!-- <div style="width: 30%">
      用户名：{{username}}
      密码：{{password}}
      <MyInput placeholder="占位的东西哦" name="username" :clearable="true" v-model="username"></MyInput>
      <MyInput type="password" name="password" :visible="true" v-model="password" :clearable="true"></MyInput>
      <MyInput :disabled="true"></MyInput>
    </div> -->
    <!-- <div>
      开关：{{switchValue ? 'yes' : 'no'}}
    </div>
    <MySwitch v-model="switchValue" activeColor="green" inactiveColor="red" name="yihun"></MySwitch> -->
    选中的偶像：{{selectIdol}}
    <div>
      <MyRadio label="JayChou" v-model="selectIdol">周杰伦</MyRadio>
      <MyRadio label="Eason" v-model="selectIdol">陈奕迅</MyRadio>
    </div>
    <!-- 选中的偶像：{{selectIdol}}
    <MyRadioGroup v-model="selectIdol">
      <MyRadio label="JayChou">周杰伦</MyRadio>
      <MyRadio label="Eason">陈奕迅</MyRadio>
    </MyRadioGroup> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // username: 'darling',
      // password: ''
      // switchValue: false
      selectIdol: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
