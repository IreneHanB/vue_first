<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="最多吐槽120字" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment"> 发表评论</mt-button>
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
            comments:[],
            msg:''//评论输入的内容
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
        },
        postComment(){
            //发表评论
            if(this.msg.trim().length===0){
               return Toast("内容不能为空")
            }
            this.$http.post('https://www.easy-mock.com/mock/5cf7bb32f8c0832af378e0c1/books/postcomment/'+ this.$route.params.id,{content:this.mag}).then(function(result){
                if(result.body.status === 0){
                    var cmt={
                        user_name:"不要匿名",
                        add_time:Date.now(),
                        content:this.msg
                    };

                    // 存在问题
                    this.comments.unshift(cmt);
                    //console.log(this.comments.unshift(cmt));
                    this.msg="";
                }else{
                    Toast("发表失败")
                }
            });
        }
    },
    props:["id"]
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

