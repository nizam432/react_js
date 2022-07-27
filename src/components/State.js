import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export default class State extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0,
        }
      }   

handleIncrement=()=>{
    this.setState({
        count:this.state.count+1
    })
    
}

handleDecrement=()=>{
    this.setState({
        count:this.state.count-1
    });
}

  render() {
    const{count}=this.state
    return (
        <div>
       <Card className='card1'>
            <h1>Count2:{count}</h1>
            <Button  disabled={count===5?true:false} onClick={this.handleIncrement}>+</Button>
            <Button disabled={count===0?true:false} variant='danger' onClick={this.handleDecrement}>-</Button>
       </Card>

         </div>
    )
  }
}
