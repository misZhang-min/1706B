import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';
class IndexPage extends React.Component{
   render(){
     let  {changeNum}=this.props
     return (
       <div>
         <div>
           <button onClick={()=>changeNum('+')}>+</button>
            <span>{this.props.num}</span>
           <button onClick={()=>changeNum('-')}>-</button>
         </div>
       </div>
     )
   }
}
IndexPage.propTypes = {
  num:Number
};
IndexPage.defaultProps={
  num:1000
}
const mapStateToProps=state=>{
  return {
    num:state.num.num
  }
}
const mapDispathchToProps=dispatch=>{
   return {
     changeNum:type=>dispatch({
       type:'num/changeNum',
       payload:{type}
     })
   }
}

export default connect(mapStateToProps,mapDispathchToProps)(IndexPage);
