<template>
    <div>
        
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.bid">
            <!-- 我们要计算表达式，要在普通属性前面加上v-bind（：） -->
            <img :src="item.book_cover" alt="">
        </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格到六宫格 -->

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link  to="/home/photolist">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>

        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get("https://www.apiopen.top/novelApi").then(result =>{
                 console.log(result.body);
                if(result.body.code=200){
                    this.lunbotuList = result.body.data
                }else{
                    Toast('轮播图加载失败')
                }
           })
        }
    }
    
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 300px;
    // .mint-swipe-item:nth-child(1){
    //     background-color: pink
    // }
    .mint-swipe-item{
        &:nth-child(1){
            background-color: blueviolet;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: cyan;
        }
        img{
            width:100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background: #fff;
    border:none;
    img{
        width: 60px;
        height: 60px;
    }
    .mui-media-body{
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
</style>
