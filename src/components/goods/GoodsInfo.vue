<template>
    <div class="goodsinfo-container">
            <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
            
        
       

       
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
						<p class="price">
                            市场价：<del>￥11</del>&nbsp;&nbsp;销售价：<span class="now_price">￥11</span>
                        </p>
                        <p>购买数量：
                            <numbox></numbox>
                        </p>
                        <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                        <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
                        <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
                        <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
                        <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
                        <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
                    </p>
					</div>
				</div>
				
			</div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：</p>
          <p>库存情况：件</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer" style="display:block">
        <mt-button type="primary" size="large" plain style="margin:15px 0" @click="goDesc()">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment()">商品评论</mt-button>
      </div>
    </div>
    </div>
</template>
<script>
 import swiper from '../subcomponents/swiper.vue';
 import numbox from '../subcomponents/goodsinfo_number.vue';
export default {
    data(){
        return{
            lunbotuList:[],
            ballFlag: false, // 控制小球的隐藏和显示的标识符
            //selectedCount: 1 // 保存用户选中的商品数量， 默认，认为用户买1个
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
        },
        goDesc(){
            //点击使用编程式导航跳转到 图文介绍页面
            this.$router.push({
                name:'goodsdesc'
                
            });
        },
        goComment(){
            this.$router.push({
                name:'goodscomment'
                
            });
        },
        addToShopCar(){
            //添加到购物车
            this.ballFlag = !this.ballFlag;
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            el.offsetWidth;
            el.style.transform="translate(93px,230px)";
            el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,0.68)";
            done()
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag;
        }
    },
    components:{
        swiper,
        numbox
    }
}
</script>
<style lang="scss" scoped>

.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
   .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 500px;
    left: 106px;
  }
}
</style>
