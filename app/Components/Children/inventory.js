var React = require('react');
var axios = require('axios');



// This is the form component. 
var Inventory = React.createClass({

  // Here we set a generic state associated with the text being searched for
  // React created

  componentDidMount: function() {
    // Get the latest history.

return axios.get({term: term}).then(function(term){
              console.log(term.id);
              return(term)
       });

  },

  
  
  // Here we render the function
  render: function(){

    return(

       <div className="panel panel-primary" id="panel">
        <div className="panel-heading" id="panelhead">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
              <h3 className="panel-title" id="giftcardinventory"><b>Your Gift Card Inventory</b></h3>
            </div>
          </div>
        </div>
        <div className="panel-body" id="panelbody">
          <table className="table table-hover" id='carddetails'>
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


module.exports = Inventory;