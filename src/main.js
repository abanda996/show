//页面入口
import Vue from 'vue'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//导入App根组件
import app from './App.vue'
Vue.use(MintUI)
import '../lib/css/mui.css'

var vm = new Vue({
  el:'#app',
  render:c =>c(app)
})