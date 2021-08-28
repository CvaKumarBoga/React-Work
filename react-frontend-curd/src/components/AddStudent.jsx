import React, { Component } from 'react'
import StudentService from '../service/StudentService';

export default class AddStudent extends Component {

    constructor() {
        super();
        this.state = {
            stuName: '',
            course: '',
            email: '',
            mobile: '',
            message: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    saveStudent = (e) => {
        e.preventDefault();
        let student = { stuName:this.state.stuName, course:this.state.course, email:this.state.email, mobile:parseInt(this.state.mobile)};
        console.log('Student => ' + JSON.stringify(student));

        StudentService.createStudent(student).then((response) =>{
        this.setState({message:response.data});
    });
}


    render() {
        return (
            <div>
                <form>
                    <label name="name">Name</label>
                    <input type="text" name="stuName" placeholder="Enter name" value={this.state.stuName} onChange={this.handleChange} />
                    <label name="course">Course</label>
                    <input type="text" name="course" placeholder="Enter Course" value={this.state.course} onChange={this.handleChange} />
                    <label name="email">Email</label>
                    <input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                    <label name="phone">Phone</label>
                    <input type="text" name="mobile" placeholder="Enter phone number" value={this.state.mobile} onChange={this.handleChange} />
                    <button type="submit" className="btn" onClick={this.saveStudent}>Submit</button>
                </form>
                {
                    this.state.message &&(
                        <div className = "alert alert-success">{this.state.message}</div>
                    )
                }
            </div>
        )
    }
}
