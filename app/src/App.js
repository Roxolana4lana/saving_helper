import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Expenses from './components/expenses'

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
