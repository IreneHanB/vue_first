import Vue from 'vue'

import router from './router.js'


import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'

import { Header } from "mint-ui"
Vue.component(Header.name,Header);


import app from './App.vue'

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})