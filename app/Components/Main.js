var React = require("react");
var createFragment = require('react-addons-create-fragment');
var Inventory = require("./Children/Inventory");
var AddCard = require("./Children/AddCard");
var SearchCard = require("./Children/SearchCard");

// Helper Function
var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({
getInitialState: function(){
    return {
    cards: [{
    "StoreName": "Walmart",
    "CardBalance": "$100",
    "RedemptionCode": "123456789",
    "RemoveCard": "Blah"
  }, 
 {
    "StoreName": "Lesbian Pottert",
    "CardBalance": "$200",
    "RedemptionCode": "987654321",
    "RemoveCard": "Blah"
  }, 
 {
    "StoreName": "Home Depot",
    "CardBalance": "$100",
    "RedemptionCode": "337879657",
    "RemoveCard": "Blah"
  }, 
 {
    "StoreName": "Apple",
    "CardBalance": "$50",
    "RedemptionCode": "657890234",
    "RemoveCard": "Blah"
  }, 
  {
    "StoreName": "StarBucks",
    "CardBalance": "$150",
    "RedemptionCode": "9318790562",
    "RemoveCard": "Blah"
  }] 
    }
  },
  // Here we set a generic state associated with the number of clicks
  // getInitialState: function() {
  //   return { searchTerm: "", results: [] };
  // },

  //  setTerm: function(term) {
  //   this.setState({ searchTerm: term });
  // },

  // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // props or state
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log("Results", data);
          this.setState({ results: data });

           helpers.postResults(this.state.searchTerm).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated results
          // helpers.getResults().then(function(response) {
          //   console.log("Current Results", response.data);

          //   this.setState({ results: response.data });

          // }.bind(this));
        }.bind(this));

        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
    },
  componentDidMount: function(){
    console.log("this is the state of cards", this.state.cards);

  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container" id="screen2">
            <div className="row">
             <div className="col-md-12">
            <Inventory cards={this.state.cards}/>
            </div>
           </div>
      </div>
  
           

            
      


  

    );
  }
});

// Export the component back for use in other files
module.exports = Main;