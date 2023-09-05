<style lang="scss" scoped>
.page-1-2 {
  width: 100%;
}

.main {
  width: 100%;
  height: 400px;

  .none-scene {
    width: 100%;
    height: 384px;
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
      right: 16px;
      bottom: 16px;

      .el-icon-full-screen {
        margin-right: 9px;
      }

      border: 1px solid rgba(134, 144, 156, 1);
      border-radius: 4px;
      font-size: 14px;
      color: rgba(134, 144, 156, 1);

      height: 32px;
      padding-left: 12px;
      padding-right: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

}
</style>

<template>
  <div class="page-1-2 page-child-classify">
    <div class="page-child-classify-title">1.2 场景展示</div>
    <div class="main" id="mains">
      <div class="none-scene" v-show="!visible"></div>
      <div
          class="scene"
          id="scene-move"
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
import ThreeScene from "../1/three-components/index.vue";

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
  watch: {
    isFullScreen() {
      // console.log(1);
      if (this.isFullScreen) {
        document.body.appendChild(document.getElementById('scene-move'))
      } else {
        document.getElementById('mains').appendChild(document.getElementById('scene-move'))
      }
    }
  },

  methods: {
    loadData(data) {
      // console.log('data',data);
      this.visible = true;
      this.tableData = data.filter(e => {
        return e.select;
      })
    },
  },
  created() {
    // this.loadData();
    if (this.detail?.form?.form_json) {
      this.visible = true;
      this.tableData = JSON.parse(this.detail?.form?.form_json).filter(e => {
        return e.select === true;
      });
    }
  },
};
</script>
