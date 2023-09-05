<style lang="scss" scoped>
.project-share {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  .project-detail{
    min-width: 1150px;
  }
}
.no-data {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
  color: rgb(35, 35, 25);
  font-weight: bold;
}
</style>

<template>
  <div class="project-share workspace-1">
    <project-detail
      v-show="show"
      ref="projectDetail"
      :isShare="true"
    ></project-detail>
    <div class="no-data" v-show="!show">当前方案暂无数据</div>
  </div>
</template>

<script>
import projectDetail from "../workspace/project-detail";
import { getShare } from "@/api/programme.js";
export default {
  components: {
    projectDetail,
  },
  data() {
    return {
      show: false,
    };
  },
  created(){
     let isMobilePhone=() =>{//判断当前设备是手机
      const ua = navigator.userAgent.toLowerCase();
      const t1 = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(
          ua
      );
      // const t2 = !ua.match("iphone") && navigator.maxTouchPoints > 1;
      return t1 ;
    }

    isMobilePhone=isMobilePhone()
    if(isMobilePhone){
      this.$router.push({
        name:"project-share-mobile",
        query:this.$route.query
      })
    }
  },
  methods: {
    async loadProject() {
      if (!this.$route.query.id) {
        return;
      }
      // console.log(this.$route.query.id, '打开分享页面时，传入的数据');
      let {data} = await getShare(this.$route.query.id);
      data.Enable = data.programme.Enable;
      data.programme = data.programme.programme;
      // console.log(data, '打开分享页面后，返回的数据');
      this.show = true;
     setTimeout(() => {
        this.$refs["projectDetail"].setDetail(data);
     }, 100);
    },
  },
  mounted() {
    this.loadProject();
  },
};
</script>
