<template>
  <div class="card-container">
    <h3>名片未设置</h3>
    <p>填写真实信息，谈单更高效</p>
    <lp-button text="立即设置" @click.native="openDialog"></lp-button>
  </div>
</template>
<script>
export default {
  methods: {
    openDialog() {
      this.$parent.$parent.$children[1].open();
    },
  },
};
</script>
<style lang="scss" scoped>
.card-container {
  width: 364px;
  height: 210px;
  background: linear-gradient(108.26deg, #ffffff 1.37%, #f2f2f2 99.38%);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    color: #1d2129;
    margin-bottom: 6px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #86909c;
    margin-bottom: 24px;
  }
}
</style>
