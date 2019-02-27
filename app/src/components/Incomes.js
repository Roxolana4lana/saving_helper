import React, { Component } from 'react'
import IncomesForm from './IncomesForm';
import { Link } from 'react-router-dom'
import IncomeDelete from './IncomeDelete'
import axios from 'axios'

class Incomes extends Component {
    constructor(){
        super()
            this.state={
                incomes:[]
            }
        }

    componentWillMount(){
        axios.get('http://127.0.0.1:8000/incomes/')   
            .then(res => this.setState({ incomes: res.data }))
            .catch(err => (console.log(err)))
    }

    render() {
        const incomes=this.state.incomes.map(income=>(
            <div key={income.id}>
                <div className="element_list">
                    <Link to={'/profit' + income.id} className="link_expense">
                        <span>{income.from_where}</span>
                    </Link>
                    <IncomeDelete id={income.id} />
                </div>
            </div>))
    return (
        <div className='App'>       
            <div className="split expenses_lising">
                <h1>Incomes</h1>
                {incomes}
            </div>
            <div className="split App_Form">
               <IncomesForm/>
            </div>
        </div>
    )
  }
}

export default Incomes
