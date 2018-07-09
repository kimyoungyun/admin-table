import React, { Component } from 'react';
import logo from './logo.png';
import loading from './loading.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

class App0 extends Component {
  render() {
    return (
      <div>
         <h1 className="Loading">
         Service Name
         </h1>
         <center>
         <img className="ImgLoading" src={loading}/>
         </center>
         <p className="Bluelogo">
         BlueWhale Foundation
         </p>
      </div>
    );
  }
}

export default App0;