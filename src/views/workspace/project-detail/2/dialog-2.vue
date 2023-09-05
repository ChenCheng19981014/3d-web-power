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
        <div class="name">
          {{ getDetailJson["品牌"] }} {{ getDetailJson["型号"] }}
        </div>
      </div>

      <!-- 详情 -->
      <div class="custom-table-detail">
        <div class="custom-table-detail-left">
          <img :src="getDetailJson['图片']" alt="" />
          <div class="info-container">
            <div class="info-item">
              <div class="info-name">尺寸:</div>
              <div class="info-value">{{ getDetailJson["尺寸（W*D*H）"] }}</div>
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
            <div>电压/电流</div>
            <div>
              {{ getDetailJson["电池电压"] }}/{{
                getDetailJson["电池电流"]
              }}
            </div>
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
            <div class="custom-table-detail-main-row">
            <div>最大持续充电/放电倍率</div>
            <div>{{ getDetailJson["最大持续充电倍率"] }}/{{ getDetailJson["最大持续放电倍率"] }}</div>
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
            <div>单体最大充电电压</div>
            <div>{{ getDetailJson["单体最大充电电压"] }}</div>
          </div>
               <div class="custom-table-detail-main-row">
            <div>单体最小放电电压</div>
            <div>{{ getDetailJson["单体最小放电电压"] }}</div>
          </div>
               <div class="custom-table-detail-main-row">
            <div>瞬时最大充电/放电电流</div>
            <div>{{ getDetailJson["瞬时最大充电电流"] }}/{{ getDetailJson["瞬时最大放电电流"]}}</div>
          </div>

                <div class="custom-table-detail-main-row">
            <div>充电/放电低温保护</div>
            <div>{{ getDetailJson["充电低温保护"] }}/{{ getDetailJson["放电低温保护"]}}</div>
          </div>


        <div class="custom-table-detail-main-row">
            <div>充电/放电高温保护</div>
            <div>{{ getDetailJson["充电高温保护"] }}/{{ getDetailJson["放电高温保护"]}}</div>
          </div>

                          <div class="custom-table-detail-main-row">
            <div>使用环境</div>
            <div>{{ getDetailJson["使用环境"] }}</div>
          </div>

          

          
                          <div class="custom-table-detail-main-row">
            <div>储存温度范围（℃）</div>
            <div>{{ getDetailJson["储存温度范围 (℃)"] }}</div>
          </div>


          
          
                          <div class="custom-table-detail-main-row">
            <div>储存/工作环境湿度（RH）</div>
            <div>{{ getDetailJson["储存环境湿度(RH)"] }}/{{ getDetailJson["工作环境湿度(RH)"] }}</div>
          </div>

          
          
                          <div class="custom-table-detail-main-row">
            <div>工作效率</div>
            <div>{{ getDetailJson["工作效率"] }}</div>
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
  computed: {
    getDetailJson() {
      return this.detail.battery.battery_json
        ? JSON.parse(this.detail.battery.battery_json)
        : {};
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
  },
};
</script>
