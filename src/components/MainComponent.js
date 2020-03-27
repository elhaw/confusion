import React, { Component } from 'react';
import '../App.css';
import { Navbar, NavbarBrand } from 'react-bootstrap'
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="primary" variant="dark" >
          <div className="container">
            <NavbarBrand href="/">
              Ristorante con fusion
                </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes} />
      </div>
    );
  }
}


export default MainComponent;
