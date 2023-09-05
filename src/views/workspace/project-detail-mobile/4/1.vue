<style lang="scss" scoped>

@function pvw($px) {
  @return $px/365*100+vw
}
.page-4-1 {
  width: 100%;
}
.main {
  width: 100%;
  margin-bottom: pvw(24);
}

.page-child-classify-title{
font-size: pvw(14);
margin-bottom: pvw(8);
}
.c-description{
  font-size: pvw(14);
  color: #4E5969;
  line-height: pvw(22);
  margin-bottom: pvw(16);
}
</style>

<template>
  <div class="page-4-1 page-child-classify">

    <div class="page-child-classify">
      <div class="page-child-classify-title" style="margin-bottom: 8px">
        1.电池模组包装
      </div>
      <div class="c-description">
        电池模组采用木箱包装，每个木箱内放置4个电池模组，重量约为400Kg，单个体积约为0.55m³。叉车抬起底部木托装车运输。
      </div>
      <div class="main">
          <img src="@/assets/images/workspace/empty.png" style="width:100%" alt="">

      </div>
    </div>


    
    <div class="page-child-classify">
      <div class="page-child-classify-title" style="margin-bottom: 8px">
         2. 逆变器包装
      </div>
      <div class="c-description">
逆变器采用木箱独立包装，重量约为600～2300kg，体积约为1.4~3.9m³ (根据使用逆变器型号不同)，同样使用叉车抬起木托装车运输。      </div>
      <div class="main">
          <img src="@/assets/images/workspace/empty.png" style="width:100%" alt="">

      </div>
    </div>


     <!-- <div class="page-child-classify">
      <div class="page-child-classify-title" style="margin-bottom: 8px">
       国内运输
      </div>
    
      <div class="main">
          <img src="@/assets/images/workspace/empty.png" style="width:100%" alt="">
      </div>
    </div> -->

  </div>
</template>

<script>
export default {};
</script>