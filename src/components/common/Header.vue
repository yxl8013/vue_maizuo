<template>
    <div class="header">
      <div class="box">
        <div class="left">
          <div class="nav-icon" @click='navShow'>
            <a href="javascript:;"><i class="fa fa-bars" aria-hidden="true"></i></a>
          </div>
          <div class="msg">
            <a href="javascript:;"><h1>{{msg}}</h1></a>
          </div>
        </div>
        <div class="right">
          <div class="city">
            <a href="javascript:;"><span>{{city}}</span><i class="fa fa-angle-down" aria-hidden="true"></i></a>
          </div>
          <div class="user-icon">
             <a href="javascript:;"><i class="fa fa-user-o" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
       <Slider :show='isShow' @hide='hide' :hide='hide'></Slider>
    </div>
 

</template>

<script>
import Slider from './Slider.vue';
export default {
  name: 'Header',
  components: {
    Slider
  },
  methods:{
    navShow(){
      this.isShow = !this.isShow; //切换显示隐藏
    },
    hide(){
      this.isShow = false;
    }

  },
  data () {
    return {
      msg: '卖座电影',
      city: '广州',
      isShow: false //侧边栏是否显示
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
@import url('../../styles/main.less');
    .header{
      position: fixed;
      top:0;
      left:0;
      right:0;
      z-index:100;
      .box{
          .lh(50);
          .h(50);
          .fs(14);
          .w(375);
          color: @fc-header;
          background: @bg-header;
          border-bottom: 1px solid #222;
          box-shadow: 1px 0px 1px #363636;
          // position: fixed;
          // z-index:1000;
          // top: 0;
          // right: 0;
          // left: 0;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          .left,.right{
            display: flex;
            justify-content: space-around;
            text-align: center;
          }
          h1{
            display: inline-block;
            color:#efefef;
            .fs(16);
            font:'"SimSun","宋体","Arial Narrow",HELVETICA';

          }
          .nav-icon{
            .w(48);
            border-right: 1px solid #222;
            box-shadow: 1px 0 1px #363636;
            color: #999;
          }
          .msg{
            .w(84);
          }
          .city{
            .w(56);
            span{
              margin-right:5px;
            }
          }
          .user-icon{
            .w(48);
          }
      }
      


    }
    
   

</style>

