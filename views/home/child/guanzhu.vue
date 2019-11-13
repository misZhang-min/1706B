<template>
  <div class="list">
      <!-- 渲染列表 -->
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="btnspan(item)">
          <p>{{item.name}}</p>
          <p>{{item.text}}</p> 
        </li>
      </ul>
   </div>
</template>
<script>
import Mock from '../../../assets/mock/data.json'
export default {
  data(){
    return {
      list:Mock
    }
  },
  created(){
    console.log(this.list)  
  },
  methods: {
     btnspan(item){
       console.log(item)
     } 
  }, 
}
</script>
<style lang="scss">
  ul li{
      width:100%;
      height: 150px;
      border-bottom: 1px solid red;
      font-size:18px;
  }  
</style>