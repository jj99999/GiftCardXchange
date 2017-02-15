// var React = require('react');
// var axios = require('axios');
// var cookie = require('react-cookie');
// var userCard;
// var Card = require('../../models/card');

import React from 'react';
import axios from 'axios';
import cookie from 'react-cookie';
import ActionCardGiftCard from '../../../node_modules/material-ui/svg-icons/action/card-giftcard';
import AppBar from '../../../node_modules/material-ui/AppBar';
import CardMembersehip from '../../../node_modules/material-ui/svg-icons/action/card-membership';
import CardTravel from '../../../node_modules/material-ui/svg-icons/action/card-travel';

// var helpers = require("../utils/helpers");
import helpers from "../utils/helpers";

const iconStyle = {
    color: 'white',
    margin: 11,
}

// This is the form component. 
var Populate = React.createClass({

// componentDidUpdate: function(){
//     console.log("the props are ");
//     console.log(this.props.cards);
//   },

// },  

renderCards: function(){

  // return this.props.searchCards.map(function(card,i,e,o,u){
  
  //  return(

 

  //       <tr className="panel" key={i}>

  //            <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={e}><h4>{card.storeName}</h4></td>
  //            <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={o}><h4>${card.cardBalance}</h4></td>
           

  //       </tr>



  //   )
  //   });


  return this.props.populate.map(function(card,i,e,o,u){

    return(
      <tr className="panel" key={i}>
     
      
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={e}><h4>{card.storeName}</h4></td>
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={o}><h4>${card.cardBalance}</h4></td>
     </tr>
    )
  });
},



  
  render: function(){

    return(

       <div className="panel panel-primary" id="panel">
        
      <AppBar

    iconElementLeft={<CardTravel style={iconStyle} />}

    title="Choose Your Dream Card"
  />
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
          </div>
        
        
        <div className="row">
        
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="tablepopulate">
              <thead id="populatethead">
              <tr>
                  <th><h3>Store Name</h3></th>
                  <th><h3>Gift Card Balance</h3></th>
              </tr>
              </thead>
        
            <tbody>
             {this.renderCards()}
            </tbody>
          </table>

          
        </div>
        
        </div>  
      
      </div> 

    )
 
   
  },

});


module.exports = Populate;