<template>
  <div id="app" class="container">
    <div id="head" class="row">
      <ad-head :navs="navs" :selectedNav="selectedNav"></ad-head>
    </div>
    <HelloWorld />
    <div id="foot">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import AdHead from './components/head/AdHead.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var initPage;

var getNavData;

initPage = function(){
}
//获取导航数据
getNavData = function(){
  var navs = [{
    text: "首页",
    id: "000"
  },{
    text: "技术",
    id: "010",
    child:[{
      text: "前端",
      id: "011"
    }]
  }];
  return navs;
}
//定义路由
const User = {
  props: ['id']
}

export default {
  name: 'app',
  components: {
    HelloWorld,
    AdHead
  },
  data: function(){
    initPage();
    var navs = getNavData();
    return {
      navs: navs,
      selectedNav: "000"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>