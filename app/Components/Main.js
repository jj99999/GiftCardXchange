var React = require("react");
var createFragment = require('react-addons-create-fragment');
var Inventory = require("./Children/Inventory");
var AddCard = require("./Children/AddCard");
var SearchCard = require("./Children/SearchCard");
// Here we include all of the sub-components
// var Form = require("./children/Form");
// var Results = require("./children/Results");

// Helper Function
var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return { searchTerm: "", results: [] };
  },

   setTerm: function(term) {
    this.setState({ searchTerm: term });
  },


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


  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container" id="screen2">
            <div className="row">
             <div className="col-md-12">
          
            </div>
           </div>
      </div>
  
           

            
      


  

    );
  }
});

// Export the component back for use in other files
module.exports = Main;