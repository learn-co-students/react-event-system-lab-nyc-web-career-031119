// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{

    blurFunc = (e)=>{
        console.log('Hey! Eyes on me!')
    }
    focusFunc =(e)=>{
        console.log('Good!')
    }


    render(){
        return <button onFocus={(e)=>this.focusFunc(e)} onBlur={(e)=> this.blurFunc(e)}>
            "hello World"
        </button>
    }
}
export default EyesOnMe
