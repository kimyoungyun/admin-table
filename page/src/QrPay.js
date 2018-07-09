import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class QrPay extends Component {
  render() {
    return (
      <div>
      <div className="left-box">
      <h1>
       광고
       </h1>
       <img src={logo}/>
      </div>
      <div className="right-box">
       <h1 className="ServiceName">
        뷰티어스
       </h1>
       <img src={logo} className="Qr"/>
       <a href = "/">
       <button type="button" className="Cancel">
       취소하기
       </button>
       </a>
      </div>
      </div>
    );
  }
}

export default QrPay;