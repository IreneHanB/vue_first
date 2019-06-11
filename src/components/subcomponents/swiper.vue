<template>
    <div>
        <!-- 谁使用此轮播图，谁来传递lunbotulist -->
        <!-- 这里 应该是 父组件向子组件传值 -->
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotuList" :key="item.bid">
            <!-- 我们要计算表达式，要在普通属性前面加上v-bind（：） -->
            <img :src="item.book_cover" alt="">
        </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['lunbotuList']//接受传过来的lunbotulist
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
</style>
