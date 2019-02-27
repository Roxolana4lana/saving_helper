import React, { Component } from 'react'
import axios from 'axios'
import Switch from "react-switch";
import IncomeDraft from './IncomeDraft'


 class IncomeOne extends Component {
    constructor(){
        super()
        this.state={
            income:{},
            checked: false
        }
    }

    componentDidMount(){
        let id = this.props.match.params.one;
        axios.get('http://127.0.0.1:8000/incomes/' + id + '/' )
            .then(res => this.setState({ income: res.data }))
    }

    SeeDraft=()=>{
        this.setState(currentState=>{
        return{checked:!currentState.checked}
        })
     }

  render() {
      const see = this.state.checked?(<div><IncomeDraft/></div>):null
    return (
      <div className="income_one">
        <h1>The whole informathion about the income</h1>
        <h3>You get this income from the {this.state.income.from_where}</h3>
        <h4>The total amount is {this.state.income.amount}</h4>
        Check the diagram<br/>
        <Switch onChange={this.SeeDraft} checked={this.state.checked}/>
        {see} 
      </div>
    )
  }
}
export default IncomeOne