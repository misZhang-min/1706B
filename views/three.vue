<template>
 <!-- 三级路由 -->
    <div class="nav">
       <router-link to="/home/first/guan" tag="span">关注</router-link>  
       <router-link to="/home/first/tui" tag="span">推荐</router-link> 
       <router-link to="/home/first/hot" tag="span">热榜</router-link> 
    </div>   
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
   .nav{
    width:100%;
    height:50px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
  }  
</style>