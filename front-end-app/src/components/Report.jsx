import React, { Component } from 'react'
import '../css/Report.css';

export default class Report extends Component {
    render() {
        return (
            <div className="Report">
                <div className="container">
                    <h2>Report Form</h2>
                    <hr/>
                    <div className="menu">
                        <ul id="Repo">
                            <li>Day</li>
                            <li>Month</li>
                            <li>Year</li>
                        </ul>
                    </div>

                    <div id="Searchbx">
                        <input id ="box" type="text" 
                       className="form-control" placeholder="Search here" />
                    </div>

                    <table className="table">
                        <tr>
                            <th>Debit</th>
                            <th>Credit</th>
                            <th>Amount</th>
                            <th>Particulars</th>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <tr>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                            <td>NA</td>
                        </tr>
                        <br/>
                    </table>
                </div>
            </div >
        )
    }
}
