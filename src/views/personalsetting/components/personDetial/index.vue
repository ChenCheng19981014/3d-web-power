<template>
  <div class="detail" :style="styleCss">
    <div class="detail-top">
      <div class="left">名片信息</div>
      <div class="right" v-if="$store.getters.cardState" @click="changeCard">
        修改名片
      </div>
    </div>
    <div class="item-line">
      <div class="cover"><user-cover-mine></user-cover-mine></div>
      <div class="item-right">
        <lp-button
          text="修改头像"
          width="80"
          bgColor="#F2F3F5"
          hoverColor="rgb(229,230,224)"
          activeColor="#F2F3F5"
          color="#4E5969"
          @click.native="$refs.uploadRef.click"
        ></lp-button>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          style="display: none;"
          ref="uploadRef"
          @change="imageChange"
        />
      </div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">真实姓名：</div>
      <div class="item-textright">{{ $store.getters.userRealName }}</div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">职 位：</div>
      <div class="item-textright">{{ $store.getters.userJob2 }}</div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">公司名称：</div>
      <div class="item-textright">{{ $store.getters.userCompany }}</div>
    </div>
    <div class="line"></div>
    <div class="detail-top">
      <div class="left">登录信息</div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">手机号码：</div>
      <div class="item-bottomright">
        {{ mobilePhone }}
      </div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">登录密码：</div>
      <div class="item-bottomright">
        ******** <span @click="toChangePsw">修改密码</span>
      </div>
    </div>
    <div class="item-line">
      <div class="item-textLeft">登录状态：</div>
      <div class="item-bottomright">
        <lp-button
          text="退出登录"
          width="80"
          bgColor="#F2F3F5"
          hoverColor="rgb(229,230,224)"
          activeColor="#F2F3F5"
          color="#4E5969"
          @click.native="loginOut"
        ></lp-button>
      </div>
    </div>
  </div>
</template>
<script>
import { uploadImage } from "../../../../api/user";

export default {
  computed: {
    styleCss() {
      if (this.$store.getters.cardState) {
        return {
          "--color": "#4e5969",
        };
      } else {
        return {
          "--color": "#C9CDD4",
        };
      }
    },
    mobilePhone() {
      if (this.$store.getters.userMobilePhone) {
        return this.$store.getters.userMobilePhone.replace(
          /^(.{3})(.*)(.{4})$/,
          "$1 $2 $3"
        );
      } else {
        return "--";
      }
    },
  },
  methods: {
    toChangePsw() {
      this.$router.push({ name: "changePsw" });
    },
    changeCard() {
      this.$parent.$parent.$children[1].open();
    },
    loginOut() {
      this.$router.replace({ name: "login" });
      this.$store.commit("loginOut");
      this.$store.commit("disposeUserInfo");
      this.$message({
        message: "退出登录成功",
        type: "success",
      });
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
      // this.$store.dispatch("setUserCover", { headerImage: file });
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
<style lang="scss" scoped>
.detail {
  padding-top: 42px;
  padding-left: 140px;
  padding-right: 140px;
  .detail-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      font-weight: 500;
      font-size: 16px;
      color: #1b2360;
    }
    .right {
      cursor: pointer;
      font-weight: 400;
      font-size: 14px;
      color: #165dff;
      &:hover {
        color: #5c8af5;
      }
    }
  }
  .item-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    font-weight: 400;
    font-size: 14px;
    .cover {
      width: 54px;
      height: 54px;
    }
    .item-textLeft {
      color: #86909c;
    }
    .item-textright {
      width: 240px;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: var(--color);
    }
    .item-bottomright {
      color: #4e5969;
      span {
        color: #165dff;
        margin-left: 3px;
        cursor: pointer;
        &:hover {
          color: #5c8af5;
        }
      }
    }
  }
  .line {
    width: 520px;
    height: 2px;
    background-color: #e5e6eb;
    margin: 32px 0;
  }
}
</style>
