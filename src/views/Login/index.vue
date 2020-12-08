<template>
  <div class="outer">
    <div class="box">
      <div class="login">
        <div class="cont">
          <div class="loginType">
            <a href="###">扫码登录</a>
            <a href="###">账户登录</a>
          </div>
          <ValidationProvider
            rules="requiredLogin|phoneLength"
            v-slot="{ errors }"
          >
            <div class="phone">
              <i class="iconfont icon-mima"></i>
              <input
                type="text"
                placeholder="请输入手机号"
                v-model="userPhone"
              />
            </div>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider rules="requiredLogin" v-slot="{ errors }">
            <div class="password">
              <i class="iconfont icon-shoujihao"></i>
              <input
                type="password"
                placeholder="请输入密码"
                v-model="userPassword"
              />
            </div>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
          <div class="other">
            <label
              ><input type="checkbox" @click="setSave" />1小时内免登录</label
            >
            <a href="###">忘记密码？</a>
          </div>
          <button @click="userLogin">登&nbsp;录</button>
          <div class="toRegister">
            <router-link to="/register">没有账号？立即注册</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("requiredLogin", {
  ...required,
  message: "此项不能为空",
});
extend("phoneLength", {
  validate(value) {
    return value.length === 11;
  },
  message: "请输入十一位手机号",
});
export default {
  name: "Login",
  data() {
    return {
      userPhone: "",
      userPassword: "",
    };
  },
  computed: {
    ...mapState({
      isSaveUser: (state) => state.login.isSaveUser,
    }),
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["SET_SAVE_USER"]),
    async userLogin() {
      const { userPhone, userPassword } = this;
      const result = await this.login({ userPhone, userPassword });
      //判断登录是否成功
      if (result.code === 200) {
        const { nickName, name, token } = result.data;
        //判断是否勾选免密登录
        if (this.isSaveUser) {
          //设置cookie保存用户登录信息
          document.cookie = `nickName=${nickName};max-age=3600`;
          document.cookie = `name=${name};max-age=3600`;
          document.cookie = `token=${token};max-age=3600`;
        } else {
          //使用sessionStorage保存
          sessionStorage.setItem("nickName", nickName);
          sessionStorage.setItem("name", name);
          sessionStorage.setItem("token", token);
        }
        this.$router.push("/");
      }
    },
    setSave() {
      this.SET_SAVE_USER();
    },
  },
  components: {
    ValidationProvider,
  },
};
</script>

<style lang="less" scoped>
.error{
  color:red;
  font-size:14px;
  margin: 0 50px;
}
a {
  text-decoration: none;
}
.outer {
  background-color: rgb(233, 56, 84);
  height: 487px;
}
.box {
  background: url("./images/loginbg.png") no-repeat;
  width: 1200px;
  height: 487px;
  margin: 0 auto;
}
.login {
  width: 380px;
  height: 366px;
  background-color: #fff;
  float: right;
  margin: 40px 0;
  padding: 20px;
}
.cont {
  border: 1px solid rgba(119, 119, 119, 0.322);
  width: 100%;
  height: 100%;
}
.loginType a {
  box-sizing: border-box;
  display: inline-block;
  border-bottom: 1px solid rgba(119, 119, 119, 0.322);
  width: 190px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
}
.loginType a:hover {
  color: rgb(79, 76, 212) !important;
}
.loginType a:nth-child(2) {
  border-left: 1px solid rgba(119, 119, 119, 0.322);
  color: #e1251b;
  border-bottom: none;
  border-top: 1px solid blue;
}
div[class="phone"],
div[class="password"] {
  width: 340px;
  height: 32px;
  margin: 20px auto;
}
i {
  border-left: 1px solid rgba(119, 119, 119, 0.322);
  border-top: 1px solid rgba(119, 119, 119, 0.322);
  border-bottom: 1px solid rgba(119, 119, 119, 0.322);
  width: 37px;
  height: 30px;
  border-radius: 2px;
  text-align: center;
  line-height: 32px;
  float: left;
  color: #e1251b;
  font-size: 20px;
}
input[type="text"],
input[type="password"] {
  border: 1px solid rgba(119, 119, 119, 0.322);
  height: 32px;
  width: 302px;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  font-size: 16px;
}
.other {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}
button {
  margin: 0 20px;
  width: 342px;
  height: 36px;
  color: #fff;
  background-color: #e1251b;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}
.toRegister {
  float: right;
  padding: 20px;
}
.toRegister a {
  color: black;
  font-size: 14px;
}
.toRegister a:hover {
  color: blue;
  text-decoration: underline;
}
</style>
