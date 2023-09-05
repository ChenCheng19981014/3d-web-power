<style lang="scss" scoped>

.main {
  width: 100%;
}
</style>

<template>
<div>
  <div class="page-2-1 page-child-classify">
   

    <div class="page-child-classify-title">2.1 逆变器</div>
    <div class="main">
      <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">{{getDetailJson['品牌']}} {{getDetailJson['型号']}} </div>
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
                <div class="info-value">{{getDetailJson['尺寸']}}</div>
              </div>
              <div class="info-item">
                <div class="info-name">重量:</div>
                <div class="info-value">{{getDetailJson['重量']}}</div>
              </div>
            </div>
          </div>
          <div class="custom-table-detail-main">
            <div class="custom-table-detail-main-row-title">直流侧参数</div>
            <div class="custom-table-detail-main-row">
              <div>电池电压范围</div>
              <div>{{getDetailJson['电池电压范围']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大直流电流/功率</div>
              <div>{{getDetailJson['最大直流电流']}}/{{getDetailJson['最大直流电流']}}</div>
            </div>

            <div class="custom-table-detail-main-row-title">
              交流侧参数 (并网)
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定电压</div>
              <div>{{getDetailJson['额定电压(并网)']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大输出电流/功率</div>
              <div>{{getDetailJson['最大输出电流(并网)']}}/{{getDetailJson['最大输出功率(并网)']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定频率</div>
              <div>{{getDetailJson['额定频率(并网)']}}</div>
            </div>

            <div class="custom-table-detail-main-row-title">其他</div>
            <div class="custom-table-detail-main-row">
              <div>隔离方式</div>
              <div>{{getDetailJson['隔离方式']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>防护等级</div>
              <div>{{getDetailJson['防护等级']}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 弹框 -->
    <custom-dialog  ref="dialog" :detail="detail"></custom-dialog>
  </div>
</div>
</template>



<script>
import customDialog from "./dialog-1.vue"
export default {
  props:{
    detail:Object
  },
  computed:{
     getDetailJson(){
      
      return this.detail.inverter.inverter_json?JSON.parse(this.detail.inverter.inverter_json):{}

    }
  },
  components:{
    customDialog,
  },
  methods:{
    openDialog(){
      this.$refs['dialog'].open()
    }
  }
};
</script>