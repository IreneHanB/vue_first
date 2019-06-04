<template>
    <div> 
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
					<router-link :to="'/home/newsinfo/' + item.docid">
						<img class="mui-media-object mui-pull-left" src="http://cms-bucket.ws.126.net/2019/06/04/efe68a48dc224047adf7ede36456aa01.png">
                        <!-- src的图片 有问题，未获取到 -->
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.ptime | dataFormat('YYYY-MM-DD')}}</span>
                                <span>点击次数：{{item.tcount}}次</span>
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
            this.$http.get('https://www.apiopen.top/journalismApi').then(result => {
                console.log(result.body)
                // 不能== 
                if(result.code =200){
                    
                    this.newslist = result.body.data.tech
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
