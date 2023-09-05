<style lang="scss" scoped>
.project-share {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
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
import projectDetail from "../workspace/project-detail-mobile";
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
    if(!isMobilePhone){
      this.$router.push({
        name:"project-share",
        query:this.$route.query
      })
    }
  },
  methods: {
    async loadProject() {
      if (!this.$route.query.id) {
        return;
      }

      let { data } = await getShare(this.$route.query.id);
      this.show = true;
      data.Enable=data.programme.Enable
      data.programme=data.programme.programme
      this.$refs["projectDetail"].setDetail(data);
    },
  },
  mounted() {
    this.loadProject();
  },
};
</script>
