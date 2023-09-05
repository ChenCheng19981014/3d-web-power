<style lang="scss" scoped>
.header {
  flex-shrink: 0;
  .translate-container {
    font-size: 14px;
    color: rgba(29, 33, 41, 1);
    margin-right: 8px;
    display: flex;
    align-items: center;
    div {
      float: left;
      margin-right: 8px;
    }
  }
  .switch-translate {
    padding: 4px;
    font-size: 12px;
    &:hover {
      background: rgb(242, 243, 245);
      border-radius: 2px;
    }
  }
  .left {
    position: absolute;
    left: 32px;
    display: flex;
    height: 100%;
    align-items: center;
    .back-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      color: rgba(134, 144, 156, 1);
      font-size: 14px;
      .el-icon-arrow-left {
        margin-right: 5px;
      }
    }
    .line {
      height: 16px;
      width: 1px;
      background: rgba(201, 205, 212, 1);
      margin-left: 16px;
      margin-right: 12px;
    }
    .project-name {
      font-size: 14px;
      color: rgba(29, 33, 41, 1);
      width: 320px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .right {
    position: absolute;
    right: 20px;
    display: flex;
    height: 100%;
    align-items: center;
    .small {
      height: 28px;
      padding: 3px 12px;
    }
  }
}
.project-detail-main {
  display: flex;
  position: relative;
  width: 100%;
  right: 0;
  .project-detail-menu {
    margin-top: 15px;
    z-index: 888;
    position: absolute;
    margin-bottom: 30px;
    padding-right: 25px;
    left:calc( ( 100% - 680px ) / 2 - 96px - 125px );
    // margin-right: 96px;
    // transform: translateX(43px);
    border-right: 1px solid #e5e6eb;
    padding-top: 24px;
    .menu-item {
      margin-bottom: 24px;

      .menu-title {
        font-size: 14px;
        color: rgba(134, 144, 156, 1);
        margin-bottom: 16px;
      }

      .menu-title-active {
        color: rgba(22, 93, 255, 1);
        font-weight: bold;
      }
      .children-container {
        margin-left: 12px;
        border-left: 1px solid rgba(201, 205, 212, 1);
        .menu-child {
          height: 20px;
          line-height: 20px;
          text-indent: 6px;
          margin-bottom: 12px;
          font-size: 12px;
          color: rgba(134, 144, 156, 1);
          cursor: pointer;
          border-left: 2px solid transparent;
          &:hover {
            border-left: 2px solid rgba(22, 93, 255, 1);
            color: rgba(29, 33, 41, 1);
          }
        }
        .menu-child-active {
          border-left: 2px solid rgba(22, 93, 255, 1);
          color: rgba(29, 33, 41, 1);
        }
      }
    }
  }
  .project-detail-scroll-wrap {
    height: 100%;
    padding-bottom: 30px;
    ::-webkit-scrollbar {
    }
  }
}

.project-detail-scroll-wrap::-webkit-scrollbar {
  width: 0;
}
</style>

<template>
  <div
    class="project-detail"
    v-if="visible && selectDetail"
  >
    <!-- <div class="project-detail" v-show="true"> -->
    <!-- 头部区域 -->
    <div class="header">
      <div class="left">
        <div class="back-button" @click="visible = false">
          <div class="el-icon-arrow-left"></div>
          <div>返回</div>
        </div>

        <div class="line"></div>

        <div class="project-name">
          {{ detail && detail.programme && detail.programme.programme_name }}
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="right">
        <el-button type="primary-1" class="small mbn" @click="editDetail"
          >修改方案</el-button
        >

        <el-button @click="share" type="primary" class="small mbn"
          ><i class="el-icon-share el-icon--left"></i>分享</el-button
        >

            <el-button @click="share1" type="primary" class="small s"
          ><i class="el-icon-share el-icon--left"></i>分享</el-button
        >

      </div>

      <!-- 中间区域 -->
      <div class="translate-container" v-if="getTranslates.length == 2">
        <div>方案{{ getTranslateNow }}</div>

        <el-dropdown>
          <span
            class="switch-translate"
            style="
              font-size: 12px;
              color: rgba(22, 93, 255, 1);
              cursor: pointer;
              float: left;
            "
          >
            切换方案
          </span>
          <el-dropdown-menu slot="dropdown" v-if="detail.Enable">
            <el-dropdown-item
              v-for="(item, index) of getTranslates"
              :key="item.form.form_id"
              :disabled="detail.Enable.form.form_id == item.form.form_id"
              @click.native="switchForm(item.form.form_id, index)"
            >
              <div class="d">方案{{ index + 1 }}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>

    <div class="project-detail-main">
      <!-- 左侧菜单 -->
      <div class="project-detail-menu">
        <div class="menu-item" v-for="item of getMenus" :key="item.id">
          <div class="menu-title" :class="getStyleParent(item)">
            {{ item.name }}
          </div>
          <div class="children-container">
            <div
              :class="getStyleChild(menu)"
              class="menu-child"
              v-show="menu.disabled !== true"
              @click="scroolTo(menu.id)"
              v-for="menu of item.children"
              :key="menu.name"
            >
              {{ menu.name }}
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧详情 -->
      <div class="project-detail-scroll-wrap" @scroll="scroll">
        <component
          :ref="item.cid"
          :is="item.component"
          v-for="item of getMenus"
          :detail="selectDetail"
          :key="item.component"
          :pages="item.children"
          :programme="detail"
          :isShare="isShare"
        ></component>

        <el-backtop
          target=".project-detail-scroll-wrap"
          class="custom-back-top"
        >
          <div class="el-icon-caret-top"></div>
          <div class="text">顶部</div>
        </el-backtop>
      </div>
    </div>
    <projectShare ref="projectShare"></projectShare>
  </div>
</template>

<script>
import { menus } from "@/constant";
import page1 from "./1";
import page2 from "./2";
import page3 from "./3";
import page4 from "./4";
import { selectProgrammeDetails, chooseForm } from "@/api/programme.js";
import page5 from "./5";
import { scrollTo } from "@/lib/util";
import projectShare from "../components/dialog-share/index.vue";
import bus from "@/bus";

export default {
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    projectShare,
  },
  props: {
    isShare: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      projectId: null, //项目id
      activeScrollId: null,
      visible: false, //显示隐藏
      project: {}, //项目
      id: null, //方案id
      detail: {}, //详情
      menus,
    };
  },
  computed: {
    getMenus() {
      let result = [];
      if (this.isShare === false) {
        result = this.menus;
      } else {
        let range = {};
        // JSON.parse(this.detail.range).map((E) => {
        //   range[E.component] = E.show;
        // });
        let ranges = menus.map(e => {
          return e;
        })
        ranges.map((E, index) => {
          range[E.component] = this.detail.range[index] === '1';
        });
        this.menus.map((e) => {
          if (range[e.component] === true) {
            result.push(e);
          }
        });
      }
      return result;
    },
    //选中的detail
    selectDetail() {
      return this.detail?.Enable;
    },
    //获取当前方案
    getTranslateNow() {
      let result = [];
      // if (this.detail.Deactivate) {
      //   if (this.detail.Deactivate.form_id > this.detail.Enable.form_id) {
      //     result.push(this.detail.Enable);
      //     result.push(this.detail.Deactivate);
      //   } else {
      //     result.push(this.detail.Deactivate);
      //     result.push(this.detail.Enable);
      //   }
      // } else {
      //   result.push(this.detail.Enable);
      // }
      result.push(this.detail.Enable);
      if (this.detail.Deactivate) {
        result.push(this.detail.Deactivate);
      }
      result.sort((x, y) => {
        return x.form.form_id - y.form.form_id;
      });
      // console.log(result);
      return result.indexOf(this.detail.Enable) + 1;
      // return
    },
    //获取所有方案
    getTranslates() {
      let result = [];
      if (this.detail.Deactivate) {
        if (
          this.detail.Deactivate.form.form_id > this.detail.Enable.form.form_id
        ) {
          result.push(this.detail.Enable);
          result.push(this.detail.Deactivate);
        } else {
          result.push(this.detail.Deactivate);
          result.push(this.detail.Enable);
        }
      } else {
        result.push(this.detail.Enable);
      }

      // let data=this.detail
      return result;
    },
    getStyleChild() {
      return (menu) => {
        return menu.id == this.activeScrollId ? "menu-child-active" : "";
      };
    },
    getStyleParent() {
      return (menu) => {
        for (let child of menu.children) {
          if (child.id == this.activeScrollId) {
            return "menu-title-active";
          }
        }
      };
    },
  },
  methods: {
    scrollEvent(event) {
      document
        .getElementsByClassName("project-detail-scroll-wrap")[0]
        ?.scrollTo(
          0,
          document.getElementsByClassName("project-detail-scroll-wrap")[0]
            .scrollTop + event.deltaY
        );
    },
    share() {
      this.$refs["projectShare"].open(this.detail);
    },
    share1(){
      this.$refs["projectShare"].open();
    },
    async switchForm(form_id, index) {
      let data = await chooseForm({ form_id });
      this.$message.success("已切换为方案" + (index + 1) + "!");
      await this.getDetail();
      bus.$emit("loadTableData");
      // this.$refs['page1'][0].$refs.page1[0].loadTableData()
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    //数据更新
    update() {
      this.getDetail();
    },
    /**
     * @description 打开
     */
    open(project) {
      this.projectId = project.programme_id;
      this.visible = true;
      this.getDetail();
    },

    /**
     * @description 获取详情
     */
    async getDetail() {
      let { data } = await selectProgrammeDetails({
        programme_id: this.projectId,
      });
      this.detail = data;
    },
    /**
     * @description 设置象形
     */
    setDetail(detail = {}) {
      this.detail = detail;
      this.visible = true;
    },
    hidden() {
      this.visible = false;
    },
    editDetail() {
      this.$parent.$refs.dialogCreate.open(this.detail.programme);
    },
    scroll(event) {
      let top = event.target.scrollTop;
      for (let m of this.menus) {
        for (let menu of m.children) {
          if (menu.disabled === true) {
            continue;
          }
          let el = document.getElementsByClassName("page-" + menu.id)[0];
          if (el) {
            if (el.offsetTop - top <= 100) {
              this.activeScrollId = menu.id;
            }
          }
        }
      }
    },
    async scroolTo(id) {
      let el = document.getElementsByClassName("page-" + id)[0];
      if (el) {
        await scrollTo(
          document.getElementsByClassName("project-detail-scroll-wrap")[0],
          el.offsetTop - 10,
          200
        );
        this.activeScrollId = id;
      }
    },
  },
};
</script>
