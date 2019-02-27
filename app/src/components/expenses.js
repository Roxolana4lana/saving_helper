import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { Link } from 'react-router-dom'
import ExpDelete from './ExpDelete';
import axios from 'axios'

//<ExpDelete id={expense.id} smth={this.handleChange} />

class Expenses extends Component {
  constructor(){
    super()
    this.state={
      expenses:[]
      
    }
  }

  componentDidMount(){
 this.seeList();
 
  }
  seeList=()=>{
     axios.get('http://127.0.0.1:8000/expenses/')
    .then(res => this.setState({ expenses: res.data }))
       .catch(err => (console.log(err)))
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
