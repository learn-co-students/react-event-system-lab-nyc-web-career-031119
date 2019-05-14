import React from 'react';

class EyesOnMe extends React.Component {

  buttonHandler = (message) => {
    console.log(message);
  }

  render(){
    return (
      <button
        type="button"
        onFocus={() => {this.buttonHandler("Good!")}}
        onBlur={() => {this.buttonHandler("Hey! Eyes on me!")}}
      >
      </button>
    )
  }
}

export default EyesOnMe;
