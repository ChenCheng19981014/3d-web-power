<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}
.person-dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(22, 93, 255);
  z-index: 999;
}
.user-none {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: pvw(136);
  margin-bottom: pvw(34.33);
}

.user-has {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: pvw(144);
  margin-bottom: pvw(36.33);
}

.close {
  width: pvw(33.33);
  height: pvw(33.33);
  margin: 0 auto;
  display: block;
}

.t {
  position: absolute;
  left: pvw(18);
  top: pvw(38);
}
.f {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>

<template>
  <div class="person-dialog">
    <!-- 标题 -->
    <img src="@/assets/images/user-share/share-title.png" class="t" alt="" />

    <!-- 底部 -->
    <img src="@/assets/images/user-share/share-footer.png" class="f" alt="" />

    <!-- 无信息 -->
    <div class="user-none" v-if="isShowNone">
      <img src="@/assets/images/user-null.png" alt="" />
    </div>

    <div class="user-has" v-else>
      <person-card-mobile :userInfo="userInfo"></person-card-mobile>
    </div>
  </div>
</template>

<script>
import {getUrl} from "@/api/user.js"
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  computed: {
    isShowNone() {
      return this.userInfo.job===undefined || this.userInfo.job===null;
    },
  },
  methods: {
    async loadPersonData() {
      if (!this.$route.query.id) {
        return;
      } 

      let {data}=await getUrl(this.$route.query.id)
      this.userInfo=data.user
    
    },
  },
  created() {
    //判断设备类型
    let isMobilePhone = () => {
      //判断当前设备是手机
      const ua = navigator.userAgent.toLowerCase();
      const t1 =
        /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua);
      // const t2 = !ua.match("iphone") && navigator.maxTouchPoints > 1;
      return t1;
    };

    isMobilePhone = isMobilePhone();
    if (!isMobilePhone) {
      this.$router.push({
        name: "person-pc",
        query: this.$route.query,
      });
    }

    this.loadPersonData();
  },
};
</script>