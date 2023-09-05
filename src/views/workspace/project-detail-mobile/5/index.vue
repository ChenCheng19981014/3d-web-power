<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365*100+vw
}
.mm-title{
  margin-top: pvw(32);
  
}
.mi{
  padding-left: pvw(20);
  padding-right: pvw(20);
  margin-top: 0;

}

.left{
  display: flex;
  align-items: center;
}

.mm-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right{
  display: flex;
  align-items: center;
  font-size: pvw(13);
  color: #3C7EFF
;
font-weight: 400;
}
.el-icon-arrow-right{
  margin-left: pvw(3);
}
</style>

<template>
  <div class="mm page-5 page-classify">
    <div class="mm-title">
     <div class="left">
       <div class="mi-title-icon"></div>
       <div class="mi-title-name">注意事项</div>
     </div>
     <div class="right">查看更多
       <div class="icon el-icon-arrow-right"></div>
     </div>
    </div>
    <div class="mi">
     <component :detail="detail" :programme="programme.programme" :isShare="isShare" v-for="(item,index) of pages" :key="index" :is="item.component" v-show="item.disabled!==true"></component>
    </div>
  </div>
</template>

<script>
import page1 from "./1.vue";
import page2 from "./2.vue";
import page3 from "./3.vue";
export default {
   props:{
           pages:Array,
        detail:Object,
        isShare:Boolean,
        programme:Object
    },
  components: {
    page1,
    page2,
    page3,
  },
};
</script>

