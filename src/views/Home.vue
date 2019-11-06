<template>
  <div class="home">
    <div class="two"><router-view/></div>
    <div class="rout">
      <router-link to="/home/first" tag="span">首页</router-link>
      <router-link to="/home/idea" tag="span">思想</router-link>
      <router-link to="/home/big" tag="span">大学</router-link>
      <router-link to="/home/mess" tag="span">消息</router-link>
      <router-link to="/home/my" tag="span">我的</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
    
  }
}
</script>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    list-style: none;
  }
  html,body{
    width:100%;
    height:100%;
  }
  .home{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .two{
    flex:1;
    overflow: auto;
  }
  .rout{
    width:100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    border-top:1px solid #ccc
  }
</style>
