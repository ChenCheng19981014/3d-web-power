<template>
  <div class="page-1 page-classify">
    <div class="page-classify-title">1. 方案清单</div>
    <component :detail="detail" :ref="item.component" :programme="programme.programme" :isShare="isShare"
               v-for="(item,index) of pages" :key="index" :is="item.component"
               v-show="item.disabled!==true"></component>
  </div>
</template>

<script>
import page1 from "./1.vue"
import page2 from "./2.vue"

export default {
  props: {
    pages: Array,
    detail: Object,
    isShare: Boolean,
    programme: Object
  },
  components: {
    page1, page2
  },
  created() {
  }
}
</script>
