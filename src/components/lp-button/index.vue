<template>
  <div class="lp-button" :style="styleCss">{{ text }}</div>
</template>

<script>
export default {
  name: "lp-button",
  props: {
    text: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "120",
    },
    bgColor: {
      type: String,
      default: "#165dff",
    },
    hoverColor: {
      type: String,
      default: "#326efc",
    },
    activeColor: {
      type: String,
      default: "#1459fa",
    },
    color: {
      type: String,
      default: "#ffffff"
    },
  },
  computed: {
    styleCss() {
      return {
        "--width": this.width,
        "--bgColor": this.bgColor,
        "--hoverColor": this.hoverColor,
        "--activeColor": this.activeColor,
        "--color": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.lp-button {
  width: calc(var(--width) / 19.2 * 1vw);
  height: 36px;
  background-color: var(--bgColor);
  color: var(--color);
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: var(--hoverColor);
  }
  &:active {
    background-color: var(--activeColor);
  }
}
</style>
