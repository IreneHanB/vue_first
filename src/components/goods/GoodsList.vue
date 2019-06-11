<template>
    <div class="good-list">
        <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.artiostid" to="/home/goodsinfo" tag="div">
            <img :src="item.avatar" alt="">
            <h1 class="title">{{item.name}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">111</span>
                    <span class="old">111</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余70件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button> -->

        <div class="goods-item" v-for="item in goodslist" :key="item.artiostid" to="/home/goodsinfo" @click="goDetail(item.id)" >
            <img :src="item.avatar" alt="">
            <h1 class="title">{{item.name}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">111</span>
                    <span class="old">111</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余70件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //data是往自己组件内部挂载一些私有数据
            //pageIndex:1,
            goodslist:[]
        }
    },
    created(){
        this.getGoodsList();
    },
    methods:{
        getGoodsList(){
            this.$http.get('https://api.apiopen.top/musicBroadcasting').then(result=>{
                //console.log(result.body);
                this.goodslist=result.body.result[1].channellist
            })
        },
        getMore(){
            this.$http.get('https://api.apiopen.top/musicBroadcasting').then(result=>{
                this.goodslist=this.goodslist.concat(result.body.result[1].channellist);
            })
        },
        goDetail(id){
            //使用JS的形式进行路由导航
            this.$router.push('/home/goodsinfo')
        }
    }
    
}
</script>
<style lang="scss" scoped>
.good-list{
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
    .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
        img{
            width:100%;
        }
        .title{
            font-size:14px;
        }
        .info{
            background-color: #ccc;
            p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
