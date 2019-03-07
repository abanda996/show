
import VueRouter from 'vue-router'
import HomeContiner from './compoents/tabbar/HomeContiner.vue'
import MemberContiner from './compoents/tabbar/MemberContiner.vue'
import SearchContainer from './compoents/tabbar/SearchContainer.vue'
import ShopcarContainer from './compoents/tabbar/ShopcarContainer.vue'

var router = new VueRouter({
    routes:[
       {path:'/',redirect:'/home'},
     {path:'/home', component: HomeContiner},
     {path:'/member', component: MemberContiner},
     {path:'/search', component: SearchContainer },
     {path:'/shopcar', component: ShopcarContainer},

    ],
    linkActiveClass:'mui-active'
   })

   export default router