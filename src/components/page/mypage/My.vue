<template>
	<div class="my">
		<router-view></router-view>
	</div>
	

</template>

<script>
import Login from './Login.vue'
import MyInfo from './MyInfo.vue'	
export default{
	name:'My',
	components:{
		Login,MyInfo
	},
	created(){
		let isLogin = false;
		if(isLogin){
			this.$router.push('/my/myinfo')
		}else{
			this.$router.push('/my/login')
		}
	}
}


</script>
<style lang="less" scoped>
@import url("../../../styles/main.less");
.my{
	.padding(51,0,0,0);
}
	



</style>