<template>
    <div class="goodsinfo-cantainer">
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						 <swiper :lunbotuList="lunbotuList"></swiper>
					</div>
				</div>
			</div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				
			</div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
    </div>
</template>
<script>
 import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return{
            lunbotuList:[]
        }
    },
    created(){
        this.getLunbotu();
    },
    methods:{
        getLunbotu(){
            this.$http.get("https://www.apiopen.top/novelApi").then(result =>{
                //console.log(result.body);
                if(result.body.code=200){
                    this.lunbotuList = result.body.data
                }else{
                    Toast('轮播图加载失败')
                }
           })
        }
    },
    components:{
        swiper
    }
}
</script>
<style lang="scss" scoped>
.goodsinfo-cantainer{
    background-color: #eee;
    overflow: hidden;
}
</style>
