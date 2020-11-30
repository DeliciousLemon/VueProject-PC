<template>
  <div>
    请输入手机号<input type="text" v-model="phone" /> 请输入密码<input
      type="password"
      v-model="password"
    />
    <el-button @click="login">登录</el-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Login",
  computed: {
    ...mapState({
      phone: (state) => state.login.phone,
      password: (state) => state.login.password,
    }),
  },
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style lang="less" scoped>
</style>
