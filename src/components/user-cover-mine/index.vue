<template>
  <div
    class="user-cover-mine"
    :style="`background-image:url(${$store.getters.userCover})`"
  ></div>
</template>

<script>
export default {
  name: "user-cover-mine",
};
</script>

<style lang="scss" scoped>
.user-cover-mine {
  width: 100%;
  height: 100%;
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
  background: #e5f0ff;
}
</style>
