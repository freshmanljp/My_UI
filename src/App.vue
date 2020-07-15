<template>
  <div id="app">
    <!-- <div style="width: 30%">
      用户名：{{username}}
      密码：{{password}}
      <MyInput placeholder="占位的东西哦" name="username" :clearable="true" v-model="username"></MyInput>
      <MyInput type="password" name="password" :visible="true" v-model="password" :clearable="true"></MyInput>
      <MyInput :disabled="true"></MyInput>
    </div> -->
    <!-- /////////////////////////////////////////////////// -->
    <!-- <div>
      开关：{{switchValue ? 'yes' : 'no'}}
    </div>
    <MySwitch v-model="switchValue" activeColor="green" inactiveColor="red" name="yihun"></MySwitch> -->
    <!-- ///////////////////////////////////////////////////////////////// -->
    <!-- 选中的偶像：{{selectIdol}}
    <MyRadioGroup v-model="selectIdol">
      <MyRadio label="JayChou">周杰伦</MyRadio>
      <MyRadio label="Eason">陈奕迅</MyRadio>
    </MyRadioGroup> -->
    <!-- ///////////////////////////////////////////////////////////// -->
    <!-- <div>
      是否选中：{{isChecked}}
    </div>
    <MyCheckBox label="是否选中" v-model="isChecked" name="isChecked"></MyCheckBox>
    <div>
      选中的愿望：{{selectDream}}
    </div>
    <MyCheckBoxGroup v-model="selectDream">
      <MyCheckBox label="变高"></MyCheckBox>
      <MyCheckBox label="变自信"></MyCheckBox>
      <MyCheckBox label="变阳光"></MyCheckBox>
    </MyCheckBoxGroup> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      // username: 'darling',
      // password: ''
      // switchValue: false,
      // selectIdol: ''
      isChecked: false,
      selectDream: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
