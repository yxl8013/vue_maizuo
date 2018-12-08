<template>
    <div>
      <transition
        enter-active-class='animated fadeIn'
        leave-active-class='animated fadeOut'

      >
        <div class="gotop" @click='totop' v-show='show'>
          top
        </div>
      </transition>  
      
    </div>
    
  
</template>
<script>
  export default{
    name:'Gotop',
    data(){
      return {
        show:false
      }
    },
    created(){
      window.addEventListener('scroll',()=>{
        if(window.scrollY>=500){
          if(this.show==false){
             this.show = true;
          }
        }else{
          if(this.show == true){
            this.show = false;
          }
        }
      })
    },
    methods:{
      totop(){
        window.scrollTo(0,0);
      }
    }
  }

</script>

<style lang="less" scoped>
@import url("../../../styles/main.less");
.gotop{
  .w(30);
  .h(30);
  background-color: #282828;
  border-radius:50%;
  position: fixed;
  bottom:30px;
  right:30px;
  .fs(12);
  color:#fff;
  text-align:center;
  .lh(30);
}



</style>