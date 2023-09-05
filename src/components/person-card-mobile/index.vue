<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}

.person-card-mobile {
  width: pvw(343);
  height: pvw(198);
  background: linear-gradient(
      107.98deg,
      rgba(255, 255, 255, 0.2) 1.8%,
      rgba(239, 238, 238, 0.2) 98.87%
    ),
    #ffffff;
  /* shadow/一级下拉菜单 */

  box-shadow: 0px pvw(4) pvw(10) rgba(0, 0, 0, 0.1);
  border-radius: pvw(12);
  position: relative;
  .c2 {
    width: pvw(74);
    position: absolute;
    left: 0;
    top: 0;
  }
  .c1 {
    width: pvw(74);
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.user-cover {
  width: pvw(54);
  height: pvw(54);
  background: rgb(229, 240, 255);
  border-radius: 50%;
  position: absolute;
  left: pvw(24);
  top: pvw(36);
  background-size: cover;
}

.user-info-main {
  position: absolute;
  left: pvw(98);
  top: pvw(38);
  right: pvw(38);
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: pvw(20);
    color: #1d2129;
    margin-bottom: pvw(2);
    font-weight: bold;
  }
  .job {
    font-size: pvw(12);
    margin-bottom: pvw(22);
    color: #86909c;
  }

  .message-item {
    width: 100%;
    margin-bottom: pvw(8);
    display: flex;
    overflow: hidden;
    font-size: pvw(14);
    color: #4e5969;
    .img {
      width: pvw(12);
      height: pvw(12);
      margin-right: pvw(8);
      flex-shrink: 0;
      margin-top: pvw(4);
    }

    .img1 {
      width: pvw(9);
      height: pvw(12);
      margin-right: pvw(11);
    }
  }
}
</style>

<template>
  <div class="person-card-mobile">
    <!-- 装饰 -->
    <img src="@/assets/images/user-share/c1.png" class="c1" alt="" />
    <img src="@/assets/images/user-share/c2.png" class="c2" alt="" />

    <!-- 头像 -->
    <div
      class="user-cover"
      :style="`background-image:url(${userInfo.user_pic})`"
    ></div>

    <!-- 相信信息 -->
    <div class="user-info-main">
      <div class="name">{{ userInfo.realName }}</div>
      <div class="job">{{ userInfo.job }}</div>
      <div class="message-item">
        <img class="img" src="@/assets/images/user-share/phone.png" alt="" />
        <div class="content">{{ userInfo.mobilePhone }}</div>
      </div>

      <div class="message-item">
        <img class="img img1" src="@/assets/images/user-share/add.png" alt="" />
        <div class="content">{{ userInfo.company }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {};
  },
  name: "person-card-mobile",
};
</script>
