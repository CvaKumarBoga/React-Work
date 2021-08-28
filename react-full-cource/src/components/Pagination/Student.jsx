import React, { Component } from 'react'

export default class Student extends Component {

    render() {
    const students = [
            {id: 1, name : "ABC" , grade : "C"},
            {id: 2, name : "DEF" , grade : "A"},
            {id: 3, name : "HIJ" , grade : "B"},
            {id: 4, name : "KLM" , grade : "D"},
            {id: 5, name : "NOP" , grade : "A"},
            {id: 6, name : "QRS" , grade : "B"},
            {id: 7, name : "BSS" , grade : "A"},
            {id: 8, name : "YMN" , grade : "B"},
        ];

        return (
            <div>
                {students.map( a =>{
                    return <h2>{a.id} {a.name} {a.grade}</h2> 
                })}
            </div>
        )
    }
}
