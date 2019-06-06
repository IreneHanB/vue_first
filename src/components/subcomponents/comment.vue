<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="最多吐槽120字" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.content">
                <div class="cmt-title">
                    第{{ index+1 }}楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dataFormat }}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            pageIndex:1,
            comments:[]
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        getComments(){
            this.$http.get('https://easy-mock.com/mock/5cf7bb32f8c0832af378e0c1/books/getcomments/13').then(result=>{
                    console.log(result.body);
                    if(result.body.status === 0){
                        this.comments=result.body.message;
                    }else{
                        Toast("获取失败");
                    }
                }
            )
        }
    }
}
</script>
<style lang="scss" scoped>
    .cmt-container{
        h1{
            padding-top:10px; 
            font-size: 16px;
        }
        textarea{
            font-size: 14px;
            margin:0;
        }
        .cmt-list{
            margin-top:10px;
            .cmt-item{
                font-size: 13px;
                .cmt-title{
                    line-height: 30px;
                    background-color: #ccc;
                }
            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
</style>

