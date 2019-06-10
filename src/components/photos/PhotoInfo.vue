<template>
    <div>
        <h1>po</h1>
        <h3>标题</h3>
        <p class="subtitle">
            <span>发表时间</span>
            <span>点击</span>
        </p>

        <!-- 略缩图区域 -->
         <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

        <!-- 图片内容区域 -->

         <comment-box></comment-box>

    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";

export default {
    data(){
        return{
             
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      }
        
    },   
    methods:{
        handleClose () {
        console.log('close event')
      }
    },
    components:{
        'comment-box':comment
    }
}
</script>
<style lang="scss" scoped>

</style>
