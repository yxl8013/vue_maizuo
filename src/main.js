// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './styles/reset.css' //引入重置样式
import '../static/lib/animate.css'

import Axios from 'axios';

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;
//全局注册一个过滤器 时间戳=>月日
Vue.filter('getDate',(value)=>{
	let d = new Date(value);
	let month = d.getMonth()+1;
	let day = d.getDate();
	return month+'月'+day+'日';
})


//引入路由 然后挂载
import router from './router/index.js'

//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
