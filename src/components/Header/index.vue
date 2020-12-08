<template>
  <div>
    <!-- header上部分 -->
    <div class="header-top">
      <div class="header-top-content">
        <!-- 注册登录 -->
        <div class="header-top-left" v-if="!userName">
          尚品汇欢迎您！
          <span>请</span>
          <router-link to="/login">登录</router-link>
          <router-link to="/register">免费注册</router-link>
        </div>
        <div class="logged" v-else>
          尚品汇欢迎您！
          <span>{{ userName }}</span>
          <a href="###" @click="outlogin">退出登录</a>
        </div>
        <!-- 导航栏li -->
        <ul class="header-top-right">
          <li>
            <a href="###">我的订单</a>
          </li>
          <li>
            <router-link to="/mycart">我的购物车</router-link>
          </li>
          <li>
            <a href="###">我的尚品汇</a>
          </li>
          <li>
            <a href="###">尚品汇会员</a>
          </li>
          <li>
            <a href="###">企业采购</a>
          </li>
          <li>
            <a href="###">关注尚品汇</a>
          </li>
          <li>
            <a href="###">合作招商</a>
          </li>
          <li>
            <a href="###">商家后台</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- header下部分 -->
    <div class="header-bottom">
      <!-- 尚品汇logo -->
      <div>
        <router-link to="/">
          <img src="./images/logo.png" alt="尚品汇logo" />
        </router-link>
      </div>
      <!-- 搜索框 -->
      <div class="header-bottom-search">
        <input type="text" v-model="searchText" />
        <button @click="search">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapState({
      userName: (state) => state.login.userName,
    }),
  },
  methods: {
    ...mapMutations(["OUT_LOGIN"]),
    search() {
      /*       this.$router.push(
        `/search${this.searchText ? "/" + this.searchText : ""}`
      ); */
      const localtion = {
        name: "search",
      };
      if (this.searchText) {
        localtion.params = {
          searchText: this.searchText,
        };
      }
      this.$route.name === "search"
        ? this.$router.replace(localtion)
        : this.$router.push(localtion);
    },
    outlogin() {
      this.OUT_LOGIN();
      //清除cookie
      document.cookie = `nickName=;max-age=-1`;
      document.cookie = `name=;max-age=-1`;
      document.cookie = `token=;max-age=-1`;
      //清除sessionStorage
      sessionStorage.removeItem("nickName");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("token");
      this.$router.replace("/")
    },
  },
  mounted() {
    this.$bus.$on("clearKeyword", () => {
      this.searchText = "";
    });
  },
};
</script>

<style lang="less" scoped>
.header-top {
  min-width: 1200px;
  background-color: rgb(234, 234, 234);
}
.header-top a:hover {
  color: rgb(12, 178, 243);
}
.header-top-content {
  width: 1200px;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logged {
  font-size: 14px;
}
.logged span {
  margin: 0 10px;
}
.logged a {
  text-decoration: none;
  color: #777;
}
.header-top-left {
  font-size: 14px;
}
.header-top-left span {
  margin-left: 10px;
}
.header-top-left a {
  color: rgb(102, 102, 102);
  text-decoration: none;
}
.header-top-left a:nth-of-type(1) {
  padding-right: 6px;
  border-right: 1px solid rgb(179, 174, 174);
}
.header-top-left a:nth-of-type(2) {
  margin-left: 6px;
}
.header-top-right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 600px;
  font-size: 12px;
}
.header-top-right li {
  height: 20px;
  line-height: 20px;
}
.header-top-right li:nth-child(n + 2) {
  border-left: 1px solid rgb(179, 174, 174);
  padding-left: 10px;
}

.header-top-right a {
  text-decoration: none;
  color: rgb(102, 102, 102);
}
.header-bottom {
  width: 1200px;
  height: 67px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-bottom-search {
  align-self: flex-end;
}
.header-bottom-search input {
  width: 490px;
  height: 32px;
  border: 2px solid rgb(234, 74, 54);
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  padding: 0 4px;
  float: left;
}
.header-bottom-search button {
  width: 68px;
  height: 32px;
  border: none;
  background-color: rgb(234, 74, 54);
  color: white;
  outline: none;
  cursor: pointer;
}
</style>
