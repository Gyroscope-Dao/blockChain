<script lang="ts" setup>
import LoginBackgroundVue from '../../components/background/LoginBackground.vue'
import { userLogin } from '../../api/user'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const form = reactive({
  account: 'houyi',
  password: 'hy971003',
})

const handleLogin = async () => {
  if (form.account.trim() === '' || form.password.trim() === '') {
    ElMessage({
      message: '账号密码不能为空',
      type: 'info',
    })
    return
  }
  const res = await userLogin(form.account, form.password)
  console.log(res)
}
</script>

<template>
  <div>
    <LoginBackgroundVue></LoginBackgroundVue>
    <div class="main">
      <div class="title">登录</div>
      <div class="item">
        <span>用户名：</span>
        <el-input class="el-input" v-model="form.account" placeholder="请输入账号" />
      </div>
      <div class="item">
        <span>密码：</span>
        <el-input
          class="el-input"
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>
      <div class="item" style="text-align: center; margin-top: 30px">
        <el-button
          type="primary"
          class="login-button"
          style="text-indent: 2em; letter-spacing: 2em"
          @click="handleLogin()"
          >登录</el-button
        >
      </div>
      <div class="register">
        <RouterLink to="/register"> 注册 </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 440px;
  height: 360px;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1;
  padding: 30px;
}
.title {
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}
.item {
  margin: 20px 10px;
  & > span {
    display: inline-block;
    width: 25%;
    text-align: right;
  }
}
.el-input {
  width: 60%;
}
.el-button {
  width: 60%;
}
.register {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 40px;
  height: 20px;
  transform: translate(-40px, -20px);
  color: #0d47a1;
  cursor: pointer;
}
</style>
