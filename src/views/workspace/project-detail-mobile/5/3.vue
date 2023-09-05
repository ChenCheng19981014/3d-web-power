<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365*100+vw
}
.page-5-3{
    width: 100%;
}

.main {
  width: 100%;
  margin-bottom: pvw(16);
}

.page-child-classify-title {
  font-size: pvw(14);
  margin-bottom: pvw(8);
}

.tips-items {
  padding-left: 20px;
  padding-right: 20px;
  font-size: pvw(14);
  color: #4e5969;
  line-height: pvw(22);
  margin-bottom: pvw(12);
  position: relative;
  padding-left: pvw(24);
}

.tips-items:before {
  content: "";
  width: pvw(5);
  margin-right: pvw(5);
  height: pvw(5);
  float: left;
  background: #4e5969;
  border-radius: 50%;
  position: absolute;
  left: pvw(8);
  top: pvw(8);
}
</style>

<template>
    <div class="page-5-3 page-child-classify">
        <div class="page-child-classify-title">3.运输贮存


</div>
        <div class="main">
            <div class="tips-items" >若预计将电池存放30天以上的，应将SOC调整为40%±10%，三个月须进行一次满充放电。</div>
            <div class="tips-items" >设备应储存在阴凉干燥处。</div>
            <div class="tips-items"  v-if="false">运输时应做好防尘防雨等防护措施，并做好货物的摆放及固定，防止产生冲击及散落情况。</div>
            <div class="tips-items"  v-if="false">装卸货物建议使用叉车，并由专业人员进行装卸操作。</div>
            <div class="tips-items"  v-if="false">应按照外包装标识要求，禁止淋雨、暴晒、翻转、踩踏等。</div>
            <div class="tips-items"  v-if="false">贮存环境温度应在-30℃~45℃之间，湿度应在5%～95%，无凝露。</div>
            <div class="tips-items"  v-if="false">不得以任何方式擅自拆解系统相关装置、电池簇、电池模组及电池。</div>
            <div class="tips-items"  v-if="false">带包装卸货贮存时应注意产品编号顺序，建议按编号集中贮存，以方便安装。</div>
            <div class="tips-items"  v-if="false">到货后请立即进行货物验收。</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>