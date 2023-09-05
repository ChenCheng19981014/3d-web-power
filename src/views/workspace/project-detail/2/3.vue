<style lang="scss" scoped>

.main {
  width: 100%;
}
</style>

<template>
  <div class="page-2-3 page-child-classify" >
    <div class="page-child-classify-title">2.3 EMS</div>
    <div class="main">
      <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">EMS能源管控系统</div>
          <div class="button" @click="openDialog">
            <div>产品展示</div>
            <el-icon class="el-icon-arrow-right"></el-icon>
          </div>
        </div>

        <!-- 详情 -->
        <div class="custom-table-detail">
          <div class="custom-table-detail-left">
            <img src="@/assets/images/workspace/project-3.png" alt="" />
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
           
            <div class="custom-table-detail-main-row">
              <div>屏幕</div>
              <div>10.2寸</div>
            </div>

               <div class="custom-table-detail-main-row">
              <div>控制器</div>
              <div>1U19寸, 44*482.6*206.0mm</div>
            </div>

               <div class="custom-table-detail-main-row">
              <div>支持平台</div>
              <div>PC/手机/平板</div>
            </div>

               <div class="custom-table-detail-main-row">
              <div>输入电源</div>
              <div>AC220V, DC400～850V</div>
            </div>

               <div class="custom-table-detail-main-row">
              <div>存储</div>
              <div>≥100GB</div>
            </div>


               <div class="custom-table-detail-main-row">
              <div>功耗</div>
              <div>{{'<10W'}}</div>
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
import customDialog from "./dialog-3.vue"
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