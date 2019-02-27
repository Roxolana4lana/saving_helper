import React, { Component } from 'react'
import axios from 'axios'

 class IncomesForm extends Component {
     constructor(){
         super()
         this.state={
             from_where:'',
             amount:'',
             regular: false
         }
     }
     onChange = e =>{
         e.target.type==='checkbox'?this.setState({[e.target.name]:e.target.checked}):
         this.setState({[e.target.name]:e.target.value})
     }

     onSubmit=e=>{
         e.preventDefault();
         const income ={
             from_where: this.state.from_where,
             amount:this.state.amount,
             regular:this.state.regular
         }
         axios.post('http://127.0.0.1:8000/incomes/', income)
         .then(res=>console.log(res.data))
             .then(window.location.reload())
             .catch(err=>(console.log(err)))

         this.setState({
             from_where: '',
             amount: '',
             regular: true
         })

     }
  render() {
    return (

            <form onSubmit={this.onSubmit} className='formExpenses'>
                <div className="form-group">
            <label>The resourse of the income: </label>
            <input type="text" 
            value={this.state.from_where}
            onChange = {this.onChange}
                        className="form-control"
            name="from_where"></input>
      </div>
                <div className="form-group">
            <label>The amount: </label>
            <input type="text"
            name="amount"
            value={this.state.amount}
                        className="form-control"
            onChange={this.onChange}
            ></input>
      </div>
                <div className="form-group">
            <label>Mounthly or not: </label>
            <input type="checkbox"
            name="regular"
            checked={this.state.regular}
                        className="form-control"
                       
            onChange = {this.onChange}>

            </input>
                </div >
                    <div className="form-group">

                        <input type="submit" value="Save the changes" className="btn-save"
                        />
                    </div>
 
               
      </form>
        

    )
  }
}

export default IncomesForm
