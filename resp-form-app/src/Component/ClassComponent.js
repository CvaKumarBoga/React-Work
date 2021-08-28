import React, { Component } from 'react'

export class ClassComponent extends Component {

    state = {firstNum : 0,secondNum : 0,result : 0}

    setData = (e) =>{
        this.setState({[e.target.name]:[e.target.value]})
    }

    addition = e =>{
        e.preventDefault();
        let r = parseInt(this.state.firstNum)+parseInt(this.state.secondNum);
        this.setState({result:r});
    }

    render() {
        return (
            <div>
            <form>
            <h2>Addition of two numbers</h2>
            <label name="firstNum">First Number</label>
            <input type="text" name="firstNum" onChange={this.setData}/><br/>
            <label name="secondNum">Second Number</label>
            <input type="text" name="secondNum" onChange={this.setData}/><br/>
            <button onClick={this.addition}>Add</button>
            <p>{this.state.result}</p>
            </form>
        </div>
        )
    }
}

export default ClassComponent
