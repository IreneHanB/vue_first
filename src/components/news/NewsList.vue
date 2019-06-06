<template>
    <div> 
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id">
						<img class="mui-media-object mui-pull-left" src="http://cms-bucket.ws.126.net/2019/06/04/efe68a48dc224047adf7ede36456aa01.png">
                        <!-- src的图片 有问题，未获取到 -->
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
                            <h1>{{item.id}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.add_time| dataFormat('YYYY-MM-DD')}}</span>
                                <span>点击次数：{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
				

			</ul>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            newslist:[]
        };
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
            this.$http.get('https://easy-mock.com/mock/5cf7bb32f8c0832af378e0c1/books/newsList').then(result => {
                console.log(result.body)
                
                if(result.body.status===0){
                    
                    this.newslist = result.body.message
                    //console.log(result.body.data.tech[0].docid)
                }else{
                    Toast('获取新闻列表失败')
                }
            })
        }
    }

    
}
</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{font-size:13px;}
            .mui-ellipsis{
                font-size: 12px;
                
                display:flex;
                justify-content: space-between;
            }
        }
    }
</style>
