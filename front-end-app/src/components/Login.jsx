import React, { Component } from 'react'
import '../css/Login.css';

export default class Login extends Component {
    render() {
        return (
            <div>
                <form className="LoginForm">
                    <h2>Login</h2>
                    <hr/>
                    <div className="form-group">
                        <label name="email">User Name</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter user name" />
                    </div>

                    <div className="form-group">
                        <label name="password">Password</label>
                        <input type="text" name="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div id="LoginBtn">
                        <button className="btn" type="submit" >Sign-In</button>
                    </div>
                    <br/>
                </form>
            </div>
        )
    }
}
