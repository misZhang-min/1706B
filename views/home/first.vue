<template>
  <div class="first">
    <div class="ipt"><input type="text" placeholder="高考志愿填报"/></div>
    <p class="p1"></p>
  </div>  
</template>
<script>
import Mock from '../../assets/mock/data.json'
export default {
  data(){
    return {
      list:Mock
    }
  },
  created(){
      
  },
  methods: {
      
  }, 
}
</script>
<style lang="scss">
  *{
      padding: 0;
      margin: 0;
      list-style: none;
  } 
  .ipt{
    width:100%;
    height:60px;
    border-bottom: 1px solid #cccccc;
  }
  input{
    width:70%;
    height: 35px;
    margin-top: 10px;
    padding-left: 50px;
    border-radius: 5px;
    border:1px solid #ccc;
  }
 
  .p1{
    width:100%;
    height: 15px;
    background: #ccc;
  }
</style>