import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Main extends Component {
  render() {
    return(
      <Router>
      <div>
        <h1 className="MainTitle">
          <img src={logo}/>
          Service Name
        </h1>
        <center>
        <input className = "Login" type="email" placeholder="이메일을 입력하세요."/>
        <input className = "Login" type="password" placeholder="비밀번호를 입력하세요."/>
        <input className = "Login" type="text" placeholder="가맹점 번호를 입력하세요."/>
        </center>
        <a href = "Market1">
        <input className="LogButton" type="submit" value="로그인"/>
        </a>
      </div>
      </Router>
    );
  }
}

export default Main;
