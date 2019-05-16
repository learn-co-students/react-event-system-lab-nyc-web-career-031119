// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
    pwFunc = (e)=>{
        console.log('Entering password...')
    }

    render(){
        return(
            <input type="password" onKeyUp={(e)=>this.pwFunc(e)}/>
        )
    }
}
export default Keypad