// Include React 
// var React = require('react');
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


// var AddCard = React.createClass({

//   componentDidMount: function(){
    
//     var email = cookie.load('email')
//     console.log(email)

//   },

//   // handleChange functions for each add card form field
//   handleStoreNameChange: function(e){
//     // console.log(e.target.value);

//     this.setState({storeName: e.target.value});

//   },


  


//   handleRedeemCodeChange: function(e){
        
//     //     console.log(e.target.value);
//     // // console.log(e);
//     this.setState({redeemCode: e.target.value});
//   },





//   // This function will respond to the user input 
//   // Custom (developer created)
//   handleChange: function(event){

//       // Here we create syntax to capture any change in text to the query terms (pre-search).
//       // See this Stack Overflow answer for more details: 
//       // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
//       var newState = {};
//       newState[event.target.id] = event.target.value;
//       this.setState(newState);

//   },

//   // When a user submits... 
//   // Custom (developer created)
//   handleClick: function(){

//     // preventing the form from trying to submit itself
//     event.preventDefault();

//     // console.log("CLICK");

//     // console.log(this.state.storeName+" "+this.state.cardBalance+" "+this.state.redeemCode);
//     helpers.addCard(this.state.storeName, this.state.cardBalance, this.state.redeemCode);




//   },


//   // Here we render the function
//   render: function(){

//     return(
  


//         <div className="panel panel-primary" id="addcard">
//               <div className="panel-heading" id="addcardhead">

//               <h3 className="panel-title"><b>Add Gift Card</b></h3>

//               </div>
//               <div className="panel-body" id="addcardbody">
//               <form onSubmit={this.handleClick}>
//                  <div className="form-group">
//                     <label htmlFor="">Store Name</label>
//                     <input
//                       type="text"
//                       placeholder="Store Name"
//                       // value={this.state.StoreName}
//                       className="form-control"
//                       id="storeName"
//                       onChange={this.handleStoreNameChange}
//                       required
//                     />
//                   </div>

//                   <div className="form-group">
//                       <label htmlFor="">Card Balance</label>
//                       <input
//                       type="text"
//                       placeholder="Balance"
//                       // value={this.state.CardBalance}
//                       className="form-control"
//                       id="cardBalance"
//                       onChange={this.handleCardBalanceChange}
//                       required
//                     /> 
//                   </div>

//                   <div className="form-group">
//                       <label htmlFor="">Redemption Code</label>
//                       <input
//                       type="text"
//                       placeholder="Redemption"
//                       className="form-control"
//                       id="redeemCode"
//                       onChange={this.handleRedeemCodeChange}
//                       required
//                     /> 
//                   </div>
//                  <br></br>
//                  <button type="submit" className="btn btn-primary" id="addCardBtn" onClick={this.handleClick}>Add Card</button>
 

//               </form>

//               </div>
              
              
//           </div>
             


//     )
//   }
// });

const giftIcon = {

  color: 'white',
  margin: 11,
}

// Export the component back for use in other files
// module.exports = AddCard;



var AddCard = React.createClass({

getInitialState: function(){
 return {dataSource: []};
},

componentDidUpdate: function(){
  helpers.getInventory();

},

handleUpdateInput: function(value) {
  this.setState({
    dataSource: [
    value
    ],
   });
  },

  handleStoreNameChange: function(){
    var storeName = document.getElementById("storeName").value;

    console.log(storeName);

    this.setState({storeName: storeName});

  },


  handleCardBalanceChange: function(){
    var cardBalance = document.getElementById("cardBalance").value;

    this.setState({cardBalance: cardBalance});
  },


  handleRedeemCodeChange: function(e){
    var redeemCode = document.getElementById("redeemCode").value;

    this.setState({redeemCode: redeemCode});
  },  

handleClick: function(event){

    // preventing the form from trying to submit itself
    event.preventDefault();

    console.log("store is "+this.state.storeName);

    // console.log(this.state.storeName+" "+this.state.cardBalance+" "+this.state.redeemCode);
    helpers.addCard(this.state.storeName, this.state.cardBalance, this.state.redeemCode);


  },  


render: function(){

   return (

<div class="panel panel-primary" id="addcard">
<AppBar

    iconElementLeft={<ActionCardGiftCard style={giftIcon} />}

    title="Add Gift Card"
  />

<div className="panel-body" id="addcardbody">
 
    <form>
      <div className="form-group">

          <div className="row">
           <div className="col-md-12">
        <AutoComplete
          node="string"
          id="storeName"
          hintText="Gift Card Name"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleStoreNameChange}
        />
        </div>
      </div>
           <div className="row">
           <div className="col-md-12">
        <AutoComplete
          node="string"
          id="cardBalance"
          hintText="Card Balance"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleCardBalanceChange}
        />
        </div>
        </div>
        <div className="row">
        <div className="col-md-12">
        <AutoComplete
          node="string"
          id="redeemCode"
          hintText="Redemption Code"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleRedeemCodeChange}
        />
        </div>
        </div>

      </div>
      <button type="submit" className="btn btn-info" id="addCardBtn" onClick={this.handleClick}><span className="glyphicon glyphicon-credit-card"></span> Add Gift Card</button>
    </form>

  </div>
</div>

    )
}

});

module.exports = AddCard;