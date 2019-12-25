import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import Bubble from '@/components/Bubble'
// import AgeDistribution from '@/components/AgeDistribution'
// import C from '@/components/C'
// import statistics from '@/components/statistics'
// import M from '@/components/M'
import Swiper from '@/components/Swiper'


import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    // { path: '/bubble', name: 'Bubble', component: Bubble },
    // { path: '/ageDistribution', name: 'AgeDistribution', component: AgeDistribution },
    // { path: '/c', name: 'C', component: C },
    // { path: '/statistics', name: 'statistics', component: statistics },
    // { path: '/m', name: 'M', component: M },
    { path: '/swiper', name: 'Swiper', component: Swiper },
    {path:'/home',name:'home',component:home}
  ]
})
