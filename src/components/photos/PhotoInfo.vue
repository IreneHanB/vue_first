<template>
    <div>
        <h1>po</h1>
        <h3>标题</h3>
        <p class="subtitle">
            <span>发表时间</span>
            <span>点击</span>
        </p>

        <!-- 略缩图区域 -->
        <!-- 图片内容区域 -->

         <comment-box></comment-box>

    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";

export default {
    data(){
        return{

        }
    },   
    methods:{

    },
    components:{
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped>

</style>
