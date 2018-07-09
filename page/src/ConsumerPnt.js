import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class ConsumerPnt extends Component {
  constructor(props){
    super(props);
    this.state={
      phoneNum:""
    };
  }
  button1()
  {
    this.setState({phoneNum:this.state.phoneNum+"1"});
  }
  button2()
  {
    this.setState({phoneNum:this.state.phoneNum+"2"});
  }
  button3()
  {
    this.setState({phoneNum:this.state.phoneNum+"3"});
  }
  button4()
  {
    this.setState({phoneNum:this.state.phoneNum+"4"});
  }
  button5()
  {
    this.setState({phoneNum:this.state.phoneNum+"5"});
  }
  button6()
  {
    this.setState({phoneNum:this.state.phoneNum+"6"});
  }
  button7()
  {
    this.setState({phoneNum:this.state.phoneNum+"7"});
  }
  button8()
  {
    this.setState({phoneNum:this.state.phoneNum+"8"});
  }
  button9()
  {
    this.setState({phoneNum:this.state.phoneNum+"9"});
  }
  button0()
  {
    this.setState({phoneNum:this.state.phoneNum+"0"});
  }
  button010()
  {
    this.setState({phoneNum:this.state.phoneNum+"010"});
  }
  button12()
  {
    this.setState({phoneNum:this.state.phoneNum.slice(0, -1)});
  }
  render() {
    return (
      <div>
      <div className="left-box">
      <h1>
       광고
       </h1>
       <img src={logo}/>
      </div>
      <div className= "right-box">
      <p>
      <input className = "Phone" type="number" name="result" placeholder="휴대폰 번호를 입력하세요." value={this.state.phoneNum}/>
      </p>
      <p>
      <button className="PhoneBt" onClick={this.button1.bind(this)}> 1</button>
      <button className="PhoneBt" onClick={this.button2.bind(this)}> 2</button>      
      <button className="PhoneBt" onClick={this.button3.bind(this)}> 3</button>
      </p>
      <p>
      <button className="PhoneBt" onClick={this.button4.bind(this)}> 4</button>
      <button className="PhoneBt" onClick={this.button5.bind(this)}> 5</button>
      <button className="PhoneBt" onClick={this.button6.bind(this)}> 6</button>
      </p>
      <p>
      <button className="PhoneBt" onClick={this.button7.bind(this)}> 7</button>
      <button className="PhoneBt" onClick={this.button8.bind(this)}> 8</button>
      <button className="PhoneBt" onClick={this.button9.bind(this)}> 9</button>
      </p>
      <p>
      <button className="PhoneBt" onClick={this.button0.bind(this)}> 0</button>
      <button className="PhoneBt1" onClick={this.button010.bind(this)}> 010</button>
      <button className="PhoneBt" onClick={this.button12.bind(this)}> - </button>
      </p>

      <p>
      <a href = "/">
      <button className="PhoneBt2"type="button">취소</button>
      </a>
      <Link to = "MarketPnt">
      <button className="PhoneBt2"type="button">확인</button>
      </Link>
      </p>
      </div>
      </div>
    );
  }
}

export default ConsumerPnt;