import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleClick(){
        this.setState({
            count:this.state.count + 1,
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <Button onClick={this.handleClick.bind(this)}>Increase</Button>
      </div>
    )
  }
}
export default EventBinding