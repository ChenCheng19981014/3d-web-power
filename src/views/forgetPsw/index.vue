<template>
  <div class="setting">
    <div class="setting-top">
      <img src="@/assets/images/workspace/logo.png" alt="" class="logo" />
    </div>
    <div class="breadcrumb">
      <span @click="back" style="cursor: pointer;">
        <span class="el-icon-arrow-left backicon"></span>
        <span>返回</span>
      </span>

      <div class="splitLine"></div>
      <span class="setting-name">忘记密码</span>
    </div>
    <div class="container">
      <div class="formContent">
        <div class="title">忘记密码</div>
        <el-form :model="form" :rules="rules" ref="ruleForm">
          <div class="input-item">
            <div class="label">
              手机号<span style="color: #165DFF;">*</span>
            </div>
            <el-form-item prop="username">
              <el-input
                v-model="form.username"
                placeholder="请输入你的手机号"
              ></el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <div class="label">
              验证码<span style="color: #165DFF;">*</span>
            </div>
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
            <div class="label">
              新密码<span style="color: #165DFF;">*</span>
            </div>
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
                      @click="changeShowPsw"
                    >
                    </i>
                  </div>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class="input-item">
            <div class="label">
              密码确认<span style="color: #165DFF;">*</span>
            </div>
            <el-form-item prop="repPassword">
              <el-input
                v-model="form.repPassword"
                placeholder="请再次输入相同的8-16位密码"
                :type="isShowRepPsw ? 'text' : 'password'"
              >
                <template slot="suffix">
                  <div class="eye-icon">
                    <i
                      class="iconfont eyestyle"
                      :class="isShowRepPsw ? 'icon-eye' : 'icon-eye-close'"
                      @click="changeShowRepPsw"
                    >
                    </i>
                  </div>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-button
          type="primary"
          class="login"
          :disabled="btnIsDiable"
          @click="login"
          >提交</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { async } from "q";
import { getResetSms, smsResetPsw } from "../../api/user";

export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        code: "",
        password: "",
        repPassword: "",
      },
      isShowRepPsw: false,
      isShowPsw: false,
      isGetCode: false,
      codeClick: "获取验证码",
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
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 8, max: 16, message: "请输入8-16位密码", trigger: "blur" },
        ],
        repPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  computed: {
    isDisable() {
      let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (phone.test(this.form.username) && this.isGetCode === false) {
        return true;
      } else {
        return false;
      }
    },
    btnIsDiable() {
      let phone = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
      if (
        phone.test(this.form.username) &&
        this.form.code !== "" &&
        this.form.password.length >= 8 &&
        this.form.password.length <= 16 &&
        this.form.password == this.form.repPassword
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    changeShowRepPsw() {
      this.isShowRepPsw = !this.isShowRepPsw;
    },
    changeShowPsw() {
      this.isShowPsw = !this.isShowPsw;
    },
    login() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let res = await smsResetPsw(this.form);
          this.$message({
            message: "重置成功",
            type: "success",
          });
          this.$router.push({ name: "login" });
        } else {
          console.log("err");
        }
      });
    },
    async getcode() {
      try {
        let res = await getResetSms(this.form);
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
    back() {
      this.$router.go(-1);
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
.setting {
  width: 100vw;
  .setting-top {
    width: 100vw;
    height: 44px;
    padding: 8px;
    img {
      width: 120px;
    }
  }
  .breadcrumb {
    margin-top: 8px;
    margin-left: 543px;
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #86909c;
    }
    .backicon {
      margin-right: 8px;
    }
    .splitLine {
      display: inline-block;
      margin: 0 8px;
      transform: rotate(20deg);
      width: 1px;
      height: 9px;
      background-color: #c9cdd4;
    }
    .setting-name {
      cursor: default;
      font-weight: 500;
      color: #1d2129;
    }
  }
  .container {
    width: 100vw;
    padding-top: 81px;
    .formContent {
      margin: 0 auto;
      width: 410px;
      .title {
        margin-bottom: 24px;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        color: #2b3674;
      }
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
          color: #4e5969;
          display: flex;
          align-items: center;
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
      .login {
        width: 100%;
        height: 50px;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        margin-top: 16px;
        border-radius: 6px;
      }
    }
  }
}
</style>
