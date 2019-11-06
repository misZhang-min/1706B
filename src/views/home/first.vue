<template>
  <div class="home">
    <div class="routs">
      <div class="ipt"><input type="text" placeholder="搜索"/><span class="ti">提问</span></div>
      <div class="rot">
          <router-link to="/home/first/close" tag="span">关注</router-link>
          <router-link to="/home/first/tui" tag="span">推送</router-link>
          <router-link to="/home/first/hot" tag="span">热榜</router-link>
      </div>
    </div>
    <p id="id"></p>
    <div class="text">
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
   *{
       padding: 0;
       margin: 0;
       list-style: none;
   } 
   .home{
       width:100%;
       height: 100%;
       display: flex;
       flex-direction: column;
   }
   .routs{
       width:100%;
       height: 100px;
       display: flex;
       flex-direction: column;
   }
   .ti{
       line-height: 50px;
       color:#0084FF;
       margin-left: 10px;
   }
   .ipt{
       width: 100%;
       height: 50px;
       border-bottom: 1px solid #ccc;
      
   }
   input{
       width:70%;
       height: 30px;
       margin-top:5px;
       border: none;
       background: #EBEBEB;
       border-radius: 5px;
       margin-left:30px;
       padding-left:20px;
   }
   .rot{
       display: flex;
       justify-content: space-around;
       line-height: 50px;
       width: 100%;
       height: 50px;
   }
   .text{
       flex:1;
       overflow: auto;
   }
   #id{
       width:100%;
       height: 10px;
       background:#ccc;
   }
</style>