<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="最多吐槽120字" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：1021-22-33 12：12：12
                </div>
                <div class="cmt-body">
                    锄禾日当午，开开放接
                </div>

                <div class="cmt-title">
                    第一楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：1021-22-33 12：12：12
                </div>
                <div class="cmt-body">
                    锄禾日当午，开开放接
                </div>

                <div class="cmt-title">
                    第一楼 &nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：1021-22-33 12：12：12
                </div>
                <div class="cmt-body">
                    锄禾日当午，开开放接
                </div>

            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    
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

