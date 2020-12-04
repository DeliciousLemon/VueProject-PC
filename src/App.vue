<template>
  <div class="box">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapState({
      userToken: (state) => state.login.userToken,
      isSaveUser: (state) => state.login.isSaveUser,
    }),
  },
  methods: {
    ...mapMutations(["LOGIN", "OUT_LOGIN"]),
    //验证用户登录状态
    isLogin() {
      //判断是否有用户数据
      if (!this.userToken) {
        //如果没有选择自动登录，并且没有cookie数据，那么就处理sessionStorage
        if (!this.isSaveUser && !document.cookie) {
          const nickName = sessionStorage.getItem("nickName");
          const name = sessionStorage.getItem("name");
          const token = sessionStorage.getItem("token");
          this.LOGIN({ nickName, name, token });
        } else {
          //cookie是否保存有token
          if (document.cookie.includes("token")) {
            const nickName = document.cookie.split(";")[0].split("=")[1];
            const name = document.cookie.split(";")[1].split("=")[1];
            const token = document.cookie.split(";")[2].split("=")[1];
            this.LOGIN({ nickName, name, token });
          }
        }
      }
      //勾选免密登录时
      if (this.isSaveUser) {
        //判断cookie是否过期
        if (!document.cookie) {
          this.OUT_LOGIN();
        }
      }
    },
  },
  watch: {
    $route() {
      this.isLogin();
    },
  },
  mounted() {
    this.isLogin();
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
