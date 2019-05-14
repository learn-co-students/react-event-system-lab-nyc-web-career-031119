import React, { Component} from 'react'

export default class Keypad extends Component {

  constructor(props, context) {
    super(props, context);
  }

  handleKeyUp = () => {
    console.log('Entering password...')
  };

  render() {
    return (
      <div>

        <input type="password" onKeyUp={this.handleKeyUp}/>
      </div>
    );
  }
}
