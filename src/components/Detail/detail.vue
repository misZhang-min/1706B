<template>
  <div class="detail">
    <div class="nav">
      <span class="back">返回</span>
      <span class="spn1"></span>
      <span class="spn2">写回答</span>
      <span class="spn3">...</span>
    </div>
    <div class="main">
    
    </div>
  </div>
</template>
<script>
export default {
   data(){
      return {
        
      }
   } ,
   created(){
    let list=this.$route.query.item
    console.log(list)
   },
   methods:{

   }
}
</script>
<style lang="scss" scoped>
  *{
     padding: 0;
     margin: 0;
     list-style: none;
  }
  html,body{
    width:100%;
    height: 100%; 
  }
  .detail{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column
  }
  .nav{
    width:100%;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    .spn2{
        color:#0084FF;
        font-size: 20px;
    }
    .spn3{
       font-size:35px;
       font-weight: 750;
       margin-top:-8px;
    }
  }
  .main{
    flex:1;
    overflow: auto;
  }
</style>