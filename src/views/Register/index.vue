<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <ValidationProvider rules="required|phoneLength" v-slot="{ errors }">
        <div class="content">
          <label>手机号:</label>
          <input
            type="text"
            placeholder="请输入你的手机号"
            v-model="user.phone"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required|verify" v-slot="{ errors }">
        <div class="content">
          <label>验证码:</label>
          <input type="text" placeholder="请输入验证码" v-model="user.verify" />
          <img
            ref="code"
            src="http://182.92.128.115/api/user/passport/code"
            alt="code"
            @click="updateVerify"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
        <div class="content">
          <label>登录密码:</label>
          <input
            type="text"
            placeholder="请输入你的登录密码"
            v-model="user.password"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
        <div class="content">
          <label>确认密码:</label>
          <input
            type="text"
            placeholder="请输入确认密码"
            v-model="user.rePassword"
          />
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider rules="required" v-slot="{ errors }">
        <div class="controls">
          <input name="m1" type="checkbox" v-model="user.isChecked" />
          <span>同意协议并注册《尚品汇用户协议》</span>
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <div class="btn">
        <button @click="commit" :disabled="isCommit">完成注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "此项不能为空",
});
extend("phoneLength", {
  validate(value) {
    return value.length === 11;
  },
  message: "手机号长度必须为十一位",
});
extend("phoneLength", {
  validate(value) {
    return /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/.test(
      value
    );
  },
  message: "手机号不存在",
});
extend("verify", {
  validate(value) {
    return value.length === 4;
  },
  message: "验证码长度必须为四位",
});
import { mapActions, mapState } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      user: {
        phone: "14400000000",
        verify: "0000",
        password: "0",
        rePassword: "0",
        isChecked: false,
      },
    };
  },
  computed: {
    ...mapState({
      verifyUrl: (state) => state.register.verifyUrl,
    }),
    isCommit() {
      //判断所有项目是否都填写了
      if (
        !(
          this.user.phone &&
          this.user.verify &&
          this.user.password &&
          this.user.rePassword &&
          this.user.isChecked
        )
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    ...mapActions(["getVerify", "sendRegister"]),
    updateVerify(e) {
      e.target.src = "http://182.92.128.115/api/user/passport/code";
    },
    async commit() {
      //判断两次输入的密码是否一致
      if (this.user.password !== this.user.rePassword) {
        this.user.password = "";
        this.user.rePassword = "";
        alert("两次输入的密码不一致");
      }
      const phone = this.user.phone;
      const password = this.user.password;
      const code = this.user.verify;
      await this.sendRegister({ phone, password, code });
      this.$router.replace("/login")
    },
  },
  components: {
    ValidationProvider,
  },
  mounted() {
    //  this.updateVerify()
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 600px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>