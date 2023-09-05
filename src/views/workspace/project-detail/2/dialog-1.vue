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
               <div class="name">{{getDetailJson['品牌']}} {{getDetailJson['型号']}} </div>

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
             <div class="custom-table-detail-main-row-title">PV输入参数</div>
            <div class="custom-table-detail-main-row">
              <div>最大光伏输入功率/电压</div>
              <div>{{getDetailJson['最大光伏输入功率(PV)']}}/{{getDetailJson['最大光伏输入电压(PV)']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>MPPT电压范围</div>
              <div>{{getDetailJson['MPPT电压范围(PV)']}}</div>
            </div>



                   <div class="custom-table-detail-main-row-title">直流侧参数</div>
            <div class="custom-table-detail-main-row">
              <div>电池电压范围</div>
              <div>{{getDetailJson['电池电压范围']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定输出功率</div>
              <div>{{getDetailJson['额定输出功率']}}</div>
            </div>


               <div class="custom-table-detail-main-row-title">
              交流侧参数 (并网)
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定输出功率</div>
              <div>{{getDetailJson['额定输出功率(并网)']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>最大输出电流/功率</div>
              <div>{{getDetailJson['最大输出电流(并网)']}}/{{getDetailJson['最大输出功率(并网)']}}</div>
            </div>
            <div class="custom-table-detail-main-row">
              <div>额定电压</div>
              <div>{{getDetailJson['额定电压(并网)']}}</div>
            </div>


  <div class="custom-table-detail-main-row">
              <div>电压范围</div>
              <div>{{getDetailJson['电压范围(并网)']}}</div>
            </div>


                 <div class="custom-table-detail-main-row">
              <div>额定频率</div>
              <div>{{getDetailJson['额定频率(并网)']}}</div>
            </div>
          

          
        <div class="custom-table-detail-main-row">
          <div>总电流谐波失真 (THD)</div>
          <div>{{ getDetailJson["总电流谐波失真 (THD)(并网)"] }}</div>
        </div>


               <div class="custom-table-detail-main-row">
              <div>功率因数</div>
              <div>{{getDetailJson['功率因数(并网)']}}</div>
            </div>
          


               <div class="custom-table-detail-main-row">
              <div>功率因数调节范围</div>
              <div>{{getDetailJson['功率因数调节范围(并网)']}}</div>
            </div>
          
          
               <div class="custom-table-detail-main-row-title">
              交流侧参数 (离网)
            </div>
               <div class="custom-table-detail-main-row">
              <div>额定电压</div>
              <div>{{getDetailJson['额定电压(离网)']}}</div>
            </div>

               <div class="custom-table-detail-main-row">
              <div>输出电压失真度</div>
              <div>{{getDetailJson['输出电压失真度(离网)']}}</div>
            </div>
          

               <div class="custom-table-detail-main-row">
              <div>额定频率</div>
              <div>{{getDetailJson['额定频率(离网)']}}</div>
            </div>
          


               <div class="custom-table-detail-main-row">
              <div>带不平衡负载能力</div>
              <div>{{getDetailJson['带不平衡负载能力(离网)']}}</div>
            </div>
          
               <div class="custom-table-detail-main-row">
              <div>过载能力</div>
              <div>{{getDetailJson['过载能力(离网)']}}</div>
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
  computed:{
     getDetailJson(){
      
      return this.detail.inverter.inverter_json?JSON.parse(this.detail.inverter.inverter_json):{}

    }
  },
  methods:{
      open(){
          this.dialogVisible=true
      }
  }
};
</script>
