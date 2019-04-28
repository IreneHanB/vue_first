import Vue from 'vue'


import VueResource from 'vue-resource'
Vue.use(VueResource) 
//Vue.http.options.root = 'https://www.apiopen.top/'

import router from './router.js'


import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'

import { Header,Swipe,SwipeItem } from "mint-ui"
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe),
Vue.component(SwipeItem.name,SwipeItem)


import app from './App.vue'

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})