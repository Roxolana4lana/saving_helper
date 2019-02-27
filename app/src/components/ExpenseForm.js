import React, { Component } from 'react';

import axios from 'axios'

class ExpenseForm extends Component {
    constructor() {
        super()
        this.state = {
          title: '',
            category: '',
            amount: '',
            regular: false
        }
    }


    onChange = e => {
        // const { name, value, type, checked } = e.target
        // type === "checkbox" ? this.setState({ [name]: checked }) :
        //     this.setState({
        //         [name]: value
        //     });
        e.target.type==='checkbox'?this.setState({[e.target.name]:e.target.checked}):
    this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit = event => {
        event.preventDefault();

        const obj = {
            title: this.state.title,
            category: this.state.category,
            amount: this.state.amount,
            regular: this.state.regular
        };
        axios.post(`http://127.0.0.1:8000/expenses/`, obj)
            .then(res =>
                console.log(res.data)
            )
            .then(window.location.reload())

        this.setState({
            amount: '',
            category: '',
            title: '',
            regular: true
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="form-group">
                    <label>Title of expenses:  </label>
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.onChange}
                        name="title"
                    />
                </div>
                <div className="form-group">
                    <label>Category of expenses: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.category}
                        onChange={this.onChange}
                        name="category"
                    />
                </div>
                <div className="form-group">
                    <label>The total amount: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.amount}
                        onChange={this.onChange}
                        name="amount"
                    />
                </div>
                <div className="form-group">
                    <label>Mounthly or not </label>
                    <input type="checkbox"
                        className="form-control"
                        name="regular"
                        checked={this.state.regular}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Save the changes" className="btn btn-primary" />
                </div>
            </form>
        )
    }
}

export default ExpenseForm