<style lang="scss" scoped>
.main {
  width: 100%;
}
.sub-title {
  font-size: 14px;
  color: #4e5969;
  margin-bottom: 32px;
}
</style>

<template>
  <div class="page-2-2 page-child-classify" style="margin-top: 2.18vw">
    <div class="page-child-classify-title">2.2 电池系统</div>
    <div class="sub-title">
      该电池系统由
      <span style="color: #1d2129; font-weight: bold">{{ getCount }}</span>
      个电池簇组成，总电量:
      <span style="color: #1d2129; font-weight: bold">{{ getV1 }}kWh</span>
      ，标称电压:
      <span style="color: #1d2129; font-weight: bold">{{ getV2 }}V</span>
    </div>
    <dianchi-group :detail="detail"></dianchi-group>

    <div class="main">
      <div class="c-title" style="margin-bottom: 24px">电池模组</div>
      <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">
            {{ getDetailJson["品牌"] }} {{ getDetailJson["型号"] }}
          </div>
          <div class="button" @click="openDialog">
            <div>详细参数</div>
            <el-icon class="el-icon-arrow-right"></el-icon>
          </div>
        </div>

        <!-- 详情 -->
        <div class="custom-table-detail">
          <div class="custom-table-detail-left">
            <img :src="getDetailJson['图片']" alt="" />
            <div class="info-container">
              <div class="info-item">
                <div class="info-name">尺寸:</div>
                <div class="info-value">
                  {{ getDetailJson["尺寸（W*D*H）"] }}
                </div>
              </div>
              <div class="info-item">
                <div class="info-name">重量:</div>
                <div class="info-value">{{ getDetailJson["标称重量"] }}</div>
              </div>
            </div>
          </div>
          <div class="custom-table-detail-main">
            <div class="custom-table-detail-main-row">
              <div>标称能量</div>
              <div>{{ getDetailJson["标称能量"] }}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>标称容量</div>
              <div>{{ getDetailJson["标称容量"] }}</div>
            </div>

            <div class="custom-table-detail-main-row">
              <div>标称/工作电压</div>
              <div>
                {{ getDetailJson["标称电压"] }}/{{
                  getDetailJson["工作电压范围"]
                }}
              </div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>工作温度范围（℃）</div>
              <div>{{ getDetailJson["工作温度范围 (℃)"] }}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>防水等级</div>
              <div>{{ getDetailJson["防水等级"] }}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>循环次数</div>
              <div>{{ getDetailJson["循环次数"] }}</div>
            </div>
          </div>
        </div>
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