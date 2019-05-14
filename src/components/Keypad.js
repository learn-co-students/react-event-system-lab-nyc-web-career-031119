import React from 'react';

class Keypad extends React.Component {

  inputHandler = () => {console.log('Entering password...')}
  render(){
    return <input type="password" onKeyUp={this.inputHandler}/>
  }
}

export default Keypad;
