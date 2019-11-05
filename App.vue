<template>
  <div id="app">
    <div class="main">
      
       <router-view/>
        <three/>
    </div>
    <div id="nav">
      <home/>
    </div>
    
  </div>
</template>
<script>
import home from './views/Home'
import three from './views/three'
export default {
  components:{
    home,
    three
  }
}
</script>
<style lang="scss">
html,body{
   width:100%;
   height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main{
  flex:1;
  overflow: auto;
}
</style>
