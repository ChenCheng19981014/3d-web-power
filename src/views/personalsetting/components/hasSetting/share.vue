<template>
  <el-dialog
    class="custom-dialog custom-info-dialog"
    title="分享名片"
    :visible.sync="visible1"
    size="362px"
  >
    <div class="input-line-item">
      <el-input v-model="url" disabled class="input" placeholder=""></el-input>
      <el-button class="button" type="primary" @click="copy">复制</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { shareGetURL } from "@/api/user.js";
export default {
  data() {
    return {
      url: "",
      visible1: false,
    };
  },
  methods: {
    async open() {
      shareGetURL().then((result) => {
       this.url =process.env.VUE_APP_BASE_SHAREURL  + "person-pc?id=" + result.data;
        this.visible1 = true;
      });
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
      copyInput.remove(); //删除
    },
  },
};
</script>