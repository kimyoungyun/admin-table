import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './Loading';
import Main from './Main';
import Market1 from './Market1';
import QrPay from './QrPay';
import ConsumerPnt from './ConsumerPnt';
import Marketpnt from './MarketPnt';
import PayHistory from './PayHistory';
import Cancel from './Cancel';
import End from './End';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App= ()=>{
	return(
		<Router>
		<div>
		<Route exact path ="/" component={Main}/>
		<Route exact path ="/Market1" component={Market1}/>
        <Route exact path ="/QrPay" component={QrPay}/>
        <Route exact path ="/ConsumerPnt" component={ConsumerPnt}/>
        <Route exact path ="/Marketpnt" component={Marketpnt}/>
        <Route exact path ="/PayHistory" component={PayHistory}/>
        <Route exact path ="/Cancel" component={Cancel}/>
        <Route exact path ="/End" component={End}/>
		</div>
		</Router>
		);
};

export default App;