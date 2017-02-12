// var React = require('react');
// var axios = require('axios');

// var helpers = require("../utils/helpers");

import React, {Component} from 'react';
// var axios = require('axios');
import axios from 'axios'
// var cookie = require('react-cookie');
import cookie from 'react-cookie'
// var helpers = require("../utils/helpers");
import helpers from '../utils/helpers'
// This is the form component. 
import AutoComplete from '../../../node_modules/material-ui/AutoComplete';
import MenuItem from '../../../node_modules/material-ui/MenuItem';
import AppBar from '../../../node_modules/material-ui/AppBar';
import FontIcon from '../../../node_modules/material-ui/FontIcon';
import {red500, yellow500, blue500} from '../../../node_modules/material-ui/styles/colors';
import { RadioButton, RadioButtonGroup } from '../../../node_modules/material-ui/RadioButton'
import ActionCardGiftCard from '../../../node_modules/material-ui/svg-icons/action/card-giftcard';
import Search from '../../../node_modules/material-ui/svg-icons/action/search';

const giftIcon = {

  color: 'white',
  margin: 11,
}



// This is the form component. 
var SearchCard  = React.createClass({

  componentDidMount: function(){


  },


  // This function will respond to the user input 
  // handleChange: function(event){

  //     // Here we create syntax to capture any change in text to the query terms (pre-search).
  //     // See this Stack Overflow answer for more details: 
  //     // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
  //     var newState = {};
  //     newState[event.target.id] = event.target.value;
  //     this.setState(newState);

  // },

  // When a user submits... 
  handleClick: function(){

    // preventing the form from trying to submit itself
    event.preventDefault();
   
    helpers.searchTradeCard();
  

  },

  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="searchcard">
        
           <AppBar

    iconElementLeft={<Search style={giftIcon} />}

    title="What type of Card would you like?"
  />

              <div className="panel-body" id="buycardbody">
  

              <form>
                  <div className="form-group">
                      <label htmlFor="">Store Name</label>
                      <br />
                      <select>
                        <option value="banana-republic">Banana Republic</option>
                        <option value="barnes-and-noble">Barnes & Noble</option>
                        <option value="best-buy">Best Buy</option>
                        <option value="buffalo-wild-wings">Buffalo Wild Wings</option>
                        <option value="gap">GAP</option>
                        <option value="home-depot">Home Depot</option> 
                        <option value="macys">Macy's</option>
                        <option value="panera-bread">Panera Bread</option>
                        <option value="starbucks">Starbucks</option>
                        <option value="target">Target</option>
                        <option value="walmart">Walmart</option>
                      </select> 
  
                      </div>

                      <div className="form-group">
                      <label htmlFor="">Up To What Amount?</label>
                      <input type="text" className="form-control" id="searchBalanceInput" placeholder="20.00"></input>
                      </div>

                      
                      <button type="submit" className="btn btn-primary" id="searchCardBtn" onClick={this.handleClick}>Search for Card</button>

              </form>

            </div>
          </div>
             


    )
  }
});

// Export the component back for use in other files
module.exports = SearchCard;