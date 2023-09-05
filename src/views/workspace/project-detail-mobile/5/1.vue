<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}
.page-5-1 {
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
  <div class="page-5-1 page-child-classify">
    <div class="page-child-classify-title">1.使用与维护</div>
    <div class="main">
      <div class="tips-items">
        当电池的容量小于等于设计容量时，建议停止使用，并关闭整体设备。
      </div>
      <div class="tips-items">
        系统设计中考虑到设备的散热、防水、防尘问题，满足国家有关标准规定的防水、防尘等级。
      </div>
      <div class="tips-items" v-if="false">
        在任何正常的使用情况下，设备的温度不能超过最高设定温度上限。
      </div>
      <div class="tips-items"  v-if="false">不要用超过规格要求的电流对设备进行充放电。</div>
      <div class="tips-items"  v-if="false">
        避免设备受机械振动碰撞及压力冲击，否则设备内部可能短路，产生高温或安全隐患。
      </div>
      <div class="tips-items"  v-if="false">
        禁止设备正负极短路和过充，否则强电流和高温可能导致人身伤害或者安全隐患。
      </div>
      <div class="tips-items"  v-if="false">
        避免电池到过放状态。电池单体电压低于2.3V时，电池内部可能会遭到永久性的破坏。
      </div>
      <div class="tips-items"  v-if="false">
        当电解液泄漏时，应避免皮肤和眼睛接触到电解液。如有接触，应使用大量的清水冲洗接触到区域，并向医生寻求帮助。禁止任何人和动物吞食电池任何部件或电池所含物质。
      </div>
      <div class="tips-items"  v-if="false">
        如电池正负极端子存在异物或污渍，使用前用干毛巾擦拭干净。否则电池可能产生接触不良，引起发热，产生严重安全隐患。
      </div>
      <div class="tips-items"  v-if="false">请勿将杂物插入电池组内任何部分。</div>
      <div class="tips-items"  v-if="false">
        任何设备均应在通过BMS控制的继电器之后接入，不允许任何设备在无BMS控制的情况下直接从锂电池进行取电。
      </div>
      <div class="tips-items"  v-if="false">
        电池在10%SOC状态下存储不得超过一个月，电池在20%SOC状态下存储不得超过两个月，电池在40%SOC状态下存储不得超过六个月，务必每三个月进行满充满放检测。
      </div>
      <div class="tips-items"  v-if="false">
        储能电池簇在贮存时，其电池簇应以30%-50%的荷电态贮存。%-50%的荷电态贮存。
      </div>
      <div class="tips-items"  v-if="false">
        电池簇长期不使用时，务必每三个月左右进行满充满放一次，否则用户将丧失质保的权利。
      </div>
      <div class="tips-items"  v-if="false">
        电池簇在运行或检修中，必须由专业人员及相关资质人员进行操作。
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>