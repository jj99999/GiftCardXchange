var React = require('react');

// This is the form component. 
var SearchCard  = React.createClass({

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

        <div className="panel panel-primary" id="buycard">
              <div className="panel-heading" id="buycardhead">
                  <h3 className="panel-title"><b>Search for Gift Cards</b></h3>
              </div>
              <div className="panel-body" id="buycardbody">
  

              <form>
                  <div className="form-group">
                      <label for="">Store Name</label>
                      <input type="text" className="form-control" id="storeNameBuyInput" placeholder="Lesbian Pottery"></input>
                      </div>

                      <div className="form-group">
                      <label for="">Up To What Amount?</label>
                      <input type="text" className="form-control" id="cardBalanceBuyInput" placeholder="$20.00"></input>
                      </div>

                      
                      <button type="submit" className="btn btn-primary" id="buyCardBtn">Search for Card</button>
              </form>

            </div>
          </div>
             


    )
  }
});

// Export the component back for use in other files
module.exports = SearchCard;