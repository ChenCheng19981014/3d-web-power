<template>
  <div class="loginContainer">
    <div class="loginimg">
      <img src="@/assets/login/login-bg.png" alt="" />
    </div>
    <div class="login-content">
      <div class="content-top"></div>
      <div class="subTitle">用户注册</div>
      <register-input></register-input>
    </div>
    <p class="bq">© 2022 link-power.com. Made with love by Simmmple!</p>
  </div>
</template>

<script>
import registerInput from "./registerInput/index";
export default {
  components: { registerInput },
};
</script>

<style lang="scss" scoped>
.loginContainer {
  width: 100vw;
  height: 100vh;
  .loginimg {
    // pointer-events: none;
    user-select: none;
    width: 725px;
    height: 696px;
    position: fixed;
    bottom: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-content {
    width: 100vw;
    position: fixed;
    left: 1208px;
    top: 50%;
    transform: translate(0, -50%);
    .content-top {
      background-image: url("../../assets/login/logo.png");
      background-size: cover;
      width: 276.92px;
      height: 90px;
    }
    .subTitle {
      margin-top: 32px;
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      color: #2b3674;
    }
  }
  .bq {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #a3aed0;
    position: fixed;
    right: 40px;
    bottom: 24px;
  }
}
</style>
