var React = require('react');

// This is the form component. 
var Inventory = React.createClass({

  // Here we set a generic state associated with the text being searched for
  // React created
  getInitialState: function(){
    return {
      term: ""
    }
  },

  setTerm: function(term){
    this.setState({searchTerm: term});
  }

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
    
    // Set the parent to have the search term
    this.props.setTerm(this.state.term);

  },

  // Here we render the function
  render: function(){

    return(

       <div class="panel panel-primary" id="panel">
        <div class="panel-heading" id="panelhead">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <h3 class="panel-title" id="giftcardinventory"><b>Your Gift Card Inventory</b></h3>
            </div>
          </div>
        </div>
        <div class="panel-body" id="panelbody">
          <table class="table table-hover" id='carddetails'>
            <thead>
              <tr>
                <th id="field1">Store Name</th>
                <th id="field2">Card Balance</th>
                <th id="field3">Redemption Code</th>
                <th id="field4">Available for Sale</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div> 

    )
  }
});

// Export the component back for use in other files
module.exports = Inventory;