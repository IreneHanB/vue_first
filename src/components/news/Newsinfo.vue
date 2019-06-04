<template>
    <div class="newsinfo-container">
        
        <h1 class="title">{{newsinfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.ptime | dataFormat}}</span>
            <span>点击次数:{{newsinfo.tcount}}</span>
        </p>
        <p>
            <span>作者：{{newsinfo.digest}}</span>
        </p>
        <hr>
        <p class="content" v-html="newsinfo.link"></p>

        <div class="comment-container">
            <comment-box></comment-box>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  data(){
      return {
         // 没有r 不是router 啊宝贝！ 
          id:this.$route.params.docid,
          newsinfo:[]
      }
  },
  created(){
      this.getnewsInfo();
  },
  components:{
      'comment-box':comment
  },
  methods:{
      getnewsInfo(){
          this.$http.get('https://www.apiopen.top/journalismApi').then(result=>{
              console.log(result.body.data)
              if(result.body.code = 200){
                  
                  this.newsinfo = result.body.data.tech[0];
                  
                  //console.log(result.body.data.tech)
                  //this.newsinfo = result.body.data.tech
              }else{
                  Toast('获取失败')
              }
          })
      }
  } 
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 8px;
    .title{
        font-size: 16px;
        text-align: center
    }
    .subtitle{
        display: flex;
        justify-content:space-between;
        font-size: 13px;
        color:#226aff;
    }
}
</style>

  

