<template>
  <div class="loginContainer">
    <div class="loginimg">
      <img src="@/assets/login/login-bg.png" alt="" />
    </div>
    <div class="login-content">
      <div class="content-top"></div>
      <div class="subTitle">欢迎使用 LINK-POWER</div>
      <div class="tab">
        <div
          class="item"
          v-for="(item, index) in loginList"
          :class="index === selectIndex ? 'item-select' : ''"
          @click="changeIndex(index)"
        >
          {{ item }}
        </div>
      </div>
      <component :is="nowComponent"></component>
    </div>
    <p class="bq">© 2022 link-power.com. Made with love by Simmmple!</p>
  </div>
</template>

<script>
import PasswordLogin from "./components/passwordLogin/index.vue";
import YzmLogin from "./components/yzmLogin/index.vue";
export default {
  data() {
    return {
      loginList: ["手机登录", "密码登录"],
      componentsList: ["YzmLogin", "PasswordLogin"],
      selectIndex: 1,
    };
  },
  methods: {
    changeIndex(index) {
      this.selectIndex = index;
    },
  },
  computed: {
    nowComponent() {
      return this.componentsList[this.selectIndex];
    },
  },
  components: { PasswordLogin, YzmLogin },
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
    position: fixed;
    right: 415px;
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
    .tab {
      width: 410px;
      display: flex;
      margin-top: 43px;
      border-bottom: 2px solid #e5e6eb;
      .item {
        cursor: pointer;
        font-weight: 400;
        padding-bottom: 11px;
        font-size: 20px;
        line-height: 28px;
        color: #86909c;
        margin-right: 54px;
      }
      .item-select {
        color: #4080ff;
        border-bottom: 3px solid #1875ff;
      }
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
