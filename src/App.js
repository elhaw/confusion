import React from 'react';
import './App.css';
import {Navbar,NavbarBrand} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar   bg="primary" variant="dark" >
          <div className="container">
            <NavbarBrand href = "/">
                Ristorante con fusion
            </NavbarBrand>
          </div>
      </Navbar>
    </div>
  );
}

export default App;
