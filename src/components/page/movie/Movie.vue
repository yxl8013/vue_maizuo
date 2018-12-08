<template>
	<div class="movie">
		<div class="movie-nav">
			<ul>
				<!-- <li class="sel">正在热映</li>
				<li>即将上映</li> -->
				<li v-for='(item ,index) in filmsNav' :key='index' :class='item.path==sel?"sel":""' @click='toggle(item.path)'>{{item.name}}</li>
			</ul>
		</div>
		<Movielist :path='sel'></Movielist>
		<Gotop></Gotop>
		
	</div>
	

</template>

<script>
import Movielist from './Movielist.vue'	
import Gotop from './Gotop.vue'	
export default{
	name:'Movie',
	components:{
		Movielist,Gotop
	},
	data(){
		return{
			filmsNav:[{path:'/now-playing',name:'正在热映'},{path:'/coming-soon',name:'即将上映'}],
			sel :'/now-playing'
		}
	},
	methods:{
		toggle(val){
			this.sel = val;
		}
	}
}


</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.movie{
	.padding(51,0,0,0);
	background-color: #fff;
	.movie-nav{
		ul{
	      .w(350);
	      display: flex;
	      justify-content: center;
	      border-bottom:1px solid orange;
	      margin: 0px auto;
	      li{
	        .w(175);
	        .h(45);
	        
	         .fs(16);
	         border-bottom:3px solid #fff;
	         .lh(45);
	         text-align:center;

	      }
	      .sel{
	        border-bottom:3px solid #fe6e00;
	        color:#fe6e00;
	      }
     	}
	}


}
	



</style>