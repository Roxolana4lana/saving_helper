import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Expenses from './components/Expenses'
import ExpenseOne from './components/ExpenseOne';
import Drafty from './components/Drafty'
import Incomes from './components/Incomes'
import IncomeOne from './components/IncomeOne';
import './output.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="AppMain">
          <Navbar/>
          <Route exact path='/' component={Expenses}></Route>
          <Route path='/a:exact' component={ExpenseOne}></Route>
          <Route path='/draft' component={Drafty}></Route>
          <Route exact path='/incomes' component={Incomes}></Route>
          <Route path='/profit:one' component={IncomeOne}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
