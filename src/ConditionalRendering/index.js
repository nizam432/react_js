import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginPage from './Login'

 class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:true
      }
    }
    
  render() {
    let element;
    const{isLogin}=this.state;
/*    if(this.state.isLogin){
        element=<HomePage />
    }else{
        element=<LoginPage />
    }
*/    

    return(
        <div>
            {isLogin? <HomePage />:<LoginPage />}
        </div>
    )
  }
}

export default ConditionalRendering