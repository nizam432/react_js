import React, { Component } from 'react'

class EventHandler extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      changeValue:''
    }
  }
  handleOnChange=(e)=>{
      this.setState({
        changeValue:this.target.value, 
      })
      
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleOnChange} />
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}

export default  EventHandler