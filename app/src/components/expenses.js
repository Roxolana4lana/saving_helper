import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { Link } from 'react-router-dom'
import ExpDelete from './ExpDelete';
import axios from 'axios'


class Expenses extends Component {
  constructor(){
    super()
    this.state={
      expenses:[]
    }
  }
  componentDidMount(){
    fetch('http://127.0.0.1:8000/expenses/')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        expenses: data
      })
    })
  }
  render() {
    const expenseList= this.state.expenses.map(expense=>(
      <div className="expense_list_item" key={expense.id}>
      <h3>{expense.title}</h3>
      </div>
    ))
    return (
      <div className='App'>
      <div className="App__Expenses">
      <h1>List of expenses</h1>
      <div className="expenses_lising">
      {expenseList}
        </div>
        </div>
        <div className="App_Form">
        <ExpenseForm/>
        </div>
     
      </div>
    )
  }
}
export default Expenses
