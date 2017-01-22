// Include React 
var React = require('react');
var axios = require('axios');


// This is the form component. 
var AddCard = React.createClass({

  var newCard            = new Card();


  // Here we set a generic state associated with the text being searched for
  // React created
  getInitialState: function(){
    return {
      cardOwnerEmail : "",
      storeName : "",
      cardBalance : "",
      redeemCode : "",
      tradeAvailability : false
    }
  },


  // This function will respond to the user input 
  // Custom (developer created)
  handleChange: function(event){

      // Here we create syntax to capture any change in text to the query terms (pre-search).
      // See this Stack Overflow answer for more details: 
      // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(newState);

  },

  // When a user submits... 
  // Custom (developer created)
  handleClick: function(){

    console.log("CLICK");
    console.log(this.state.term);

    return axios.post({
      var newCard            = new Card();
      // newCard.cardOwnerEmail  = currentUserEmail;
      newCard.storeName       = storeNameInput;
      newCard.cardBalance     = cardBalanceInput;
      newCard.redeemCode      = redeemCodeInput;
      newCard.tradeAvailability = false;
      })
  // .then(function(term){
  //   return(turn);
  };


  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="addcard">
              <div className="panel-heading" id="addcardhead">

              <h3 className="panel-title"><b>Add Gift Card</b></h3>

              </div>
              <div className="panel-body" id="addcardbody">
              <form>
                 <div className="form-group">
                      <label for="">Store Name</label>
                      <input type="text" className="form-control" id="storeNameInput" placeholder="Lesbian Pottery" onChange={this.handleChange}></input>
                      </div>

                  <div className="form-group">
                      <label for="">Card Balance</label>
                      <input type="text" className="form-control" id="redeemCodeInput" placeholder="1234567898765432"  onChange={this.handleChange}></input>
                      </div>

                  <div className="form-group">
                      <label for="">Redemption Code</label>
                      <input type="text" className="form-control" id="redeemCodeInput" placeholder="1234567898765432" onChange={this.handleChange}></input>
                      </div>
                 <button type="submit" className="btn btn-primary" id="addCardBtn" onClick={this.handleClick}>Add Card</button>
 

              </form>

              </div>
              
              
          </div>
             


    )
  
  }
  
});

// Export the component back for use in other files
module.exports = AddCard;