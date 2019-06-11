import VueRouter from 'vue-router'

import Vue from 'vue'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        // path中没有./home  写成/home ！！！ 一定要和页面上写的对应起来
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/search',component:SearchContainer},

        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo/:id',component:Newsinfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodsinfo',component:GoodsInfo}
    ],
    linkActiveClass:'mui-active'
})

// 把router路由对象暴露出去
export default router