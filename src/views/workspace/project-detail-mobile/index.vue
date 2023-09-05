<style lang="scss" scoped>
@import url("../../../design/func.scss");
@function pvw($px) {
  @return $px/365 * 100 + vw;
}
.c-footer {
  height: pvw(263);
  width: 100%;
  position: relative;
  .img1 {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .img2 {
    position: absolute;
    top: 0;
    width: pvw(275);
    left: pvw(100);
  }
}
</style>

<template>
  <div class="project-detail-m project-detail-m" v-if="visible && selectDetail">
    <div class="menus">
      <div
        class="menu-item"
        v-for="(item, index) of getMenusComponent"
        :id="getStyleChild(item)"
        :key="index"
        @click="scroolTo(item.id)"
      >
        <div class="text">
          {{ item.name }}
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="main" @scroll="scroll">
      <component
        :is="item.component"
        v-for="item of getMenusComponent"
        :detail="selectDetail"
        :key="item.component"
        :pages="item.children"
        :programme="detail"
        :isShare="isShare"
      ></component>

      <!-- 底部 -->
      <div class="c-footer">
        <img src="./footer.png" class="img1" alt="" />
        <img src="./work.png" class="img2" alt="" />
      </div>
    </div>

    <div class="f-container">
        <div class="footer">
      <div class="right-button" @click="openPersonDialog">销售名片</div>
      <div class="left">
        <div class="text">总计 ({{ getTotalCount }}项)</div>
        <div class="value">
          <div class="unit">{{ getUnit }}</div>
          <div class="number">{{ getTotalPrice }}</div>
        </div>
      </div>
    </div>
    <div class="help-footer"></div>
    </div>

    <person-dialog ref="personDialog"></person-dialog>
    <!-- 头部区域 -->
  </div>
</template>

<script>
import { menus } from "@/constant";
import page1 from "./1";
import page2 from "./2";
import page3 from "./3";
import page4 from "./4";
import page5 from "./5";
import { selectProgrammeDetails, chooseForm } from "@/api/programme.js";
import { scrollTo } from "@/lib/util";
import personDialog from "./person-dialog";
export default {
  components: {
    page1,
    page2,
    page3,
    page4,
    page5,
    personDialog,
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
    getStyleChild() {
      return (menu) => {
        return menu.id == this.activeScrollId ? "active" : "";
      };
    },
    getTotalPrice() {
      this.tableData = JSON.parse(this.selectDetail?.form?.form_json);
      let price = 0;
      this.tableData.map((item) => {
        if (item.pid) {
          this.tableData.map((e) => {
            if (e.id == item.pid) {
              if (e.select == true) {
                price += this.GetPriceRow(item);
              }
            }
          });
        } else {
          if (item.select == true) {
            price += this.GetPriceRow(item);
          }
        }
      });
      price += "";
      let reg = /\B(?=(\d{3})+$)/g;
      price = price.replace(reg, ",");
      return price;
    },
    GetPriceRow() {
      return function (row) {
        let price = 0;
        if (row.pid) {
          this.tableData.map((e) => {
            if (row.pid == e.id) {
              price = row.price ? row.price * e.num : 0;
            }
          });
        } else {
          price = row.price ? row.price * row.num : 0;
        }

        return price;
      };
    },
    getTotalCount() {
      this.tableData = JSON.parse(this.selectDetail?.form?.form_json);
      let price = 0;
      this.tableData.map((item) => {
        if (item.select == true) {
          price += item.num;
        }
      });

      return price;
    },
    getUnit() {
      return this.detail?.programme.priceUnit;
      // return this.programme.;
    },

    getMenusComponent() {
      let result = [];

      if (this.isShare == false) {
        result = this.menus;
      } else {
        let range = {};
        JSON.parse(this.detail.range).map((E) => {
          range[E.component] = E.show;
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
      return this.detail.Enable || null;
    },
    //获取当前方案
    getTranslateNow() {
      let result = [];
      if (this.detail.Deactivate) {
        if (this.detail.Deactivate.form_id > this.detail.Enable.form_id) {
          result.push(this.detail.Enable);
          result.push(this.detail.Deactivate);
        } else {
          result.push(this.detail.Deactivate);
          result.push(this.detail.Enable);
        }
      } else {
        result.push(this.detail.Enable);
      }
      return result.indexOf(this.detail.Enable) + 1;
      // return
    },
  },
  methods: {
    openPersonDialog() {
      this.$refs["personDialog"].open(this.detail.user);
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
    scroll(event) {
      let top = event.target.scrollTop;
      for (let m of this.menus) {
        let el = document.getElementsByClassName("page-" + m.id)[0];
        if (!el) {
          continue;
        }
        if (el.offsetTop - top <= 100) {
          this.activeScrollId = m.id;
        }
      }
    },
    scroolTo(id) {
      let el = document.getElementsByClassName("page-" + id)[0];
      if (el) {
        scrollTo(
          document.getElementsByClassName("main")[0],
          el.offsetTop - 60,
          200
        );
      }
      this.activeScrollId = id;
    },
  },
  mounted() {
    setTimeout(() => {
      this.scroll({ target: document.getElementsByClassName("main")[0] });
    }, 100);
  },
};
</script>
