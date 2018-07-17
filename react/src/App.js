import React, { Component } from 'react';
import './App.css';
import Report from './Report.js'
import RequestForm from './RequestForm.js'
import Landing from './Landing.js'
import Registration from "./Registration"
import { Router } from "@reach/router";
// import { Router, Link } from "@reach/router"
import ChartsToShow from './ChartsToShow'

class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Landing path="/"/>
          <Report path="report"/>
          <RequestForm path="request"/>
          <Registration path="registration"/>
          <ChartsToShow path="charts"/>
        </Router>
      </div>
    );
  }
}

export default App;
