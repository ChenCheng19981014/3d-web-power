<template>
  <el-dialog
    title="详细参数"
    class="custom-dialog custom-info-dialog"
    :visible.sync="dialogVisible"
      modal-append-to-body
    append-to-body
  >
    <div class="custom-table">
        <!-- 主体 -->
        <div
          class="custom-table-header"
          style="background: rgba(229, 230, 235, 1)"
        >
          <div class="name">EMS能源管控系统</div>
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

          </div>
        </div>
      </div>
  </el-dialog>
</template>


<script>
export default {
  props: {
    detail: Object,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods:{
      open(){
          this.dialogVisible=true
      }
  }
};
</script>
