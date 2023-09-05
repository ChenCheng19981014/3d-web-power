<style lang="scss" scoped>
.card-container {
  width: 364px;
  height: 210px;
  background: linear-gradient(108.26deg, #ffffff 1.37%, #f2f2f2 99.38%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  //   align-items: center
  padding-left: 126px;
  padding-top: 55px;
  //   justify-content: center;
  position: relative;
  .share {
    position: absolute;
    top: 16px;
    right: 16px;
  }
  .cover {
    width: 54px;
    height: 54px;
    position: absolute;
    left: 43px;
    top: 55px;
  }
  h3 {
    width: 222px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #1d2129;
  }
  p {
    width: 222px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 2px;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #86909c;
  }
  .card-item {
    font-weight: 400;
    font-size: 14px;
    color: #4e5969;
    margin-top: 12px;
    display: flex;
    img {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }
  .martop {
    margin-top: 30px;
  }
  .c1{
    width: 100px;
    height: 170px;
    position: absolute;
    bottom: -18px;
    left: 0;
  }
  .c2{
    width: 102px;
    height: 194px;
    position: absolute;
    top: -7px;
    left: 0;
  }
}
</style>

<template>
  <div class="card-container">
    <img src="@/assets/images/user-share/c1.png" class="c1" alt="" />
    <img src="@/assets/images/user-share/c2.png" class="c2" alt="" />
    <lp-button text="分享名片" @click.native="shareCard" width="88" class="share"></lp-button>
    <div class="cover"><user-cover-mine></user-cover-mine></div>
    <h3>{{ $store.getters.userRealName }}</h3>
    <p>{{ $store.getters.userJob2 }}</p>
    <div class="card-item martop">
      <img src="@/assets/images/setting/tel.png" alt="" />
      {{ mobilePhone }}
    </div>
    <div class="card-item">
      <img src="@/assets/images/setting/position.png" alt="" />
      {{ $store.getters.userCompany }}
    </div>
    <share-c ref="shareC"></share-c>
  </div>
</template>
<script>
import shareC from "./share.vue"
export default {
  components:{
    shareC
  },
  computed: {
    mobilePhone() {
      if (this.$store.getters.userMobilePhone) {
        return this.$store.getters.userMobilePhone.replace(
          /^(.{3})(.*)(.{4})$/,
          "$1-$2-$3"
        );
      } else {
        return "--";
      }
    },
  },
  methods:{
    shareCard(){
      this.$refs['shareC'].open()
    }
  }
};
</script>
