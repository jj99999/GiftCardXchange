// var React = require("react");
// var createFragment = require('react-addons-create-fragment');
// var Inventory = require("./Children/Inventory");
// var AddCard = require("./Children/AddCard");
// var SearchCard = require("./Children/SearchCard");

import React, {Component} from 'react';
import AddCard from './Children/AddCard'
import SearchCard from './Children/SearchCard'
import Populate from './Children/Populate'
import Inventory from './Children/Inventory'
import cookie from 'react-cookie'
import helpers from './utils/helpers'
// This is the form component. 
import AutoComplete from '../../node_modules/material-ui/AutoComplete';
import MenuItem from '../../node_modules/material-ui/MenuItem';
import AppBar from '../../node_modules/material-ui/AppBar';
import FontIcon from '../../node_modules/material-ui/FontIcon';
import {red500, yellow500, blue500} from '../../node_modules/material-ui/styles/colors';
import { RadioButton, RadioButtonGroup } from '../../node_modules/material-ui/RadioButton'
// Helper Function
// import helpers from './utils/helpers';

// This is the main component
var Main = React.createClass({
 getInitialState: function() {
    return { userCards: []};
  },

   setUser: function(user) {
    this.setState({ userCards: user});
  },

// setEmail: function(email){
//   this.setState({email: email });
// },
 //    return {
    
 //    cards: [{
 //    "StoreName": "Walmart",
 //    "CardBalance": "$100",
 //    "RedemptionCode": "123456789",
 //    "RemoveCard": "Blah"
 //  }, 
 // {
 //    "StoreName": "Lesbian Pottert",
 //    "CardBalance": "$200",
 //    "RedemptionCode": "987654321",
 //    "RemoveCard": "Blah"
 //  }, 
 // {
 //    "StoreName": "Home Depot",
 //    "CardBalance": "$100",
 //    "RedemptionCode": "337879657",
 //    "RemoveCard": "Blah"
 //  }, 
 // {
 //    "StoreName": "Apple",
 //    "CardBalance": "$50",
 //    "RedemptionCode": "657890234",
 //    "RemoveCard": "Blah"
 //  }, 
 //  {
 //    "StoreName": "StarBucks",
 //    "CardBalance": "$150",
 //    "RedemptionCode": "9318790562",
 //    "RemoveCard": "Blah"
 //  }] 
 //    }
   
  componentDidMount: function(){
   helpers.getUser().then(function(response){

    // this.setState({email: response.data});
    // var email = response;
    //  console.log("HERE IS AXIOS EMAIL FROM PARENT");
    //  console.log(email)
   }.bind(this));

   helpers.getInventory().then(function(response){
console.log("MAIN getInventory");
console.log(response.data);
this.setState({ userCards : response.data });

       

// userCard = response;
// cookie.save('userCard', userCard);
}.bind(this));
   
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container" id="screen2">
        <div className="row">
          <div className="col-md-6">
            <Inventory cards={this.state.userCards}/>
           </div> 
          <div className="col-md-6">

           <Populate className="slideLeft" cards={this.state.userCards}/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
           <AddCard />
          </div>
        
          <div className="col-md-6">
            <SearchCard  />
          </div>    

        </div>
           
           
      </div>
   );

  },


});

// Export the component back for use in other files
module.exports = Main;