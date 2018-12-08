//路由文件的基本配置

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../components/page/home/Home.vue'
import Movie from '../components/page/movie/Movie.vue'
import My from '../components/page/mypage/My.vue'
import Detail from '../components/page/detail/Detail.vue'
import MyInfo from '../components/page/mypage/MyInfo.vue'
import Login from '../components/page/mypage/Login.vue'
let router = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'}, //重定向
		{path:'/home',component:Home,name:'home'},
		{path:'/movie',component:Movie,name:'movie'},
		{path:'/my',component:My,name:'my',children:[
			{path:'login',component:Login},
			{path:'myinfo',component:MyInfo}
		]},
		{path:'/detail/:id',component:Detail,name:'detail'},
	]

})
export default router 
