<!-- https://m.maizuo.com/v4/api/film/now-playing?__t=1542439651514&page=1&count=5 -->
<!-- https://m.maizuo.com/v4/api/film/coming-soon?__t=1542439651521&page=1&count=3 -->

<template>
	<div class="homelist">
		<div class="ff">
			<div class="ss">
				{{type.title}}
			</div>
		</div>
		<ul>
			<li v-for='(item,index) in movielist' :key='index' @click='goDetail(item.id)'>
				<div><img v-lazy="item.cover.origin"></div>
				<div class="contain">
					<div class="left">
						<p>{{item.name}}</p>
						<p class="jia" v-if='type.title==="正在热映"?true:false'>{{item.cinemaCount}}家电影院上映  {{item.watchCount
						}}人购票</p>
					</div>
					<div class="right">
						<span v-if='type.title==="正在热映"?false:true'>{{item.premiereAt|getDate}}上映</span>
						<i v-if='type.title==="正在热映"?true:false'>{{item.grade}}</i>
						
					</div>
				</div>
			</li>
		</ul>
		<div class="more-films" @click='gomovieList'>
			更多{{type.title}}电影
		</div>

	</div>

</template>
<script>
import { Lazyload } from 'mint-ui'; //懒加载
import Vue from 'vue';
Vue.use(Lazyload);	
export default {
	name :'Homelist',
	components : {
		
	},
	data(){
		return {
			movielist:[]
		
		}
	},
	props:['type'],
	methods:{
		getData(){
			this.$axios.get('/api/v4/api/film/'+this.type.path,{
				params:{__t : new Date().getTime(),
				page :1,
				count :5}
			}).then((res)=>{
				this.movielist = res.data.data.films;
			

			}).catch((err)=>{
				console.log(err);
			})
		},
		goDetail(id){
			console.log(id);
			this.$router.push('/detail/'+id);
		},
		gomovieList(){
			this.$router.push('/movie');
		}
	},
	created(){
		this.getData();
	}

}

</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.homelist{
	.ff{
		position: relative;
    	.mr-t(30);
    	.mr-b(30);
    	border-bottom: 1px solid #a8a8a8;
    	.ss{
    		.w(65);
		    .h(20);
		    margin: 0 auto;
		    .mr-b(-10);
		    border-radius: 5px;
		    .fs(10);
		    .lh(20);
		    text-align: center;
		    color: #eee;
		    background-color: #a7a7a7;
    	}
	}

	ul{
		li{
			.w(341);
			.margin(0,17,17,17);
			img{width:100%;}
			background-color: #fff;
			.contain{
				display: flex;
				justify-content: space-between;
				.padding(13,0,0,18);
				.fs(12);
				.left{
					.jia{
						.fs(12);
						.lh(16);
	    				color: #9a9a9a;
					}	
				}
				.right{
					 color: #f78360;
					 .lh(50);
   					 .fs(18);
   					.mr-r(15);
   					span{
   						.fs(12);
   					}
				}
			}
		}
	}
	.more-films{
		.w(160);  
		.h(30);
		.lh(30);
    	border: 1px solid #aaa;
    	border-radius:15px;
    	margin: 10px auto 30px;
    	text-align: center;
    	.fs(12);
    	color: #616161;
    	cursor: pointer;
	}
}



</style>