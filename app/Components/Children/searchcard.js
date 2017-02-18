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

  getInititalState: function(){
    return {
      results: []
    };

  },

  componentDidMount: function(){

  },

  // componentDidUpdate:  function(){
  //   helpers.searchTradeCard().then(function(data){
  //   console.log(data);
  //   this.setState({ searchCardResults: data});
  //   }.bind(this));

  // },



  handleStoreNameChange: function(e){
    console.log(e.target.value);

    var storeSearch = document.getElementById("storeSearch").value;
    console.log("storeSearch is "+storeSearch);

    cookie.save('storesearch', storeSearch);

    // console.log("cookie save is running");
    var storesearchcookie = cookie.load('storesearch');

    console.log("the store cookie is "+storesearchcookie);

  },


  // When a user submits... 
  handleClick: function(event){

    // preventing the form from trying to submit itself
    event.preventDefault();

    helpers.searchTradeCard().then(function(response){
      console.log("search promise");
      console.log(response.data);

      this.setState({results: response.data});

      console.log("the state is" + JSON.stringify(this.state.results));

      this.props.searchCards(this.state.results);
      console.log("The props are (searchcard) :");
      console.log(this.props.searchCards);
      return response.data;
    }.bind(this));
    
  },



  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="searchcard">

          <AppBar

    iconElementLeft={<Search style={giftIcon} />}

    title="Add Gift Card"
  />


              <div className="panel-body" id="buycardbody">
  

              <form>
                  <div className="form-group">
                      <label htmlFor="">Store Name</label>
                      <br />
                      <select id="storeSearch" onChange={this.handleStoreNameChange}>
                        <option selected value=""></option>
                        <option value="Banana Republic">Banana Republic</option>
                        <option value="Barnes & Noble">Barnes & Noble</option>
                        <option value="Best Buy">Best Buy</option>
                        <option value="Buffalo Wild Wings">Buffalo Wild Wings</option>
                        <option value="Gap">GAP</option>
                        <option value="Home Depot">Home Depot</option> 
                        <option value="Macy's">Macy's</option>
                        <option value="Panera Bread">Panera Bread</option>
                        <option value="Starbucks">Starbucks</option>
                        <option value="Target">Target</option>
                        <option value="Walmart">Walmart</option>
                      </select> 
  
                      </div>
                      <div className="form-group">
                      <label htmlFor="">Up To What Amount?</label>
                      <input type="text" className="form-control" id="searchBalanceInput" placeholder="$20"></input>
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