<template>
<!-- 一级和二级路由 -->
  <div class="home">
      <router-link to="/home/first" tag="span">首页</router-link>
      <router-link to="/home/idea" tag="span">想法</router-link>
      <router-link to="/home/school" tag="span">大学</router-link>
      <router-link to="/home/mess" tag="span">消息</router-link>
      <router-link to="/home/mine" tag="span">我的</router-link>
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
  .home{
    width:100%;
    height: 50px;
    display: flex;
    border-top:1px solid #ccc;
    justify-content: space-around;
    line-height: 50px;
  }
</style>
