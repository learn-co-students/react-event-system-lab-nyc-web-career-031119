import React, { Component } from 'react';

export default class EyesOnMe extends Component {

    bloop() {
        console.log("Good!")
    }

    blam() {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return <button onFocus={this.bloop} onBlur={this.blam}>yoit</button>
    }


}
