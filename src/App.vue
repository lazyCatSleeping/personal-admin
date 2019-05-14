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
import HelloWorld from './components/HelloWorld.vue'
import AdHead from './components/head/AdHead.vue'


var initPage;

var getNavData;

initPage = function(){
}

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
      selectedNav: 0
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