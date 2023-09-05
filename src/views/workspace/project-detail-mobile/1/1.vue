<style lang="scss" scoped>
@function pvw($px) {
  @return $px/365 * 100 + vw;
}

.main {
  width: 100%;
  height: pvw(197);
  border-radius: pvw(8);
  .none-scene {
    width: 100%;
    height: pvw(400);
    background-image: url("../../../../assets/images/workspace/none-scene.png");
    background-size: cover;
    background-position: center center;
  }
  .scene {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgb(239, 243, 252);

    .three-scene {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .scene-button {
      position: absolute;
      right: pvw(12);
      top: pvw(6);
      .el-icon-full-screen {
        margin-right: pvw(5);
      }
      font-size: pvw(12);
      color: rgba(134, 144, 156, 1);
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .full-screen {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
}
.mi {
  padding-bottom: 0;
  margin-top: 0;
}
</style>

<template>
  <div class="mi">
    <div class="main">
      <div class="none-scene" v-show="!visible"></div>
      <div
        class="scene"
        :class="isFullScreen ? 'full-screen' : ''"
        v-show="visible"
      >
        <!-- three-v2 -->
        <three-scene
          :isFullScreen="isFullScreen"
          :tableData="tableData"
        ></three-scene>
        <div class="scene-button" @click="isFullScreen = !isFullScreen">
          <div class="el-icon-full-screen"></div>
          <div>{{ isFullScreen ? "退出全屏" : "全屏" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThreeScene from "../../project-detail/1/three-components/index.vue";

export default {
  components: {
    ThreeScene,
  },
  props: {
    detail: Object,
  },
  data() {
    return {
      visible: false,
      isFullScreen: false,
      tableData: [], //公用相应字段
    };
  },

  methods: {
    loadData(data) {
      return;
      this.visible = true;
      this.tableData = data;
    },
  },
  created() {
    if (this.detail?.form?.form_json) {
      this.visible = true;
      this.tableData = JSON.parse(this.detail?.form?.form_json).filter((e) => {
        return e.select===true;
      });
    }
  },
};
</script>
