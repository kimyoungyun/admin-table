import React, { Component, PropTypes } from 'react';
import './App.css';


class PaymentInfo extends React.Component
{
  render()
  {
    if(this.props.paid==="결제 완료")
    {
      return(
        <tr>
          <td>{this.props.year}.{this.props.month}.{this.props.day}</td>
          <td>{this.props.id}</td>
          <td>{this.props.nickname}</td>
          <td>{this.props.price}</td>
          <td>{this.props.giving}</td>
          <td>{this.props.having}</td>
          <td>결제 완료</td>
          <td><button id="cancel" onClick={()=>
          {
            if(window.confirm('결제를 취소하시겠습니까?'))
            {
              if(alert('성공적으로 결제가 취소되었습니다.'))
              canceledPay=this;
              document.getElementById("cancel").disabled="disabled";
              window.location.replace('Cancel');
            }
          }}>결제 취소</button></td>
        </tr>
      )
    }
    else if(this.props.paid==="결제 취소")
    {
      return(
        <tr>
          <td>{this.props.year}.{this.props.month}.{this.props.day}</td>
          <td>{this.props.id}</td>
          <td>{this.props.nickname}</td>
          <td>{this.props.price}</td>
          <td>{this.props.giving}</td>
          <td>{this.props.having}</td>
          <td>결제 취소</td>
          <td><button onClick={()=> window.location.replace('QrPay')} class="repay">결제 하기</button></td>
        </tr>
      );
    }
  }
}
let pay1=<PaymentInfo year="2018" month="06" day="30" id="abc@gmail.com" nickname="dddd" price="6600" giving="100" having="100" paid="결제 완료" />;
let pay2=<PaymentInfo year="2017" month="07" day="30" id="abc@gmail.com" nickname="ddd" price="6600" giving="100" having="100" paid="결제 취소" />;
let pays=[pay1, pay2];
function totalSum(pays)
{
  let sum=0;
  for(let value of pays)
  {
    sum+=(+value.props.price);
  }
  return sum;
}
function canceledSum(pays)
{
  let sum=0;
  for(let value of pays)
  {
    if(value.props.paid==="결제 취소")
    {
      sum+=(+value.props.price);
    }
  }
  return sum;
}

class YearMonthTable extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      year:props.year,
      month:props.month,
    };
  }
  moveBack()
  {
    if(this.state.month==="01")
    {
      this.setState({
        year:""+(+this.state.year-1),
        month:"12"
      });
    }
    else if((+this.state.month)<=10)
    {
      this.setState({
        year:this.state.year,
        month:"0"+(+this.state.month-1)
      });
    }
    else
    {
      this.setState({
        year:this.state.year,
        month:+this.state.month-1+""
      });
    }
  }
  moveFoward()
  {
    if(this.state.month==="12")
    {
      this.setState({
        year:""+(+this.state.year+1),
        month:"01"
      });
    }
    else if((+this.state.month)>=9)
    {
      this.setState({
        year:this.state.year,
        month:+this.state.month+1+""
      });
    }
    else
    {
      this.setState({
        year:this.state.year,
        month:"0"+(+this.state.month+1)
      });
    }
  }
  makeList(List)
  {
    for(let value of this.props.paylist)
    {
      if((this.state.year===value.props.year)&&(this.state.month===value.props.month))
      {
        List.push(value);
      }
      List.sort(function(a,b){return b.props.day-a.props.day;});
    }
    return List;
  }
  render()
  {
    return(
      <div>
        <div align="center">
          <a href="#" onClick={this.moveBack.bind(this)} id="back">&lt; </a>
          {this.state.year}.{this.state.month}
          <a href="#" onClick={this.moveFoward.bind(this)} id="foward"> &gt;</a>
        </div>
        <table border="1" cellPadding="10px" align="center">
          <tr>
            <td>날짜</td>
            <td>아이디</td>
            <td>닉네임</td>
            <td>결제 금액<br />(BP)</td>
            <td>적립 포인트<br />(BP)</td>
            <td>보유 포인트<br />(BP)</td>
            <td>상태</td>
            <td>주문 취소</td>
          </tr>
          {this.makeList([])}
        </table>
      </div>
    );
  }
}
class PaymentScreen extends React.Component
{
  render()
  {
    return(
      <div>
        <h3>결제 내역(Blue Point)</h3>
        <h5 align="right">전체 결제 금액: {totalSum(pays)}</h5>
        <h5 align="right">결제 취소 금액: {canceledSum(pays)}</h5>
        <h5 align="right">결제 금액: {totalSum(pays)-canceledSum(pays)}</h5>
        <YearMonthTable year="2018" month="07" paylist={pays}/>
      </div>
    );
  }
}
let canceledPay=pay1;
export {YearMonthTable};
export {PaymentInfo};
export {canceledPay};
export default PaymentScreen;