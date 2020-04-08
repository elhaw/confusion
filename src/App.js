import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainComponent from './components/MainComponent'
class App extends Component {


  render() {
    return (
      <Router>
        <MainComponent />
      </Router>
    );
  }
}


export default App;
