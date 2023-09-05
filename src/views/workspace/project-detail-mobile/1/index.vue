<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}

.page-1 {
  position: relative;
  overflow: hidden;
  .selection1 {
    width: 100%;
    height: pvw(176);
    background: linear-gradient(99.57deg, #16abff 0%, #165dff 100%);
    position: absolute;
    top: 0;
  }

  .selection2 {
    width: 100%;
    height: pvw(285);
    background: #165dff;
    position: absolute;
    top: pvw(176);
  }
}
</style>


<template>
  <div class="page-1 page-classify">
    <div class="selection1"></div>
    <div class="selection2"></div>
    <component
      :detail="detail"
      :ref="item.component"
      :programme="programme.programme"
      :isShare="isShare"
      v-for="(item, index) of pages"
      :key="index"
      :is="item.component"
      v-show="item.disabled !== true"
    ></component>
  </div>
</template>

<script>
import page1 from "./1.vue";
import page2 from "./2.vue";
export default {
  props: {
    pages: Array,
    detail: Object,
    isShare: Boolean,
    programme: Object,
  },
  components: {
    page1,
    page2,
  },
  created() {},
};
</script>

