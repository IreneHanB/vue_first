import VueRouter from 'vue-router'

import Vue from 'vue'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'


Vue.use(VueRouter)

var router = new VueRouter({
    routes:[
        // path中没有./home  写成/home ！！！ 一定要和页面上写的对应起来
        {path:'/',redirect:'/home'},
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/shopcar',component:ShopcarContainer},
       {path:'/search',component:SearchContainer},

       {path:'/home/newslist',component:NewsList}

    ],
    linkActiveClass:'mui-active'
})

// 把router路由对象暴露出去
export default router