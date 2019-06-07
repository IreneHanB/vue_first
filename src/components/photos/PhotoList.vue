<template>
    <div>
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.bid">
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

    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
			cates:[]
		};
	},
	created(){
		this.getAllCategory()
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
		}
    }
}
</script>
<style lang="scss" scoped>
 * { 
     touch-action: pan-y; 
     } 
</style>
