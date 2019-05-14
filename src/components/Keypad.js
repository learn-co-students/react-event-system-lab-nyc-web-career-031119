// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

  onTypingPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.onTypingPassword} />
    )
  }
}

export default Keypad
