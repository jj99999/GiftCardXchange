// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GiftCard from './components/GiftCard';
import { Router, Route, browserHistory } from 'react-router';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
// import hashHistory from 'react-router';
import helpers from './Components/utils/helpers';

const routes = (
	        <Router history={browserHistory}>
            <Route path="/" component={GiftCard}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/myaccount" component={Main} />
            <Route path="/loginPage" component={LogIn} />
            </Router>
          );


   

 helpers.getUser().then(function(response){
 console.log("APPJS user");
 console.log(response);
    





   }.bind(this));

// var React = require('react');
// var ReactDOM = require('react-dom');
// var MuiThemeProvider = require('../node_modules/material-ui/styles/MuiThemeProvider');
// var Main = require('./components/Main');
// var injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

// This code here allows us to render our main component (in this case Main)

//   const App = () => (
//   <MuiThemeProvider>
//     <Main />
//   </MuiThemeProvider>
// );


// ReactDOM.render(<App />, document.getElementById("app"));



ReactDOM.render(


    
    <MuiThemeProvider>
    <Router routes={routes} history={browserHistory} />
	</MuiThemeProvider>
	

	, document.getElementById("app"));

