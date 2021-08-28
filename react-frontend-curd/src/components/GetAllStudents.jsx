import React, { Component } from 'react'
import StudentService from '../service/StudentService';

class GetAllStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            message: null
        }
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    componentDidMount() {
        this.getStudents();
    }

    getStudents() {
        StudentService.getAllStudents().then((res) => {
            this.setState({ students: res.data });
        });
    }

    deleteStudent(id) {
        StudentService.deleteStudent(id).then((res) => {
            this.setState({ message: res.data });
            this.getStudents();
        });
    }

    render() {
        return (
            <div>
                <h2>Student List</h2>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((stu) => {
                            return (
                                <tr key={stu.id}>
                                    <td>{stu.id}</td>
                                    <td>{stu.stuName}</td>
                                    <td>{stu.course}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.mobile}</td>
                                    <td><button onClick={() => this.deleteStudent(stu.id)} className="btn btn-dangder">DELETE</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {this.state.message !== null}{

                    <div className="alert alert-success">{this.state.message}</div>
                }
            </div>
        )
    }
}

export default GetAllStudents;