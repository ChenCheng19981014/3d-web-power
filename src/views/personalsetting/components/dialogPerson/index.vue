<template>
  <el-dialog
    title="设置名片"
    class="custom-dialog custom-person-dialog"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    @open="openDialog"
    @closed="closeDialog"
  >
    <div class="custom-table person-table">
      <!-- 头像 -->
      <div class="custom-table-header">
        <div class="name">
          <user-cover-mine></user-cover-mine>
        </div>
        <lp-button
          text="修改头像"
          style="height:32px"
          width="80"
          bgColor="#F2F3F5"
          hoverColor="#e5e6e0"
          activeColor="#F2F3F5"
          color="#4E5969"
          @click.native="$refs.uploadRef.click"
        ></lp-button>
        <input
          type="file"
          style="display: none;"
          ref="uploadRef"
          accept=".jpg, .jpeg, .png"
          @change="imageChange"
        />
      </div>

      <!-- 详情 -->
      <div class="table-detail">
        <el-form :model="userInfo" :rules="rules" ref="ruleForm">
          <div class="detail-item">
            <div class="item-name">真实姓名:</div>
            <div class="person-item-input">
              <el-form-item prop="name">
                <el-input
                class="custom-input"
                  placeholder="请输入"
                  v-model="userInfo.name"
                ></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="detail-item">
            <div class="item-name">职位:</div>
            <div class="person-item-input">
              <el-form-item prop="job">
                <el-input
                class="custom-input"
                  placeholder="请输入"
                  v-model="userInfo.job"
                ></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="detail-item ">
            <div class="item-name">公司名称:</div>
            <div class="person-item-input">
              <el-form-item prop="company">
                <el-input
                class="custom-input"
                  placeholder="请输入"
                  v-model="userInfo.company"
                ></el-input>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancelCard">取 消</el-button>
      <el-button type="primary" @click="saveCard" :disabled="isDisabled"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { updateUserInfo, uploadImage } from "../../../../api/user";

export default {
  props: {
    detail: Object,
  },
  data() {
    return {
      dialogVisible: false,
      userInfo: {
        company: "",
        name: "",
        job: "",
      },
      rules: {
        company: [{ required: true, message: "内容为空", trigger: "blur" }],
        name: [{ required: true, message: "内容为空", trigger: "blur" }],
        job: [{ required: true, message: "内容为空", trigger: "blur" }],
      },
    };
  },
  created() {
    if (this.$store.getters.cardState) {
      let { company, realName: name, job } = this.$store.state.userInfo;
      this.userInfo = { company, name, job };
    }
  },
  computed: {
    isDisabled() {
      if (this.userInfo.company && this.userInfo.name && this.userInfo.job) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    openDialog() {
      if (this.$store.getters.cardState) {
        let { company, realName: name, job } = this.$store.state.userInfo;
        this.userInfo = { company, name, job };
      }
    },
    closeDialog() {
      for (let key of Object.keys(this.userInfo)) {
        this.userInfo[key] = "";
      }
    },
    cancelCard() {
      this.dialogVisible = false;
    },
    async saveCard() {
      try {
        let res = await updateUserInfo(this.userInfo);
        this.$store.dispatch("getUserInfoToState");
        this.dialogVisible = false;
      } catch (error) {
        console.log(error);
      }
    },
    open() {
      this.dialogVisible = true;
    },
    async imageChange(el) {
      let file = el.target.files[0];
      let param = new FormData(); // 创建form对象
      param.append("headerImage", file);
      let res = await uploadImage(param);
      this.$message({
        message: "修改成功",
        type: "success",
      });
      this.$store.dispatch("getUserInfoToState");
      return;
      if (!/image\/\w+/.test(file.type)) {
        //判断获取的是否为图片文件
        alert("请确保文件为图像文件");
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        console.log(event.target.result);
      };
    },
  },
};
</script>

<style lang="scss">
.custom-person-dialog {
}
.person-table {
  border: none !important;

  .custom-table-header {
    padding-left: 0;
    border: none;
    height: 54px;
    .name {
      width: 54px;
      height: 54px;
    }
    .el-button {
      width: 80px;
      height: 32px;
      padding: 5px 12px;
    }
  }
  .table-detail {
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    .detail-item {
      display: flex;
      justify-content: space-between;
      height: 32px;
      margin-top: 24px;
      .item-name {
        height: 32px;
        color: #4e5969;
        opacity: 0.7;
        display: flex;
        align-items: center;
        font-size: 14px;
        line-height: 22px;
      }
      .person-item-input {
        .el-input__inner {
          width: 220px;
          height: 32px;
          background: #f2f3f5;
          border-radius: 4px;
          // border: 1px solid transparent;
          padding: 5px 12px;
          // border: none;
        }
        .el-input__inner:focus {
          background: none;
          outline: none;
          border: 1px solid#f2f3f5;
        }
      }
    }
  }
}
</style>
