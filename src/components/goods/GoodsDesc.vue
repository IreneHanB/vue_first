<template>
    <div>
        <h3>desc</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            info:[]//
        }
    },
    created(){
        this.getGoodsDesc();
    },
    methods:{
        getGoodsDesc(){
            this.$http.get().then(result=>{
                //''+this.$route.params.id
                //...
            })
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
