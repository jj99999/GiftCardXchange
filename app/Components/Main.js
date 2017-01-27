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


    return { email:""};
  },



  //   },
  componentDidMount: function(){
   helpers.getUser().then(function(response){


    console.log("GET INVENTORY");
helpers.getInventory();
    // this.setState({email: response.data});
    var email = response;
     console.log("HERE IS AXIOS EMAIL FROM PARENT");
     console.log(email);
   }.bind(this));

   
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

           <div className="row">
           <div className="col-md-4">

           </div>
           <div className="col-md-4">
           <AddCard />
    
           </div>
           <div className="col-md-4">

           </div>

           </div>
      </div>


  

    );

  }


});

// Export the component back for use in other files
module.exports = Main;