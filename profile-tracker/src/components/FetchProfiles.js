import React, { Component } from 'react'
import ProfileService from '../service/ProfileService';

export default class FetchProfiles extends Component {
    constructor(props){
        super(props);
        this.state = {
            profiles:[],
            message:null
        }
        this.deleteProfile = this.deleteProfile.bind(this);
    }

    componentDidMount(){
        this.getProfiles();
    }

    getProfiles() {
        ProfileService.getAllProfile().then(resp =>{
            this.setState({profiles:resp.data});
        });
    }

    deleteProfile(id) {
        ProfileService.deleteProfie(id).then((resp) =>{
            this.setState({ message: resp.data });
            this.getProfiles();
        });
    }
    
    render() {
        return (
            <div>
                <h2>Profiles List</h2>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Profile</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.profiles.map((p) => {
                            return (
                                <tr key={p.userId}>
                                    <td>{p.userId}</td>
                                    <td>{p.name}</td>
                                    <td>{p.email}</td>
                                    <td>{p.phone}</td>
                                    <td>{p.profession}</td>
                                    <td><button className="btn-danger btn" onClick={() => this.deleteProfile(p.userId)}>DELETE</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {
                    this.state.message && (
                        <p className="alert alert-success">{this.state.message}</p>
                    )
                }
            </div>
        )
    }
}
