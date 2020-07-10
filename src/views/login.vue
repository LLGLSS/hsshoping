<template>
  <div id="login">
    <div class="container">
      <div class="icon">
        <img src />
      </div>
      <input id="user" v-model="userText" class="inputtext" placeholder="请输入用户名" />
      <input id="password" v-model="pswText" class="inputtext" placeholder="请输入密码" />
      <div class="msgReg">
        <span class="msgLogin">短信验证码登录</span>
        <span class="goRegister">免费注册</span>
      </div>
      <div>
        <button id="loginBtn" class="loginBtn" @click="logined">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      userText: '',
      pswText: ''
    }
  },
  methods: {
    logined () {
    //   console.log(this.userText)
    //   console.log(this.pswText)
      axios.post('https://juejin.im/auth/type/phoneNumber').then(value => {
        console.log(value)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#login {
  .container {
    height: 100%;
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    .icon {
      width: 100%;
      height: 150px;
      /* background-color: turquoise; */
      display: flex;
      justify-content: center;
      align-items: center;
      image {
        width: 100px;
        height: 100px;
      }
    }
    .inputtext {
      font-size: 16px;
      height: 50px;
      width: 100%;
      border: 0px solid white;
      border-bottom: 1px solid #3281ff;
      margin-top: 20px;
    }
    .msgReg {
      margin-top: 20px;
      font-size: 14px;
      color: gray;
      position: relative;
      .msgLogin {
        position: absolute;
      }
      .goRegister {
        right: 0px;
        position: absolute;
      }
    }
    .loginBtn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 65px;
      background-color: #5b94f0;
      color: white;
      font-size: 20px;
      width: 150px;
      height: 50px;
      border-radius: 25px;
    }
  }
}
</style>
