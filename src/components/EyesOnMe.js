import React, { Component } from 'react';



//this create the EyesOnMe React component
export default class EyesOnMe extends Component {

  handleFocus = () => {
    console.log('Good!')
  }

  handleBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}> Eyes on ME</button>
    )
  }



}
