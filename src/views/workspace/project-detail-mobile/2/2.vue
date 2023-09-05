<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}
.main {
  width: 100%;
}

.mi-custom-table{
  margin-bottom: 0;
}
</style>

<template>
  <div class="page-2-2 page-child-classify" style="margin-top: 2.18vw">
    <div class="mi-page-child-classify-title">电池系统</div>
    <div class="subs-title">
      <span>该电池系统由</span>
      <span style="color: #1d2129; font-weight: bold">{{ getCount }}</span>
      <span> 个电池簇组成，总电量:</span>
      <span style="color: #1d2129; font-weight: bold">{{ getV1 }}kWh</span>
      <span> 个电池簇组成，总电量:</span>
      <span style="color: #1d2129; font-weight: bold">{{ getV2 }}V</span>
    </div>

    <div class="subs-title">
      单个电池簇由
      <span style="color: #1d2129; font-weight: bold">
        {{ getDetailJson["数量"] }}</span
      >个电池模组和高压盒组成，电量: 电池模组电量
      <span style="color: #1d2129; font-weight: bold">
        {{ getDetailJson["标称能量"] }}</span
      >
      ，标称电压: 模组电压
      <span style="color: #1d2129; font-weight: bold">
        {{ getDetailJson["标称电压"] }}</span
      >
    </div>

    <dianchi-group :detail="detail"></dianchi-group>

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
            <div class="cards-2">电池模组</div>
          </div>

          <div class="custom-table-detail-main-row size">
            <div>
              {{ getDetailJson["尺寸（W*D*H）"] }}/{{ getDetailJson["标称重量"] }}
            </div>
          </div>

          <div class="custom-table-detail-main-row">
            <div>标称容量:</div>
            <div>{{ getDetailJson["标称容量"] }}</div>
          </div>

          <div class="custom-table-detail-main-row">
            <div>标称能量:</div>
            <div>{{ getDetailJson["标称能量"] }}</div>
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

    <!-- <page-4></page-4> -->
  </div>
</template>



<script>
import dianchiGroup from "./dianchi-group.vue";
import customDialog from "./dialog-2.vue";
import page4 from "./4.vue";
export default {
  props: {
    detail: Object,
  },
  computed: {
    getDetailJson() {
      return this.detail.battery.battery_json
        ? JSON.parse(this.detail.battery.battery_json)
        : {};
    },
    getBJson() {
      return this.detail.battery_cluster
        ? JSON.parse(this.detail.battery_cluster)
        : {};
    },
    getCount() {
      // return this.detail.
      return JSON.parse(this.detail.form.form_json)[3].num;
    },
    getV1() {
      let value = this.getBJson["标称能量"];
      let count = this.getCount;
      if (value) {
        value = value.split("kWh")[0] * 1;
      } else {
        value = 0;
      }
      return (value * count).toFixed(2);
    },
    getV2() {
      let value = this.getBJson["标称电压"];
      let count = this.getCount;
      if (value) {
        value = value.split("V")[0] * 1;
      } else {
        value = 0;
      }
      return (value * count).toFixed(2);
    },
  },
  components: {
    customDialog,
    dianchiGroup,
    page4,
  },
  methods: {
    openDialog() {
      this.$refs["dialog"].open();
    },
  },
};
</script>