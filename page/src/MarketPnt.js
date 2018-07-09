import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Marketpnt extends Component {
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
      <h2 className="ViewPhn">휴대폰번호</h2>
      <h2 className="ViewPhn">01011111111</h2>
      <input className = "InputPnt" type="text" placeholder="포인트를 입력하세요."/>
      <p>
      <a href = "/">
      <button className="SaveBt"type="button">취소</button>
      </a>
      <button className="SaveBt"type="button">적립</button>
      </p>
      </div>
      </div>
    );
  }
}

export default Marketpnt;