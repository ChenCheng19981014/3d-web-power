<template>
  <div class="m-custom-table" v-if="dialogVisible">
    <div class="header">
      <div class="return" @click="dialogVisible = false">
        <div class="icon el-icon-arrow-left"></div>
        返回
      </div>
      <div class="title">单电池簇详细参数</div>
    </div>

    <!-- 详情 -->
    <div class="custom-table-detail">
      <div class="name">
        {{ getDetailJson["品牌"] }} {{ getDetailJson["型号"] }}
      </div>
      <div class="cards">
        <div class="cards-1">品牌认证</div>
        <div class="cards-2">电池簇</div>
      </div>
      <div class="img">
        <img :src="getDetailJson['图片']" alt="" />
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
          <div>标称/工作电压</div>
          <div>
            {{ getDetailJson["标称电压"] }}/{{ getDetailJson["工作电压范围"] }}
          </div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>工作电压范围</div>
          <div>{{ getDetailJson["工作电压范围"] }}</div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>最大持续充电/放电倍率</div>
          <div>
            {{ getDetailJson["最大持续充电倍率"] }}/{{
              getDetailJson["最大持续放电倍率"]
            }}
          </div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>单体最大/最小充电电压</div>
          <div>
            {{ getDetailJson["单体最大充电电压"] }}/{{
              getDetailJson["单体最小充电电压"]
            }}
          </div>
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
          <div>充电/放电低温保护</div>
          <div>
            {{ getDetailJson["充电低温保护"] }}/{{
              getDetailJson["放点低温保护"]
            }}
          </div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>尺寸</div>
          <div>{{ getDetailJson["最大尺寸"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>重量</div>
          <div>{{ getDetailJson["重量"] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
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
