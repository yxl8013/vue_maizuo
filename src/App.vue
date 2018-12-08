<template>
  <div id="app">
    <Header></Header>
   <!--  <Home></Home> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/common/Header.vue'
import Home from './components/page/home/Home.vue'
import Movie from './components/page/movie/Movie.vue'
import My from './components/page/mypage/My.vue'
import Detail from './components/page/detail/Detail.vue'

export default {
  name: 'App',
  components: {
      Header,
      Home,
      Movie,
      My,
      Detail
  }
}
</script>

<style>



</style>
