<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365*100+vw
}
.page-4-2{
    width: 100%;
}
.main {
  width: 100%;
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
    <div class="page-4-2 page-child-classify">
        <div class="page-child-classify-title">2.国内运输
</div>
        <div class="main">
                <img src="@/assets/images/workspace/empty.png" style="width:100%" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>