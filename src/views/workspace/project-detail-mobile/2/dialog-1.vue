<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365*100+vw
}

.img{
  img{
    width: pvw(200);
  }
}
</style>

<template>
  <div class="m-custom-table" v-if="dialogVisible">


    <div class="header">
        <div class="return" @click="dialogVisible=false">
          <div class="icon el-icon-arrow-left"></div>
          返回
        </div>
        <div class="title">逆变器详细参数</div>
      </div>



    <!-- 详情 -->
    <div class="custom-table-detail">
      <div class="custom-table-detail-main">
        <div class="name">{{getDetailJson['品牌']}} {{getDetailJson['型号']}} </div>
        <div class="cards">
          <div class="cards-1">品牌认证</div>
          <div class="cards-2">光储一体机</div>
        </div>
        <div class="img">
          <img :src="getDetailJson['图片']" alt="">
        </div>
        <div class="custom-table-detail-main-row-title nb">PV输入参数</div>
        <div class="custom-table-detail-main-row">
          <div>最大光伏输入功率/电压</div>
          <div>
            {{ getDetailJson["最大光伏输入功率(PV)"] }}/{{
              getDetailJson["最大光伏输入电压(PV)"]
            }}
          </div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>MPPT电压范围</div>
          <div>{{ getDetailJson["MPPT电压范围(PV)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row-title">直流侧参数</div>
        <div class="custom-table-detail-main-row">
          <div>电池电压范围</div>
          <div>{{ getDetailJson["电池电压范围"] }}</div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>额定输出功率</div>
          <div>{{ getDetailJson["额定输出功率"] }}</div>
        </div>

        <div class="custom-table-detail-main-row-title">交流侧参数 (并网)</div>
        <div class="custom-table-detail-main-row">
          <div>额定输出功率</div>
          <div>{{ getDetailJson["额定输出功率(并网)"] }}</div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>最大输出电流/功率</div>
          <div>
            {{ getDetailJson["最大输出电流(并网)"] }}/{{
              getDetailJson["最大输出功率(并网)"]
            }}
          </div>
        </div>
        <div class="custom-table-detail-main-row">
          <div>额定电压</div>
          <div>{{ getDetailJson["额定电压(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>电压范围</div>
          <div>{{ getDetailJson["电压范围(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>额定频率</div>
          <div>{{ getDetailJson["额定频率(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>总电流谐波失真 (THD)</div>
          <div>{{ getDetailJson["总电流谐波失真 (THD)(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>功率因数</div>
          <div>{{ getDetailJson["功率因数(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>功率因数调节范围</div>
          <div>{{ getDetailJson["功率因数调节范围(并网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row-title">交流侧参数 (离网)</div>
        <div class="custom-table-detail-main-row">
          <div>额定电压</div>
          <div>{{ getDetailJson["额定电压(离网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>输出电压失真度</div>
          <div>{{ getDetailJson["输出电压失真度(离网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>额定频率</div>
          <div>{{ getDetailJson["额定频率(离网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>带不平衡负载能力</div>
          <div>{{ getDetailJson["带不平衡负载能力(离网)"] }}</div>
        </div>

        <div class="custom-table-detail-main-row">
          <div>过载能力</div>
          <div>{{ getDetailJson["过载能力(离网)"] }}</div>
        </div>

          <div class="custom-table-detail-main-row">
          <div>尺寸</div>
          <div>{{ getDetailJson["尺寸"] }}</div>
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
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    getDetailJson() {
      return this.detail.inverter.inverter_json
        ? JSON.parse(this.detail.inverter.inverter_json)
        : {};
    },
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
  },
};
</script>
