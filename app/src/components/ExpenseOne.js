import React, { Component } from 'react'
import Drafty from './Drafty'
import Switch from "react-switch";
import axios from 'axios'

class ExpenseOne extends Component {
  constructor(){
    super()
    this.state={
      expense:{}, 
      checked:false

    }
  }
 
  componentDidMount(){
    let id=this.props.match.params.exact;
  axios.get('http://127.0.0.1:8000/expenses/' + id + '/')
    .then(res => this.setState({ expense: res.data })) 
  }

  seeDraft=()=>{
 this.setState(currentState =>{
   return{
          checked:!currentState.checked
         }
 })}

  render() {

  const see =   this.state.checked ? (<div> <Drafty /></div>):null
    return (
      <div className="ExpensOne">
      <div >
          <h2 className="Exp_one_info">Additional information on this expense</h2>
          <h5>The title of thie expense is {this.state.expense.title}</h5>
          <p> The amount is {this.state.expense.amount} </p>
      </div>
      <div> 
          <Switch onChange={this.seeDraft} checked={this.state.checked}></Switch>
          {see}
      </div>
      </div>
    )
  }
}

export default ExpenseOne
