import React, { Component } from 'react'

export default class ChildComp extends Component {

    clickHandler = () =>{
        this.props.parentRollBack("Welcome to KGF");
    };
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}
