<template>
	<div class="slider">
		<transition 
			enter-active-class ='animated slideInLeft'
			leave-active-class ='animated slideOutLeft'
		>
			<ul v-show='show'>
				<!-- <li v-for='(item,index) in navlist' :key='index'><span>{{item}}</span><i class="fa fa-angle-right" aria-hidden="true"></i></li> -->
			
				<!-- <router-link tag='li' v-for='(item,index) in navlist' :key='index' :to='item.path'>
					<span>{{item.name}}</span><i class="fa fa-angle-right" aria-hidden="true"></i>
				</router-link> -->
				<li v-for='(item,index) in navlist' :key='index' @click='gopage(item.path)'>
					<span>{{item.name}}</span><i class="fa fa-angle-right" aria-hidden="true"></i>
				</li>

			</ul>
		</transition>	
		<transition
			enter-active-class ='animated fadeIn'
			leave-active-class ='animated fadeOut'

		>
			<div class="mask" v-show='show' @click='hide'></div>	

		</transition>

		

	</div>

</template>
<script>
	export default {
		name :'Slider',
		props:['show','hide'],
		methods:{
			gopage(path){
				this.$emit('hide');
				this.$router.push(path);
			}
		},
		data(){
			return{
				navlist : [{name:'首页',path:'/home'},{name:'影片',path:'/movie'},{name:'影城',path:'/'},{name:'商城',path:'/'},{name:'我的',path:'/my'},{name:'卖座卡',path:'/'}]
				
			}
		}

	}

</script>
<style lang="less" scoped>
@import url('../../styles/main.less');
	.slider{
		ul{
			position: fixed;
			z-index: 100;
			.top(50);
			bottom:0;
			left:0;
			.right(110);
			background: @bg-header;
			color: @fc-nav;
			li{
				display: flex;
				justify-content: space-between;
				.h(50);
				.padding(0,16,0,16);
				.fs(14);
				align-items: center;
				border-bottom: 1px dotted #333;
			}

		}
		.mask{
			position: fixed;
			left:0;
			right:0;
			bottom:0;
			.top(50);
			background:rgba(0,0,0,.5);
		}
	}


</style>