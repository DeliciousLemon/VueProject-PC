<template>
  <div>
    Login
    <button @click="login">登录</button>
  </div>
</template>

<script>
import {userLogin} from "@api/login.js";
export default {
  name: "Login",
  data() {
    return {
      phone: "13700000000",
      password: "111111",
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
