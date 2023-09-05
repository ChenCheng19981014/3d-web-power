<template>
  <div class="loginContent">
    <el-form :model="form" :rules="rules" ref="ruleForm">
      <div class="input-item">
        <div class="label">手机号<span style="color: #165DFF;">*</span></div>
        <el-form-item prop="username">
          <el-input
            v-model.lazy="form.username"
            placeholder="请输入你的手机号"
          ></el-input>
        </el-form-item>
      </div>
      <div class="input-item">
        <div class="label">验证码<span style="color: #165DFF;">*</span></div>
        <el-form-item prop="code">
          <el-input v-model="form.code" placeholder="短信验证码">
            <template slot="suffix">
              <div class="btn-code">
                <div class="line"></div>
                <div
                  class="get-btn"
                  @click="getcode"
                  :class="isDisable ? 'canClick' : 'noClick'"
                >
                  {{ codeClick }}
                </div>
              </div>
            </template>
          </el-input>
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
              </div> </template
          ></el-input>
        </el-form-item>
      </div>
    </el-form>

    <div class="agreement">
      <input type="checkbox" v-model="isAgree" class="agreeBox" />
      我已阅读并同意<span>服务协议</span>和<span>隐私政策</span>
    </div>
    <el-button
      type="primary"
      class="login"
      @click="register"
      :disabled="btnIsDisabled"
      >注册</el-button
    >
    <div class="login-bottom">
      我有账号 <span @click="toLogin">立即登录</span>
    </div>
  </div>
</template>

<script>
import { getRegisterCode, smsRegister } from "@/api/user";
export default {
  data() {
    return {
      form: {
        username: "",
        code: "",
        password: "",
      },
      isGetCode: false,
      isShowPsw: false,
      codeClick: "获取验证码",
      isAgree: false,
      timer: null,
      rules: {
        username: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            message: "手机号格式错误",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "请输入8-16位密码", trigger: "blur" },
        ],
      },
    };
  },
  computed: {
    btnIsDisabled() {
      let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (
        phone.test(this.form.username) &&
        this.form.code &&
        this.form.password.length >= 8 &&
        this.form.password.length <= 16 &&
        this.isAgree
      ) {
        return false;
      } else {
        return true;
      }
    },
    isDisable() {
      let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (phone.test(this.form.username) && this.isGetCode === false) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    async getcode() {
      try {
        let res = await getRegisterCode(this.form);
        this.$message({
          message: res.data,
          type: "success",
        });
        let timeOut = 60;
        this.timer = setInterval(() => {
          if (timeOut !== 0) {
            this.codeClick = `${timeOut}s`;
            this.isGetCode = true;
            timeOut--;
          } else {
            this.codeClick = `获取验证码`;
            this.isGetCode = false;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    register() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid && this.isAgree) {
          try {
            let res = await smsRegister(this.form);
            this.$message({
              message: res.data,
              type: "success",
            });
            this.$router.replace({ name: "login" });
          } catch (error) {
            console.log(error);
          }
        } else if (this.isAgree == false) {
          this.$message.error("请先阅读并同意协议");
        }
      });
    },
  },
};
</script>

<style lang="scss">
.input-item {
  .el-input {
    .el-input__inner {
      border-radius: 8px;
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
  .agreement {
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #86909c;
    margin-top: 8px;
    .agreeBox {
      margin-right: 8px;
    }
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
    width: 100%;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #86909c;
    span {
      color: #165dff;
      cursor: pointer;
    }
  }
}
.btn-code {
  width: 112px;
  height: 100%;
  display: flex;
  align-items: center;
  .line {
    width: 1px;
    height: 18px;
    background-color: #e5e6eb;
  }
  .get-btn {
    flex: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    color: #4e5969;
    justify-content: center;
    cursor: pointer;
  }
  .noClick {
    pointer-events: none;
    color: #c9cdd4;
  }
  .canClick {
    color: #4080ff;
    pointer-events: all;
  }
}
</style>
