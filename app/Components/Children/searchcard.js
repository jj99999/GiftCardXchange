var React = require('react');
var axios = require('axios');

var helpers = require("../utils/helpers");

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
   
    helpers.tradeCard();
  

  },

  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="searchcard">
              <div className="panel-heading" id="searchcardhead">
                  <h3 className="panel-title"><b>What type of gift card are you looking for?</b></h3>
              </div>
              <div className="panel-body" id="buycardbody">
  

              <form action="/trade">
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

                      
                      <button type="submit" className="btn btn-primary" id="searchCardBtn">Search for Card</button>


              </form>

            </div>
          </div>
             


    )
  }
});

// Export the component back for use in other files
module.exports = SearchCard;