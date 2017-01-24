// Include React 
var React = require('react');
var axios = require('axios');


// This is the form component. 
var AddCard = React.createClass({

// <<<<<<< cards
//   var newCard            = new Card();


//   // Here we set a generic state associated with the text being searched for
//   // React created
//   getInitialState: function(){
//     return {
//       cardOwnerEmail : "",
//       storeName : "",
//       cardBalance : "",
//       redeemCode : "",
//       tradeAvailability : false
//     }
//   },

// =======
//   // getInitialState: function(){
//   //   return {
//   //     storeName      storeNameInput;
//   //       newCard.cardBalance     = cardBalanceInput;
//   //       newCard.redeemCode      = redeemCodeInput;
//   //       newCard.tradeAvailability
//   //   }
//   // },

//   setTerm: function(term){
//     this.setState({searchTerm: term});
//   },
// >>>>>>> master

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

//     console.log("CLICK");
//     console.log(this.state.term);

// <<<<<<< cards
//     return axios.post({
//       var newCard            = new Card();
//       // newCard.cardOwnerEmail  = currentUserEmail;
//       newCard.storeName       = storeNameInput;
//       newCard.cardBalance     = cardBalanceInput;
//       newCard.redeemCode      = redeemCodeInput;
//       newCard.tradeAvailability = false;
//       })
//   // .then(function(term){
//   //   return(turn);
//   };

// =======
//   },

//   // When a user submits...
//   handleSubmit: function(event) {
//     // preventing the form from trying to submit itself
//     event.preventDefault();
//     // Set the parent to have the search term
//     this.props.setTerm(this.state.term);

//     // Clearing the input field after submitting
//     this.setState({ term: "" });

//     console.log("Posted to MONGODB")

//   //   return axios.post({
//   //     var newCard   = new Card();
//   //     // newCard.cardOwnerEmail  = currentUserEmail;
//   //     newCard.storeName       = storeNameInput;
//   //     newCard.cardBalance     = cardBalanceInput;
//   //     newCard.redeemCode      = redeemCodeInput;
//   //     newCard.tradeAvailability = false;
//   //     })
//   // .then(function(term){
//   //   return(turn);
  
//   // },


//   //   return axios.post({term: term})
//   // .then(function(term){
//   //   return(turn);
//   // })
    
//     // Set the parent to have the search term
//     // this.props.setTerm(this.state.term);
//      },
  
// >>>>>>> master

  // Here we render the function
  render: function(){

    return(

        <div className="panel panel-primary" id="addcard">
              <div className="panel-heading" id="addcardhead">

              <h3 className="panel-title"><b>Add Gift Card</b></h3>

              </div>
              <div className="panel-body" id="addcardbody">
              <form onSubmit={this.handleSubmit}>
                 <div className="form-group">
                    <label htmlFor="">Store Name</label>
                    <input
                      type="text"
                      placeholder="Store Name"
                      // value={this.state.StoreName}
                      className="form-control"
                      id="storeNameInput"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Card Balance</label>
                      <input
                      type="text"
                      placeholder="Balance"
                      // value={this.state.CardBalance}
                      className="form-control"
                      id="cardBalanceInput"
                      onChange={this.handleChange}
                      required
                    /> 
                  </div>

                  <div className="form-group">
                      <label htmlFor="">Redemption Code</label>
                      <input
                      type="text"
                      placeholder="Redemption"
                      className="form-control"
                      id="redeemCodeInput"
                      onChange={this.handleChange}
                      required
                    /> 
                  </div>
                 <br></br>
                 <button type="submit" className="btn btn-primary" id="addCardBtn" onClick={this.handleClick}>Add Card</button>
 

              </form>

              </div>
              
              
          </div>
             


    )
  
  }
  
});

// Export the component back for use in other files
module.exports = AddCard;