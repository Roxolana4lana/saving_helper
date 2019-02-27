import React, { Component } from 'react'
import axios from 'axios';


 class ExpDelete extends Component {
   constructor() {
     super()
     this.state = {
       expenses: []

     }
   }

     handleChange = e => {
         e.preventDefault();
         console.log(this.props.id)
         axios.delete('http://127.0.0.1:8000/expenses/' + this.props.id + '/')
             .then(res => {
                 console.log(res);
                 console.log(res.data);
             })
             .then(window.location.reload())

            }
   
  
   
   //   <i class="material-icons" onClick={this.handleChange}>delete</i>
  render() {
     
 
    return (
        
      <div>
        <i className="material-icons" style={{ color: 'white', cursor: 'pointer' }} onClick={this.handleChange}>delete</i>

      </div>
    )
  }
}

export default ExpDelete 
