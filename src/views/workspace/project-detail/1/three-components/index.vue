<template>
  <div class="three-scene" ref="three-scene" onselectstart="return false;">
    <div
      @pointerdown="
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        }
      "
      class="btn"
    >
      <div class="watch-cards" style="display: none;">
        <div class="cards-top">
          <div class="cards-left">
            <div class="iconfont"></div>
          </div>
          <div class="cards-right">
            <div class="txt">
              [ 逆变器 ] 550 kW
            </div>
          </div>
        </div>
        <div class="cards-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Change from "./Change";
import Engine from "run-scene-v2";
const { RunScene, Utils } = Engine;
let scene = null;
export default {
  props: {
    isFullScreen: {
      type: Boolean,
    },
    tableData: {
      type: Array,
    },
  },
  watch: {
    isFullScreen() {
      // 自适应
      this.resize();
    },
    tableData() {
      this.change && this.change.resolveJson.init(this.tableData);
      // console.log("传输的信息:", this.tableData);
      // immediate: true;
    },
  },
  data() {
    return {
      change: null,
    };
  },
  mounted() {
    // 加载场景
    this.loadScene();

    // 场景 自适应
    window.addEventListener("resize", this.resize);
  },
  methods: {
    // 加载场景
    loadScene() {
      scene = new RunScene({
        render2: true,
        render3: true,
        renderConfig: {
          // 是否允许设置模型位置后自动渲染最新效果
          matrixAutoUpdate: true,
          scriptFrame: 60,
          event: {
            ignores: ["resize"],
          },
        },
        static: false,
      }).load({
        path:
          // "https://test2-1303915342.cos.ap-shanghai.myqcloud.com/guang_fu/s.glb",
          // "http://192.168.3.8:8080/file?path=project/linkpoint/&key=202309051046153290651001202376",
          "./assets/s.lt",
        dom: this.$refs["three-scene"],
      });

      this.change = new Change(scene, this.onDone);

      return;

      this.runScene = new RunScene({
        // path: "./assets/shit.glb",
        path:
          "https://test2-1303915342.cos.ap-shanghai.myqcloud.com/guang_fu/s.glb",
        rootDom: this.$refs["three-scene"],
        options: {
          // mode: "editor",
          // notTexture: true,
          // render2: true,
          render3: true,
          renderMode: "controlsChange",
        },
        // controlsUpdate: false,
        loadConfig: {
          // reverseTexture: true,
        },
      });
      this.runScene.on("complete", () => {
        const m = this.runScene.modelEx.getModel("Plane");
        console.log(m, this.runScene.assetsEx.scene, "m");
      });
      this.change = new Change(this.runScene, this.onDone);
      this.change && this.change.resolveJson.init(this.tableData);
    },
    // 自适应
    resize(x, runScene) {
      console.log("自适应-自适应");
      const { width, height } = document
        .querySelector(".three-scene")
        .getBoundingClientRect();
      scene.setSize(width, height);
    },
    onDone() {
      // this.change.resolveJson.init([
      //   { id: 1, name: "逆变器GSE0100T", num: 2, remake: "", select: true },
      //   { id: 2, name: "电池模组 0.5C", num: 20, remake: "", select: true },
      //   { id: 3, name: "支架", num: 4, remake: "", select: true },
      //   { id: 4, name: "高压盒", num: 4, remake: "", select: true },
      //   { id: 5, name: "汇流柜", num: 1, remake: "", select: true },
      //   { id: 6, name: "BMS操作系统", num: 1, remake: "", select: true },
      //   { id: 7, name: "20尺集装箱", num: 1, remake: "", select: false },
      //   { id: 7.1, name: "空调系统", pid: 7, remake: "" },
      //   { id: 7.2, name: "消费系统", pid: 7, remake: "" },
      //   { id: 8, name: "运输费用", remake: "", select: false },
      //   { id: 9, name: "测试安装", remake: "", select: false },
      // ]);
    },
  },
  // 销毁
  destroyed() {
    this.runScene && this.runScene.dispose();
  },
};
</script>

<style scoped>
.three-scene {
  width: 100%;
  height: 100%;
  position: relative;

  .btn {
    z-index: 3;
  }
  .tips-sprite {
    position: absolute;
    height: 4.8vh;
    width: 10.9vw;
    background-image: url("./../../../../../../public/assets/bg.png") !important;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    min-height: 50px;
    .cards-top {
      flex: 73;
      display: flex;
      .cards-left {
        z-index: 4;
        flex: 19.5;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > div {
          color: white;
          transform: scale(1.2);
        }
      }

      .cards-right {
        flex: 80.5;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .txt {
          color: #072ca6;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }

    .cards-bottom {
      flex: 28;
    }
  }
  .machineBorder {
    width: 211px;
    height: 52px;
    position: absolute;
  }
}
</style>
