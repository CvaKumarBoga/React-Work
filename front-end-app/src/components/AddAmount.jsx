import React, { Component } from 'react'
import '../css/AddAmount.css';

export default class AddAmount extends Component {
    render() {
        return (
            <div>
                <form id="AddForm">
                <h3>Add Form</h3>
                <hr/>
                <div className="form-group">
                    <label name = "expense">Expense Type</label>
                    <input type="text" className="form-control" name="expense" placeholder="Enter expence type" />
                </div>

                <div className="form-group">
                    <label name="date">Date</label>
                    <input type="text" className="form-control" name="date" placeholder="Enter date" />
                </div>

                <div className="form-group">
                    <label name="amount">Amount</label>
                    <input type="text" className="form-control" name="amount" placeholder="Enter amount" />
                </div>

                <div className="form-group">
                    <label name="debit">Debit Account</label>
                    <input type="text" className="form-control" name="debit" placeholder="DD/MM/YYYY" />
                </div>

                <div className="form-group">
                    <label name="credit">Credit Account</label>
                    <input type="text" className="form-control" name="credit" placeholder="Enter credit amount" />
                </div>

                <div id="butt">
                <button type="submit" className="btn">Submit</button>
                </div>
                <br/>
            </form>
            </div>
        )
    }
}
