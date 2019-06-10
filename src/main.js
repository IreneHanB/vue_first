import Vue from 'vue'


import VueResource from 'vue-resource'
Vue.use(VueResource) 
//Vue.http.options.root = 'https://www.apiopen.top/'

//导入格式化时间的插件
import moment from 'moment'


//定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})



import router from './router.js'


import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'

// import { Header,Swipe,SwipeItem,Button } from "mint-ui"
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe),
// Vue.component(SwipeItem.name,SwipeItem),
// Vue.component(Button.name,Button)
// import { Lazyload } from 'mint-ui';
//Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

// with parameters install
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

import app from './App.vue'

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})