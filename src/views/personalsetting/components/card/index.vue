<template>
  <div class="card">
    <div class="top-content" :style="topBackGround">
      <div class="title" :style="fontColor">我的名片</div>
      <unsetting v-if="!$store.getters.cardState"></unsetting>
      <has-setting v-else></has-setting>
    </div>
    <PersonDetial></PersonDetial>
  </div>
</template>

<script>
import unsetting from "../unsetting";
import hasSetting from "../hasSetting";
import top1 from "@/assets/images/setting/topcontent.png";
import top2 from "@/assets/images/setting/topbg.png";
import top3 from "@/assets/images/setting/topContent-un.png";
import PersonDetial from "../personDetial/index.vue";
export default {
  computed: {
    topBackGround() {
      if (this.$store.getters.cardState) {
        return { "background-image": `url(${top1}),url(${top2})` };
      } else {
        return { "background-image": `url(${top3})` };
      }
    },
    fontColor() {
      if (this.$store.getters.cardState) {
        return { color: "#ffffff" };
      } else {
        return { color: "#1d2129" };
      }
    },
  },
  components: {
    unsetting,
    hasSetting,
    PersonDetial,
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: 24px;
  margin-bottom: 88px;
  width: 800px;
  height: 828px;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 18px;
  .top-content {
    width: 100%;
    height: 294px;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .title {
      cursor: default;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      position: absolute;
      top: 20px;
      left: 24px;
    }
  }
}
</style>
