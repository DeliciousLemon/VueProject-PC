<template>
  <div>
    请输入手机号<input type="text" v-model="phone" /> 请输入密码<input
      type="password"
      v-model="password"
    />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import { userLogin } from "@api/login.js";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      userLogin(this.phone, this.password)
        .then((value) => {
          console.log(value);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
