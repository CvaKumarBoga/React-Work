import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="container w-50">
                <form>
                <h2>User SignUp</h2>
                <hr/>
                <div className="form-group">
                    <label name = "userName">User Name</label>
                    <input type="text" className="form-control" name="userName" placeholder="Enter user name" />
                </div>

                <div className="form-group">
                    <label name="email">Email</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label name="password">Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label name="confirmPswd">Confirm Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Confirm password" />
                </div>
                <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={this.loginUser}>SignUp</button>
                    </div>
                <br/>
            </form>
            </div>
        )
    }
}
