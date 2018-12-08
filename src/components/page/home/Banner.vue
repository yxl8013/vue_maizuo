<template>
	<div class="banner">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for='(item ,index) in bannerlist' :key='index'>
		        	<img :src="item.imageUrl">
		        </div>
		    </div>
		 
		    <div class="swiper-pagination"></div>
		</div>
	</div>

</template>

<script>
import Swiper from 'swiper';
import Axios from 'axios';
import Vue from 'vue';
export default{
	name : 'Banner',
	data(){
		return {
			bannerlist:[]
		}

	},
	methods:{
		getBannerData(){
			//发ajax请求获取banner数据
			Axios.get('/api/v4/api/billboard/home',{})
				.then((res)=>{
					this.bannerlist = res.data.data.billboards;
				
					Vue.nextTick(()=>{
						this.initSwiper();
					})

				})
				.catch((err)=>{
					console.log(err);

				})
		},
		initSwiper(){
			var mySwiper = new Swiper ('.swiper-container', {
   
			    loop: true, // 循环模式选项
			    autoplay: true,
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    },   
			    // 如果需要滚动条
			    scrollbar: {
			      el: '.swiper-scrollbar',
			    },
  			})    
		}

	},
	created(){
		this.getBannerData();
			
	},
	mounted(){
	
	}
}

</script>

<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.css');
@import url("../../../styles/main.less");
	.swiper-container {
	    img{
	    	.w(375);
	    }
	}  
	




</style>