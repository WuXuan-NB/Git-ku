import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class  IndexPage extends React.Component{
 
  
  render(){
    console.log(this.props);
    
    const {changeNum} =this.props
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
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
const a=state=>{
  console.log(state);
  return{
    num:state.num.num
  }
  
}

const b=dispatch=>{
  return{
    changeNum:type=>dispatch({
      type:'num/changeNum',
      payload:{type}
    })
  };
  
}

export default connect(a,b)(IndexPage);
