// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import echarts from 'echarts'
// import BMap from 'vue-baidu-map'
import 'echarts/extension/bmap/bmap'
// import 'lib-flexible/flexible'
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.use(BMap,{ak:'ijZOCDeMMeaDM7EClzihmXT4I9yjZsAN'})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
