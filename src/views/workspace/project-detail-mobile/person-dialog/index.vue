<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}
.person-dialog {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(29, 33, 41, 0.8);
  z-index: 999;
}
.user-none {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: pvw(136);
  margin-bottom: pvw(34.33);
}

.user-has {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: pvw(136);
  margin-bottom: pvw(36.33);
}

.close {
  width: pvw(33.33);
  height: pvw(33.33);
  margin: 0 auto;
  display: block;
}
</style>

<template>
  <div class="person-dialog" v-if="visible">
    <!-- 无信息 -->
    <div class="user-none" v-if="isShowNone">
      <img src="@/assets/images/user-null.png" alt="" />
    </div>

    <div class="user-has" v-else>
      <person-card-mobile :userInfo="userInfo"></person-card-mobile>
    </div>

    <!-- 关闭 -->
    <img
      class="close"
      @click="visible = false"
      src="@/assets/images/close-white.png"
      alt=""
    />
    
  </div>
</template>

<script>
export default {
    data(){
        return{
            visible:false,
            userInfo:{
                   user_pic:"https://img0.baidu.com/it/u=2414844760,2554688293&fm=253&fmt=auto&app=138&f=JPEG?w=310&h=310",
                job:"开发",
                realName:"yym",
                company:"无锡梦途视觉科技有限公司",
                userName:'13222874306'
            }
        }
    },
    computed:{
        isShowNone(){
        return this.userInfo.job===undefined || this.userInfo.job===null;
        }
    },
    methods:{
        open(info){
            this.userInfo=info
            this.visible=true
        }
    },
}
</script>