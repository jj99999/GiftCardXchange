var React = require('react');
var axios = require('axios');

var cookie = require('react-cookie');

var helpers = require("../utils/helpers");


// This is the form component. 
var SearchCard  = React.createClass({

  componentDidMount: function(){


  },

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
  handleClick: function(){

    // preventing the form from trying to submit itself
    event.preventDefault();

    helpers.searchTradeCard();

    // return storesearch;   
    
  },



  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="searchcard">
              <div className="panel-heading" id="searchcardhead">
                  <h3 className="panel-title"><b>Search for Gift Cards to trade!</b></h3>
              </div>
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