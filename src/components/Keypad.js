// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{

  keyInput = () => {
    console.log('Entering password...')
  }

  render(){
    return <div> <input type="password" onKeyUp={this.keyInput} /> </div>
  }

}

export default Keypad
