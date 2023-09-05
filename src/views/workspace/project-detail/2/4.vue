<style lang="scss" scoped>

.main {
  width: 100%;
}
</style>

<template>
  <div class="page-2-4 page-child-classify">
    <!-- <div class="page-child-classify-title">2.4 隔离变压器</div> -->
    <div class="c-title" style="margin-top:32px;margin-bottom:24px">隔离变压器</div>
    <div class="main">
      <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">海基 HJESLFP-76120</div>
          <div class="button" @click="openDialog">
            <div>详细参数</div>
            <el-icon class="el-icon-arrow-right"></el-icon>
          </div>
        </div>

        <!-- 详情 -->
        <div class="custom-table-detail">
          <div class="custom-table-detail-left">
            <img src="@/assets/images/workspace/project.png" alt="" />
            <div class="info-container">
              <div class="info-item">
                <div class="info-name">尺寸:</div>
                <div class="info-value">527*677*202mm</div>
              </div>
              <div class="info-item">
                <div class="info-name">重量:</div>
                <div class="info-value">85kg</div>
              </div>
            </div>
          </div>
          <div class="custom-table-detail-main">
            <div class="custom-table-detail-main-row-title">直流測参数</div>
            <div class="custom-table-detail-main-row">
              <div>电池电压范围</div>
              <div>460～850Vdc</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大直流电流/功率</div>
              <div>1226A/550kW</div>
            </div>

            <div class="custom-table-detail-main-row-title">
              交流測参数 (并网)
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定电压</div>
              <div>400Vac (-20%～+15%), 3W+N+PE</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大输出电流/功率</div>
              <div>794A/550kVA</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定频率</div>
              <div>50/60Hz (±5Hz)</div>
            </div>

            <div class="custom-table-detail-main-row-title">其他</div>
            <div class="custom-table-detail-main-row">
              <div>隔离方式</div>
              <div>内置变压器</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>防水等级</div>
              <div>IP21</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <custom-dialog  ref="dialog" :detail="detail"></custom-dialog>
  </div>
</template>



<script>
import customDialog from "./dialog-4.vue"
export default {
  props:{
    detail:Object
  },
  components:{
    customDialog
  },
  methods:{
    openDialog(){
      this.$refs['dialog'].open()
    }
  }
};
</script>