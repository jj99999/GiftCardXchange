var React = require('react');
var axios = require('axios');
var cookie = require('react-cookie');
var userCard;
// var Card = require('../../models/card');

var helpers = require("../utils/helpers");

// This is the form component. 
var Inventory = React.createClass({

renderCards: function(){
  // var cookieLoad = cookie.load('userCard');
  //   console.log("COOKIE LOAD OBJECT");
  //   console.log(cookieLoad);

  return this.props.cards.map(function(card,i,e,o,u){
  
   return(

 

        <tr className="panel" key={i}>

             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={e}>{card.storeName}</td>
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={o}>{card.cardBalance}</td>
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={u}>{card.redeemCode}</td>

        </tr>



    )
    });
},

// renderContainer: function(){
//   return(

   
//     {this.renderCards()}
  

  

//     )
// },


  
  render: function(){

    return(

       <div className="panel panel-primary" id="panel">
        <div className="panel-heading" id="panelhead">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <h3 className="panel-title" id="giftcardinventory"><b>Your Gift Card Inventory</b></h3>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table>
              <thead className="panel-heading" id="panelhead">
              <tr>
                  <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Store Name</th>
                    <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Gift Card Balance</th>
                  <th className="col-lg-4 col-md-4 col-sm-4 col-xs-4">Redemption Code</th>
              </tr>
              </thead>
        
            <tbody className="col-md-12">
                {this.renderCards()}
            </tbody>
          </table>
        </div>
        </div>  
      </div> 

    )
 
   
  },

});


module.exports = Inventory;