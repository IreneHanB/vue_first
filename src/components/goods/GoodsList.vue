<template>
    <div class="good-list">
        <div class="goods-item">
            <img src="http://img.kaiyanapp.com/57472e13fd2b6c9655c8a600597daf4d.png?imageMogr2/quality/60/format/jpg" alt="">
            <h1 class="title">1111</h1>
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
        <div class="goods-item">
            <img src="http://img.kaiyanapp.com/57472e13fd2b6c9655c8a600597daf4d.png?imageMogr2/quality/60/format/jpg" alt="">
            <h1 class="title"></h1>
            <div class="info">
                <p class="price">
                    <span class="now"></span>
                    <span class="old"></span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余70件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http://img.kaiyanapp.com/57472e13fd2b6c9655c8a600597daf4d.png?imageMogr2/quality/60/format/jpg" alt="">
            <h1 class="title"></h1>
            <div class="info">
                <p class="price">
                    <span class="now"></span>
                    <span class="old"></span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余70件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
