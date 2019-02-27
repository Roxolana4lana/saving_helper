import React from 'react'
import {Link, withRouter} from 'react-router-dom'


const Navbar = () =>{
    return(
        <div className='navigation'>
            <ul className="list_right">
                <li><Link to='/'>Expenses</Link></li>
                <li><Link to='/incomes'>Incomes</Link></li>    
            </ul>
        </div>
    )
}

export default withRouter(Navbar)
