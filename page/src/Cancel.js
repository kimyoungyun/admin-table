import React, { Component, PropTypes } from 'react';
import PaymentInfo from "./PayHistory.js"
import canceledPay from "./PayHistory.js"
import './App1.css'
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

let pay=<PaymentInfo year="2018" month="06" day="30" id="abcde@gmail.com" nickname="호동왕자" price="5500" giving="100" having="100" paid="결제 완료" />

class Screen extends React.Component
{
  render()
  {
    return(
      <div>
        <div className="left-block">
          <h1>
            <img src={logo}/>
            광고
          </h1>
        </div>
        <div className="right-block">
          <h1>뷰티어스</h1>
            <div id="blank"></div>
            <div id="popup">
            <h3>결제 취소 완료</h3>
            <p>아이디: {pay.props.id}</p>
            <p>닉네임: {pay.props.nickname}</p>
            <p>결제 취소일: {pay.props.year}.{pay.props.month}.{pay.props.day}</p>
            <p>결제 취소 금액: {pay.props.price} blue points</p>
            <Link to="End">
            <button>확인</button>
            </Link>
            </div>
        </div>
      </div>
    );
  };
};
export default Screen;