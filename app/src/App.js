import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Expenses from './components/expenses'
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
      <Navbar />
      <Route exact path='/' component={Expenses}></Route>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
