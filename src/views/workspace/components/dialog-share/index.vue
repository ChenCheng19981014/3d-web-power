<style lang="scss" scoped>
.classify {
  width: 100%;
  border-top: 1px solid #e4e7ed;
  .classify-header {
    margin-bottom: 14px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    .classify-line {
      height: 16px;
      background: #165dff;
      border-radius: 3px;
      margin-right: 5px;
      width: 3px;
    }
    .classify-name {
      font-size: 16px;
      color: rgba(29, 33, 41, 1);
      font-weight: bold;
    }
  }
}

.input-line-item {
  display: flex;
  align-items: center;
}

.classify:nth-child(1) {
  border-top: none;
}

.custom-input-number {
  width: 88px;
}

.custom-translate-dialog {
  .dialog-base-info {
    color: rgba(78, 89, 105, 1);
    font-size: 14px;
    overflow: hidden;
    padding-bottom: 28px;
    border-bottom: 1px solid rgba(229, 230, 235, 1);
    margin-bottom: 24px;
    .name {
      margin-right: 16px;
    }
    .value {
      color: #1d2129;
      position: relative;
      font-weight: bold;
      font-size: 32px;
    }
  }
  .dialog-card-container {
    display: flex;
    justify-content: space-between;
    .dialog-card-item {
      width: 278px;
      flex-shrink: 0;
      margin-right: 8px;
      .name {
        font-size: 16px;
        color: rgba(29, 33, 41, 1);
        margin-bottom: 4px;
        display: flex;
        align-items: center;
      }
      .info {
        margin-bottom: 8px;
        display: flex;
        width: 100%;
        height: 20px;
        align-items: center;
        overflow: hidden;
        .info-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          img {
            width: 13px;
            position: relative;
            top: 2px;
            margin-right: 5px;
          }
        }
      }
      .card {
        width: 100%;
        height: 86px;
        background: rgb(247, 248, 250);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        padding-right: 17px;
        padding-top: 16px;
        padding-bottom: 16px;
        overflow: hidden;
        padding-left: 20px;
        border: 1px solid transparent;
        position: relative;
        .suggest {
          position: absolute;
          width: 18px;
          right: 9px;
          top: 2px;
        }
        .card-left {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .name {
            font-size: 14px;
            color: rgba(78, 89, 105, 1);
          }
          .value {
            .number {
              font-size: 22px;
              font-weight: bold;
              color: #1d2129;
              margin-right: 4px;
            }
            .unit {
              font-size: 12px;
            }
          }
        }
        .dian {
          height: 59px;
        }
        &:hover {
          border: 1px solid rgba(22, 93, 255, 1);
        }
        &.active {
          border: 1px solid rgba(22, 93, 255, 1);
        }
      }
    }
  }
}

.custom-span {
  font-size: 14px;
  color: rgba(78, 89, 105, 1);
}
</style>

<template>
  <div>
    <!-- drawer -->
    <el-dialog
      class="custom-dialog custom-share-dialog"
      title="分享方案"
      :visible.sync="visible"
      size="362px"
    >
      <div
        class="input-line-item"
        v-for="(item, index) of pagesInfo"
        :key="item.component"
      >
        <el-checkbox :disabled="index == 0" v-model="item.show">
          <div class="custom-span">{{ item.name }}</div></el-checkbox
        >
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="commitData">分 享</el-button>
      </div>
    </el-dialog>

    <el-dialog
      class="custom-dialog custom-info-dialog"
      title="分享方案"
      :visible.sync="visible1"
      size="362px"
    >
      <div class="input-line-item">
        <el-input
          v-model="url"
          disabled
          class="input"
          placeholder=""
        ></el-input>
        <el-button class="button" type="primary" @click="copy">复制</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { share } from "@/api/programme.js";
import { menus } from "@/constant";
export default {
  data() {
    return {
      visible: false,
      visible1: false,
      url: null,
      pagesInfo: menus.map((e) => {
        return {
          component: e.component,
          show: true,
          name: e.name,
        };
      }),
      datas: {},
    };
  },
  methods: {
    async commitData() {
      if (!this.pagesInfo.some((e) => e.show)) {
        this.$message.error("请选择至少一个分享菜单!");
        return;
      }
      let info = "";
      for (let i = 0; i < this.pagesInfo.length; i++) {
        info += this.pagesInfo[i].show ? "1" : "0";
      }
      // console.log(info, 'Range数据');
      let {data} = await share({
        programme_id: this.datas.programme.programme_id,
        range: info,
      });
      // console.log(data, '从后台返回的分享数据');
      this.visible = false;
      this.visible1 = true;
      this.url = process.env.VUE_APP_BASE_SHAREURL + "project-share?id=" + data;
    },
    open(data) {
      if(!data){
          this.visible = false;
      this.visible1 = true;
      this.url=location.href
        return
      }
      // console.log(data);
      this.visible = true;
      this.datas = data;
    },
    copy() {
      let url = this.url;
      let copyInput = document.createElement("input"); //创建input元素
      document.body.appendChild(copyInput); //向页面底部追加输入框
      copyInput.setAttribute("value", url); //添加属性，将url赋值给input元素的value属性
      copyInput.select(); //选择input元素
      document.execCommand("Copy");
      this.$message.success("链接已复制！"); //弹出提示信息，不同组件可能存在写法不同
      //复制之后再删除元素，否则无法成功赋值
      copyInput.remove(); //删除动态创建的节点
    },
  },
  created() {},
};
</script>
