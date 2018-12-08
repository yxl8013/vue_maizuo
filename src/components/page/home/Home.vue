<template>
	<div class="home">
		<Banner></Banner>
		<Homelist v-for='(item ,index) in movie_type' :key='index' :type='item'></Homelist>

	</div>

</template>
<script>
import Banner from './Banner.vue';	
import Homelist from './Homelist.vue';	

export default {
	name :'Home',
	components : {
		Banner,Homelist
	},
	data(){
		return {
			movie_type:[{title:'正在热映',path:'now-playing'},{title:'即将上映',path:'coming-soon'}]
		}
	}

}

</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.home{
	.padding(51,0,0,0);
}



</style>