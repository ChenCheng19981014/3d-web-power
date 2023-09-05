<style lang="scss" scoped>
.main {
  width: 100%;
}
.sub-title {
  font-size: 14px;
  color: #4e5969;
  margin-bottom: 32px;
}
.custom-table-detail-left{
  padding: 15px 0 60px;
}
</style>

<template>
  <div class="page-2-2 page-child-classify">
    <div class="main">
      <div class="c-title">单个电池簇</div>
      <div class="c-description">
        单个电池簇由  <span style="color:#1D2129;font-weight:bold"> {{getDetailJson['数量']}}</span>个电池模组和高压盒组成，电量: 电池模组电量  <span style="color:#1D2129;font-weight:bold"> {{getDetailJson['标称能量']}}</span>
        ，标称电压: 模组电压  <span style="color:#1D2129;font-weight:bold"> {{getDetailJson['标称电压']}}</span>
      </div>
      <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">         {{getDetailJson['品牌']}} {{getDetailJson['型号']}}</div>
          <div class="button" v-if="false" @click="openDialog">
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
                  {{ getDetailJson["最大尺寸"] }}
                </div>
              </div>
              <div class="info-item">
                <div class="info-name">重量:</div>
                <div class="info-value">{{ getDetailJson["重量"] }}</div>
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
              <div>标称电压</div>
              <div>
                {{ getDetailJson["标称电压"] }}
              </div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大持续充电/放电倍率</div>
              <div>{{ getDetailJson["最大持续充电倍率"] }}/{{getDetailJson['最大持续放电倍率']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>单体最大/最小充电电压</div>
              <div>{{ getDetailJson["单体最大充电电压"] }}/{{getDetailJson['单体最小充电电压']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>绝缘标准</div>
              <div>{{ getDetailJson["绝缘标准"] }}</div>
            </div>



                <div class="custom-table-detail-main-row">
              <div>耐压标准</div>
              <div>{{ getDetailJson["耐压标准"] }}</div>
            </div>

                <div class="custom-table-detail-main-row">
              <div>放电过流保护电流</div>
              <div>{{ getDetailJson["放电过流保护电流"] }}</div>
            </div>

                <div class="custom-table-detail-main-row">
              <div>充电/放电高温保护</div>
              <div>{{ getDetailJson["充电高温保护"] }}/{{ getDetailJson["放电高温保护"] }}</div>
            </div>

                <div class="custom-table-detail-main-row">
              <div>充电/放点低温保护</div>
              <div>{{ getDetailJson["充电低温保护"] }}/{{ getDetailJson["放点低温保护"] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <custom-dialog ref="dialog" :detail="detail"></custom-dialog>
  </div>
</template>



<script>
import customDialog from "./dianchi-group-dialog.vue";
export default {
  props: {
    detail: Object,
  },
  computed: {
    getDetailJson() {
      return this.detail.battery_cluster
        ? JSON.parse(this.detail.battery_cluster)
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