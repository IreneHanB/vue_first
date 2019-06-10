<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.bid" @click="getPhotoListByCateId(item.id)">
							{{item.bookname}}
						</a>

						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>
				
			</div>
	<!-- 图片列表区域 -->
					<ul class="photo-list">
						<router-link v-for="item in list" :key="item.user_id" tag="li" to="/home/photoinfo">
							<img v-lazy="item.thumb">
							<div class="info">
								<h1 class="info-title">{{item.name}}</h1>
								<div class="info-body"></div>
							</div>
						</router-link>
					</ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
			cates:[],//分类数组
			list:[]//图片列表数组
		};
	},
	created(){
		this.getAllCategory();
		this.getPhotoListByCateId(0);//默认进入页面就请求 所有图片列表的数据
	},
    mounted(){
        //生命周期最后一个，当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
        //如果要操作元素，最好在mounted里面，因为，这时候的dom元素是最新的
        //初始化滑动控件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
		getAllCategory(){
			this.$http.get('https://www.apiopen.top/novelApi').then(result=>{
				console.log(result.body);
				if(result.body.code===200){
					this.cates=result.body.data;
				}else{
					Toast("获取失败")
				}
			})
		},
		getPhotoListByCateId(cateId){
			//根据 分类ID，获取图片列表
			this.$http.get('https://api.apiopen.top/musicBroadcasting').then(
				
					result=>{
							//console.log(result.body.result[0].channellist)
							this.list=result.body.result[0].channellist;
						
					}
				)
		}
    }
}
</script>
<style lang="scss" scoped>
 * { 
     touch-action: pan-y; 
     } 

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: center;
      position: absolute;
      top: 35%;
	  line-height: 50px;
      background-color: rgba(0, 0, 0, 0.4);
      height: 50px;
	  width: 100%;
      .info-title {
        font-size: 14px;
		line-height: 50px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}
</style>
