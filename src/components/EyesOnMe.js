// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  render () {
    return (
      <button onFocus={ () => {console.log("Good!")} } onBlur={ () => {console.log("Hey! Eyes on me!")}} >HIT ME</button>
    )
  }

}

export default EyesOnMe
