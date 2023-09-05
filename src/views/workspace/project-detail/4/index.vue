<template>
    <div class="page-3 page-classify">
        <div class="page-classify-title">4. 包装运输
</div>
     <component :detail="detail" :programme="programme.programme" :isShare="isShare" v-for="(item,index) of pages" :key="index" :is="item.component" v-show="item.disabled!==true"></component>
    </div>
</template>

<script>
import page1 from "./1.vue"
import page2 from "./2.vue"
import page3 from "./3.vue"
export default {
    props:{
           pages:Array,
        detail:Object,
        isShare:Boolean,
        programme:Object
    },
    components:{
        page1,page2,page3
    }
}
</script>

