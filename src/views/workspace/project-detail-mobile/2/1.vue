<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}

.main {
  width: 100%;
}
</style>

<template>
  <div>
    <div class="page-2-1 page-child-classify">
      <div class="mi-page-child-classify-title">逆变器</div>
      <div class="main">
        <div class="mi-custom-table">
          <!-- 详情 -->
          <!-- <div class="custom-table-detail"> -->
          <div class="custom-table-detail-left">
            <img :src="getDetailJson['图片']" alt="" />
          </div>
          <div class="custom-table-detail-main">
            <!-- 主体 -->
            <div class="name">
              {{ getDetailJson["品牌"] }} {{ getDetailJson["型号"] }}
            </div>

            <div class="cards">
              <div class="cards-1">品牌认证</div>
              <div class="cards-2">储能逆变器</div>
            </div>

            <div class="custom-table-detail-main-row size">
              <div>
                {{ getDetailJson["尺寸"] }}/ {{ getDetailJson["重量"] }}
              </div>
            </div>

            <div class="custom-table-detail-main-row">
              <div>电池电压范围</div>
              <div>{{ getDetailJson["电池电压范围"] }}</div>
            </div>


    <div class="custom-table-detail-main-row">
              <div>额定输出功率</div>
              <div>{{ getDetailJson["额定输出功率"] }}</div>
            </div>
            <div class="detail-data" @click="openDialog">
              详细参数
              <div class="icon el-icon-arrow-right"></div>
            </div>
           

          </div>
          <!-- </div> -->
        </div>
      </div>

      <!-- 弹框 -->
      <custom-dialog ref="dialog" :detail="detail"></custom-dialog>
    </div>
  </div>
</template>



<script>
import customDialog from "./dialog-1.vue";
export default {
  props: {
    detail: Object,
  },
  computed: {
    getDetailJson() {
      return this.detail.inverter.inverter_json
        ? JSON.parse(this.detail.inverter.inverter_json)
        : {};
    },
  },
  components: {
    customDialog,
  },
  methods: {
    openDialog() {
      this.$refs["dialog"].open();
    },
  },
};
</script>