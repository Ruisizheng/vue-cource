<template>
  <div id="app">
    <div id="nav">
      <!-- 此处利用命名路由进行导航 -->
      <router-link v-bind:to="{name :'home'}">Home</router-link> |  
      <router-link :to="{name : 'about'}">About</router-link>
    </div>
    <transition-group :name='routerTransition'>
      <router-view key="default"/>
      <router-view key="email" name="email"/>
      <router-view key="tel"   name ="tel"/>
    </transition-group>
     
  </div>
</template>
<script>
  export default{
    data(){
      routerTransition:''
    },
    watch:{
      '$route' (to){
        to.query&& to.query.transitionName&&(this.routerTransition=to.query.transitionName) 
      }
    }
  }
</script>

<style lang="less">
  .route-enter{
    opacity: 0;
  }
  .route-enter-active{
    transition: 1s ease;
  }
  .route-enter-to{
    opacity: 1;
  }
  .route-leave{
    opacity: 0;
  }
  .route-leave-active{
    transition: 1s ease;
  }
  .route-leave-to{
    opacity: 1;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
