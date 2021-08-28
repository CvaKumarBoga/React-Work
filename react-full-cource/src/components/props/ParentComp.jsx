import React, { Component } from 'react'
import ChildComp from './ChildComp'

export default class ParentComp extends Component {
    state = { msg:'' }

    handleChild = (childData) => {
        this.setState({msg : childData})
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <ChildComp parentRollBack = {this.handleChild}></ChildComp>
            </div>
        )
    }
}
