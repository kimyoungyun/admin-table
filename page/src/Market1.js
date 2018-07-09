import React, { Component } from 'react';
import logo from './logo.png';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Market1 extends Component {
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
       <h4>
       결제할 상품의 Blue Points 금액을 입력하세요.
       </h4>
       <p>
       <input className = "BluePoint" type="text"/>
       Blue Points
       </p>
       <a href = "PayHistory">
       <button type="button" className="MarketBt1">
       결제 내역
       </button>
       </a>
       <Link to = "ConsumerPnt">
       <button type="button" className="MarketBt">
       <p>블루 포인트</p> 
       <p>적립하기</p>
       </button>
       </Link>
       <Link to = "QrPay">
       <button type="button" className="MarketBt">
       <p>QR코드로</p>
       <p>결제하기</p>
       </button>
       </Link>
       <strong><ol className="UseGuide">
         이용방법안내
         <li>결제할 상품의 BWX 금액을 입력 후 QR코드로 결제하기 버튼을 누르세요</li>
         <li>xx 모바일 앱을 실행하여 화면에 나타난 QR코드를 촬영하세요</li>
         <li>모바일 앱에서 '결제'버튼을 누르시면 BWX로 결제 완료!!</li>
       </ol></strong>
     </div>
    </div>
    );
  }
}

export default Market1;
