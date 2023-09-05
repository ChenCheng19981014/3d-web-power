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
      <span class="setting-name">个人设置</span>
    </div>
    <div class="card-setting-content">
      <div class="errorAlert" v-if="!$store.getters.cardState">
        <img src="@/assets/images/setting/Union.png" alt="" />
        <span>您未完善个人信息</span>
        <span style="color: rgb(134,144,156)">
          填写真实信息，【分享名片】谈单沟通一步解决</span
        >
      </div>
      <card></card>
      <div class="details">
        <DialogPerson></DialogPerson>
      </div>
    </div>
  </div>
</template>

<script>
import card from "./components/card";
import DialogPerson from "./components/dialogPerson/index.vue";
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  components: { card, DialogPerson },
};
</script>

<style lang="scss" scoped>
.setting {
  width: 100vw;
  background-color: #f4f7fe;
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
    margin-left: 373px;
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
  .card-setting-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .errorAlert {
      width: 800px;
      height: 40px;
      margin-top: 25px;
      background: #ffece8;
      border-radius: 8px;
      display: flex;
      align-items: center;
      //   padding-top: 13px;
      padding-left: 17px;
      img {
        width: 13px;
        height: 13px;
        margin-right: 9px;
      }
      span {
        font-weight: 400;
        font-size: 14px;
        color: #1d2129;
        margin-right: 9px;
      }
    }
  }
}
</style>
