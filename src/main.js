//页面入口
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
//导入App根组件
import app from './App.vue'
Vue.use(MintUI)
import '../lib/css/mui.css'
import '../lib/css/icons-extra.css'
import router from './router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use( VueResource)


var vm = new Vue({
  el:'#app',
  render:c =>c(app),
  router
})