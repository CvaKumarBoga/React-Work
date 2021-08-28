import React, { Component } from 'react'
import '../css/AddProp.css'
import ProfileService from '../service/ProfileService';
class AddPro extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            phone:'',
            profession:'',
            message:null
        }
        this.handleChange = this.handleChange.bind(this);
        this.addProfile = this.addProfile.bind(this);
    }

    handleChange =(event) => {
        this.setState({[event.target.name]:event.target.value});
    }

    addProfile = (event) =>{
        event.preventDefault();
        let profile = {name:this.state.name, email:this.state.email, phone:this.state.phone, profession:this.state.profession};
        ProfileService.addProfile(profile).then(resp=>{
            this.setState({message:resp.data});
        })
    }
    render() {
        return (
            <div className="AddProfile">
            <form>
            <h2>Add Profile</h2>
            <hr/>
            <div className="form-group">
                <label name = "name">User Name</label>
                <input type="text" className="form-control" name="name" placeholder="Enter user name" value={this.state.name} onChange={this.handleChange}/>
            </div>

            <div className="form-group">
                <label name="email">Email</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="form-group">
                <label name="phone">Phone</label>
                <input type="text" className="form-control" name="phone" placeholder="Enter phone" value={this.state.phone} onChange={this.handleChange}/>
            </div>

            <div className="form-group">
                <label name="profession">Profession</label>
                <input type="text" className="form-control" name="profession" placeholder="Enter profession" value={this.state.profession} onChange={this.handleChange} />
            </div>
            <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4" onClick={this.addProfile}>Add Profile</button>
                </div>
            <br/>
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

export default AddPro

