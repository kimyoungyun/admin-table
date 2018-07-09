import React, { Component, PropTypes } from 'react';
import './App1.css'
import './App.css'
import logo from './logo.png';

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
        </div>
      </div>
    );
  }
}
export default Screen;