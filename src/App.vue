<template>
  <div id="app">
    <!-- ///////////////Input输入框////////////////////////// -->
    <!-- <div style="width: 30%">
      用户名：{{username}}
      密码：{{password}}
      <MyInput placeholder="占位的东西哦" name="username" :clearable="true" v-model="username"></MyInput>
      <MyInput type="password" name="password" :visible="true" v-model="password" :clearable="true"></MyInput>
      <MyInput :disabled="true"></MyInput>
    </div> -->
    <!-- /////////////////Switch开关////////////////////////////////// -->
    <!-- <div>
      开关：{{switchValue ? 'yes' : 'no'}}
    </div>
    <MySwitch v-model="switchValue" activeColor="green" inactiveColor="red" name="yihun"></MySwitch> -->
    <!-- //////////////////////////Radio单选框/////////////////////////////////////// -->
    <!-- 选中的偶像：{{selectIdol}}
    <MyRadioGroup v-model="selectIdol">
      <MyRadio label="JayChou">周杰伦</MyRadio>
      <MyRadio label="Eason">陈奕迅</MyRadio>
    </MyRadioGroup> -->
    <!-- ////////////////////////////checkbox复选框///////////////////////////////// -->
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
    <!-- ///////////////////form表单和item组件///////////////////// -->
    <MyForm v-model="formData" labelWidth="300px" :rules="rules">
      <MyFormItem label="username" prop="username">
        <MyInput style="width: 50%" v-model="formData.username"></MyInput>
      </MyFormItem>
      <MyFormItem label="password" prop="password">
        <MyInput type="password" style="width: 50%" v-model="formData.password"></MyInput>
      </MyFormItem>
      <MyFormItem label="sex">
        <MyRadioGroup v-model="formData.sex">
          <MyRadio label="0">男</MyRadio>
          <MyRadio label="1">女</MyRadio>
        </MyRadioGroup>
      </MyFormItem>
      <MyFormItem label="hobbies">
        <MyCheckBoxGroup v-model="formData.hobbies">
          <MyCheckBox label="0">王者</MyCheckBox>
          <MyCheckBox label="1">吃鸡</MyCheckBox>
          <MyCheckBox label="2">撩妹</MyCheckBox>
        </MyCheckBoxGroup>
      </MyFormItem>
      <MyFormItem label="isSingle">
        <MySwitch v-model="formData.single"></MySwitch>
      </MyFormItem>
      <MyFormItem>
        <MyButton @click="showData">看值</MyButton>
      </MyFormItem>
    </MyForm>
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
      // isChecked: false,
      // selectDream: []
      formData: {
        username: '',
        password: '',
        sex: '0',
        hobbies: [],
        single: true
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 2, max: 6, message: '用户名长度为2到6字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 12, message: '密码长度为6到12字符' }
        ]
      }
    }
  },
  methods: {
    showData () {
      console.log(this.formData)
    }
  }
}
</script>

<style lang="scss">
</style>
