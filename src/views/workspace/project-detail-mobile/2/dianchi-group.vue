<style lang="scss" scoped>
.main {
  width: 100%;
  margin-top: 100px;
}
.sub-title {
  font-size: 14px;
  color: #4e5969;
}

</style>

<template>
  <div class="">
 
        <!-- 主体 -->
    
        <!-- 详情 -->
       <div class="mi-custom-table">
          <!-- 详情 -->
          <!-- <div class="custom-table-detail"> -->
          <div class="custom-table-detail-left">
            <img :src="getDetailJson['图片']" alt="" />
          </div>
          <div class="custom-table-detail-main">
            <!-- 主体 -->
            <div class="name">
              {{ getDetailJson["品牌"] }} {{ getDetailJson["型号"] }}
            </div>

            <div class="cards">
              <div class="cards-1">品牌认证</div>
              <div class="cards-2">电池簇</div>
            </div>

            <div class="custom-table-detail-main-row size">
              <div>
                {{ getDetailJson["最大尺寸"] }}/{{ getDetailJson["重量"] }}
              </div>
            </div>

            <div class="custom-table-detail-main-row">
              <div>标称能量:</div>
              <div>{{ getDetailJson["标称能量"] }}</div>
            </div>


    <div class="custom-table-detail-main-row">
              <div>标称电压:</div>
              <div>{{ getDetailJson["标称电压"] }}</div>
            </div>
            <div class="detail-data" @click="openDialog">
              详细参数
              <div class="icon el-icon-arrow-right"></div>
            </div>
           

          </div>
          <!-- </div> -->
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