<template>
  <div id="app" class="container">
    <div id="head" class="row">
      <div class="ad-head col-12" id="ad-head">
        <div class="ad-head-icon col-12">
          <div class="ad-head-icon-img"></div>
          <div class="ad-head-icon-text">个人页面</div>
        </div>
        <div class="ad-nav col-12">
          <div class="ad-nav-elem" 
            v-for="nav in navs" 
            v-on:click="changeNav(nav)"
            :class="{active: nav.id == selectedNav}"
            :key="nav.id"
          >
            <router-link :to="nav.link">
              {{nav.text}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <hello-world></hello-world>
    <div id="foot">
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

// var initPage;

//获取导航数据
var getNavData = function(){
  navs = [{
    text: "首页",
    id: "000",
    link: "Index"
  },{
    text: "技术",
    id: "010",
    link: "Tech",
    child:[{
      text: "前端",
      id: "011",
      link: "Tech/Front"
    }]
  }];
  return navs;
};
var navs = getNavData();


// initPage = function(){
// }
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data:function(){
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