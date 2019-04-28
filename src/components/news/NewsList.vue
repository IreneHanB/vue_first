<template>
    <div>
        <h1>新闻资讯</h1>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.docid">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.picInf[i].url">
						<div class="mui-media-body">
							<h1>看到空对地</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：2012-12-12 12:12:23</span>
                                <span>点击次数：0次</span>
							</p>
						</div>
					</a>
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
