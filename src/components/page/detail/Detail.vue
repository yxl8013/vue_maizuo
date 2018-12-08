<template>
	<div class="detail">
		<div>
			<img v-lazy='obj.cover.origin'>
		</div>
		<div class="box">
			<h3><span></span>影片简介</h3>
			<p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:<span> {{obj.director}}</span></p>
			<p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:<span v-for='(item,index) in obj.actors' :key='index'> {{item.name}}|</span></p>
			<p>地区语言: {{obj.nation}}({{obj.language}})</p>
			<p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型: {{obj.category}}</p>
			<p>上映日期: {{obj.premiereAt|getDate}}上映</p>
			<p>{{obj.synopsis}}</p>
		</div>
		<div class="buy">立即购票</div>
		
	</div>
	

</template>

<script>
import { Lazyload } from 'mint-ui'; //懒加载
import Vue from 'vue';
Vue.use(Lazyload);	
import { Toast } from 'mint-ui';	
export default{
	name:'Detail',
	components:{
		
	},
	data(){
		return{
			obj : {cover:{origin:''}}
		}
	},
	methods:{
		getDetail(){
			let toast = Toast({
			  message: '数据加载中...',
			  duration: -1,
			  iconClass: 'fa fa-spinner fa-spin'
			});
			let id = this.$route.params.id;
			this.$axios.get('/api/v4/api/film/'+id,{
				params:{
					__t: new Date().getTime()
				}
			}).then((res)=>{
				console.log(res.data.data.film);
				this.obj = res.data.data.film;
				toast.close();

			}).catch((err)=>{
				console.log(err);
				toast.close();
			})
		}
		
	},
	created(){
		this.getDetail();
	}
}


</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.detail{
	.padding(51,0,0,0);
	.fs(12);
	img{
		.w(375);
	}
	.box{
		h3{
			.mr-t(16);
			.mr-b(16);
			.fs(16);
			.padding(0,0,0,23);
			position: relative;
			span{
				display: inline-block;
				position: absolute;
				.w(16);
				.h(20);
				background-color: orange;
				opacity: 0.7;
				.left(3);
				.top(0);
				user-select: none;
			}
		}
		p{
			.lh(20);
			.padding(0,20,0,20);
			overflow: hidden;
			margin: 8px 0 ;

		}
	}
	.buy{
		.fs(14);
    	.w(156);
    	.h(36);
    	.lh(36);
    	border: none;
    	background-color: #fe8233;
    	.b-r(18);
    	color: #fff;
    	margin:18px auto;
    	text-align: center;
	}
	
}
	



</style>