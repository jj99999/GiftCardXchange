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

             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={e}><h4>{card.storeName}</h4></td>
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={o}><h4>${card.cardBalance}</h4></td>
             <td  className="col-lg-4 col-md-4 col-sm-4 col-xs-4" key={u}><h4>{card.redeemCode}</h4></td>

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
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
              <h2 className="panel-title" id="giftcardinventory"><center><b>Your Gift Card Inventory</b></center></h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
          </div>
        </div>
        
        <div className="row">
        
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <thead>
              <tr>
                  <th><h3>Store Name</h3></th>
                  <th><h3>Gift Card Balance</h3></th>
                  <th><h3>Redemption Code</h3></th>
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


module.exports = Inventory;