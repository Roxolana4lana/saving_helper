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
    
       
          <div className="list" key={expense.id}>
        <div className="element_list">
          <Link to={'/a' + expense.id} className="link_expense" >
          <span >{expense.title}</span>
            
        </Link>
         
       <ExpDelete id={expense.id}  />
        </div>
        </div>
        
    ))
    return (
      <div className='App'>
    
    
      <div className="split expenses_lising">
      <h1>Expenses</h1>
      {expenseList}
        </div>
   
        <div className="split App_Form">
        <ExpenseForm/>
        </div>
     
      </div>
    )
  }
}
export default Expenses
