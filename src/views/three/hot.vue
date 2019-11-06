<template>
    <div class="close">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="left">
            <p class="p1"><img :src="item.head"/><span class="sp">{{item.use}}</span></p>
            <p class="p2">{{item.name}}</p>
            <p class="p3">{{item.text}}</p>
            <p class="p4"><span class="spn1">{{item.zan}}赞同</span><span class="spn2">{{item.ping}}评论</span></p>
          </div>
          <div class="right">
            <img :src="item.img"/> 
            <p class="p5">...</p>
          </div> 
        </li> 
      </ul>
    </div>
</template>
<script>
import mock from '../../assets/mock/data.json'
export default {
  data(){
    return {
       list:mock[1].hot 
    }
  },
  created(){
     
  } 
}
</script>
<style lang="scss" scoped>
  ul li {
       width:100%;
       height: 200px;
       display: flex;
       border-bottom: 8px solid #ccc;
    }
 
 .left{
        flex:5;
        padding-left:13px;
    .p1{
           width:100%;
           height: 40px;
           color:#ccc;
           font-size: 15px;
         
           padding-bottom: 7px;
           display: flex;
           
        img{
            width:20px;
            height: 20px;
            border-radius: 50px;
            padding-top:12px;
            margin-right: 5px;
        }
        .sp{
            padding-top:12px;  
        }
      }
      .p2{
          width:100%;
          height:30px;
          font-size:19px;
          font-weight: 800;
         
          line-height: 30px;
      }
      .p3{
          margin-top:8px;
          font-size: 17px;
          color:#4E4E4E;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp:3;
          overflow: hidden;
          line-height:23px;
          font-weight: 530;
      }
      .p4{
          width:100%;
         
          font-size:16px;
          color:#ccc;
          line-height:70px;
      }
       
    }
 .right{
        flex:3;
        .p5{
            color:#aaa;
            font-size:24px;
            margin-left:118px;
        }
 }
    
  .right{
      img{
          width:130px;
          height:80px;
          border-radius:7px;
          margin-top:82px;
          margin-left:10px;
      } 
    } 
</style>