<template>
  <div class="loginContent">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <div class="input-item">
        <div class="label">手机号<span style="color: #165DFF;">*</span></div>
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入你的手机号"
          ></el-input>
        </el-form-item>
      </div>
      <div class="input-item">
        <div class="label">密码<span style="color: #165DFF;">*</span></div>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入8-16位密码"
            :type="isShowPsw ? 'text' : 'password'"
          >
            <template slot="suffix">
              <div class="eye-icon">
                <i
                  class="iconfont eyestyle"
                  :class="isShowPsw ? 'icon-eye' : 'icon-eye-close'"
                  @click="isShowPsw = !isShowPsw"
                >
                </i>
              </div>
            </template>
          </el-input>
        </el-form-item>
      </div>
    </el-form>

    <div class="argeeContent" v-if="false">
      <div class="agreement">
        登录即同意<span>服务协议</span>和<span>隐私政策</span>
      </div>
      <div class="remember">
        <input type="checkbox" v-model="isRem" class="rem-input" />记住密码
      </div>
    </div>

    <el-button
      type="primary"
      class="login"
      @click="login"
      :disabled="btnIsDisable"
      >登录</el-button
    >
    <div class="login-bottom" v-if="false">
      <div class="forget" @click="forgetPassword">忘记密码</div>
      <div class="line"></div>
      还没有账号？<span @click="toRegister">立即注册</span>
    </div>
  </div>
</template>

<script>
import { setCookie } from "@/lib/util/index.js";
const Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      isRem: false,
      isShowPsw: false,
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // {
          //   pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
          //   message: "手机号格式错误",
          //   trigger: "blur",
          // },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "请输入8-16位密码", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.getCookie();
  },
  computed: {
    btnIsDisable() {
      // let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (
        // phone.test(this.form.username) &&
        this.form.password.length >= 8 &&
        this.form.password.length <= 16
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    forgetPassword() {
      this.$router.push({ name: "forgetPsw" });
    },
    toRegister() {
      this.$router.push({ name: "register" });
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch("login", this.form);
          if (this.isRem) {
            let password = Base64.encode(this.form.password);
            setCookie(this.form.username, password, 7);
          } else {
            setCookie("", "", -1);
          }
        }
      });
    },
    getCookie() {
      if (document.cookie.length > 0) {
        let arr = document.cookie.split("; "); //分割成一个个独立的“key=value”的形式
        for (let i = 0; i < arr.length; i++) {
          let arr2 = arr[i].split("="); // 再次切割，arr2[0]为key值，arr2[1]为对应的value
          if (arr2[0] === "username") {
            this.form.username = arr2[1];
          } else if (arr2[0] === "password") {
            this.form.password = Base64.decode(arr2[1]); // base64解密
            this.isRem = true;
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
.input-item {
  .el-input {
    .el-input__inner {
      border-radius: 8px !important;
      height: 50px;
    }
  }
}
</style>

<style lang="scss" scoped>
.loginContent {
  width: 410px;
  padding-top: 32px;
  .input-item {
    margin-bottom: 24px;
    .label {
      font-weight: 400;
      font-size: 13px;
      line-height: 22px;
      color: #4e5969;
      margin-bottom: 12px;
    }
  }
  .argeeContent {
    display: flex;
    margin-top: 8px;
    justify-content: space-between;
    .remember {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #86909c;
      display: flex;
      align-items: center;
      .rem-input {
        margin-right: 8px;
      }
    }
  }
  .agreement {
    font-weight: 400;
    font-size: 14px;
    color: #86909c;
    span {
      color: #165dff;
      margin: 0 8px;
      cursor: pointer;
    }
  }
  .login {
    width: 100%;
    height: 50px;
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    margin-top: 16px;
    border-radius: 6px;
  }
  .login-bottom {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #86909c;
    .line {
      height: 12px;
      width: 2px;
      background-color: #c9cdd4;
      margin: 0 16px;
    }
    .forget {
      cursor: pointer;
    }
    span {
      color: #165dff;
      cursor: pointer;
    }
  }
}
</style>
