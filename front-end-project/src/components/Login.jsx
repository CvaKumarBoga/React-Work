import React, { Component } from 'react'
import '../css/Login.css';
import Home from '../components/Home';
import AuthenticateService from '../service/AuthenticateService';
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName: '',
            userPassword: '',
            status: '',
            message: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginUser = (event) => {
        event.preventDefault();
        let loginRequest = { userName: this.state.userName, password: this.state.userPassword };
        console.log('Login => ' + JSON.stringify(loginRequest));

        AuthenticateService.loginRequest(loginRequest).then((response) => {
            console.log(response.data);
            if (response.data.status === "OK") {
                return <Home />
            } else {
                this.setState({ message: response.data.message });
            }
        });
    }

    render() {
        return (
            <div className="container w-50">
                <h2>Login</h2>
                <hr />
                <form>
                    <div className="form-group">
                        <label name="userName">User Name</label>
                        <input type="email" name="userName" className="form-control" placeholder="Enter user name" value={this.state.userName} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label name="userPassword">Password</label>
                        <input type="password" name="userPassword" className="form-control" placeholder="Enter password" value={this.state.userPassword} onChange={this.handleChange} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={this.loginUser}>Login</button>
                    </div>
                    {
                    this.state.message === null && (
                        <div><br /></div>
                    )
                }
                </form>
                {
                    this.state.message && (
                        <p className="text-danger">{this.state.message}</p>
                    )
                }
            </div>
        )
    }
}
