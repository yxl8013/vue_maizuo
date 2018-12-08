<template>
	<ul class="movie-list"
 		v-infinite-scroll="loadMore"
  		infinite-scroll-disabled="loading"
  		infinite-scroll-distance="10">
	
		<li v-for='(item ,index) in movielist' :key='index' @click='goDetail(item.id)'>
			<div><img v-lazy="item.poster.origin"></div>
			<div class="itembox">
				<p class="name">{{item.name}}</p>
				<p class='desc'>{{item.intro}}</p>
				<p class="desc" v-if='path=="/now-playing"'><span><i>{{item.cinemaCount}}</i>家影院上映</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{item.watchCount}}人购票</span></p>
				<p v-if='path=="/coming-soon"' class="orange">{{item.premiereAt|getDate}}上映</p>
			</div>
			<div class="right">
				<span class='grade'>{{item.grade}}</span>
				<i class="fa fa-angle-right" aria-hidden="true"></i>
			</div>
		</li>
	</ul>
	

</template>

<script>
import Vue from 'vue';
import { Toast } from 'mint-ui';	
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import { Lazyload } from 'mint-ui'; //懒加载
Vue.use(Lazyload);	
export default{
	name:'Movielist',
	data(){
		return{
			movielist:[],
			loading:false,
			current:0,
			total:100
		}
	},
	props:['path'],
	watch:{
		path: function(newpath,oldpath){
			this.current =0;
			this.total = 100;
			this.movielist = [];
			this.getData();
		}

	},
	methods:{
		loadMore(){
			this.getData();


		},
		goDetail(id){
			this.$router.push('/detail/'+id);
		},
		getData(){
			if(this.current==this.total){
				Toast({
					  message: '已经到底了',
					  duration: 500,
					  position: 'bottom'
				})
				return false ;
			}
			let toast = Toast({
			  message: '数据加载中...',
			  duration: -1,
			  iconClass: 'fa fa-spinner fa-spin'
			});
			this.loading = true ;
			this.$axios.get('/api/v4/api/film'+this.path,{
				params:{
					page:this.current+1,
					count:7
				}
			}).then((res)=>{
				this.loading = false ;
				toast.close();
				console.log(res.data.data);
				this.current = res.data.data.page.current;
				this.total = res.data.data.page.total;
				this.movielist = this.movielist.concat(res.data.data.films);

			}).catch((err)=>{
				this.loading = false ;
				toast.close();
				console.log(err);
			})
		}
	},
	created(){
	
	}
}


</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.movie-list{
	.fs(14);
	.w(345);
	margin:0 auto;
	.orange{
		color:orange;
	}
	li{
		.padding(20,0,20,0);
    	border-bottom: dashed 1px #c9c9c9;
    	cursor: pointer;
    	display: flex;
    	position: relative;
    	img{
    		.w(60);
    	}
    	.itembox{
    		.padding(0,0,0,15);
    	}
    	.name{
    		.fs(16);
    		.lh(32);
    		.w(220);
    		overflow: hidden;
    	}
    	.desc{
    		.fs(12);
    		color: #8e8e8e;
    		.lh(24);
    		.h(24);
    		i{
    			color: #8aa2bf;
    		}
    	}
    	.right{
    		position: absolute;
    		right:18px;
    	}
    	.grade{
    		.fs(16);
   			.lh(32);
    		color: #fc7103;
    	}
	}
}

	



</style>