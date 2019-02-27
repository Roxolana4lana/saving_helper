import React, { Component } from 'react'
import axios from 'axios';

 class IncomeDelete extends Component {
    
    
         IncomeDelete =e =>{
             e.preventDefault();
             console.log(this.props.id)
             axios.delete('http://127.0.0.1:8000/incomes/' + this.props.id + '/')
                 .then(res => {
                     console.log(res);
                     console.log(res.data);
                 })
               .then(window.location.reload())
         }
     
  render() {

    return (
      <div>
        <i className="material-icons" style={{ color: 'white', cursor: 'pointer' }} onClick={this.IncomeDelete}>delete</i>
        
      </div>
    )
  }
}

export default IncomeDelete
