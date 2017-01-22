// this is placeholder javascript to handle the add card function



// load up the card model
var Example = require('../app/models/card');

// we will need to get the card properties from the form in the Add Card component

// how do we tie the card back to the current user?  Can we we add user as a property here?
var addCard = {
	store: "",
	code: "",
	balance: 0,
	avaliability: false
	};


// event listener for submit button click
$("#addCardBtn").on("click", function()
{
	addCard.name = $("#storeNameInput").val().trim();
	addCard.code = $("#redeemCodeInput").val().trim();
	// need to strip the dollar sign off the input amount
	addCard.balance = $("#cardBalanceInput").val().trim();
	
	console.log("added Card: " + JSON.stringify(addCard));
	
    // Save new value to Firebase
	database.ref().push(train);

	// clear form fields
	$("#storeNameInput").val("");
	$("#redeemCodeInput").val("");
	$("#cardBalanceInput").val("");

	// Don't refresh the page
	return false;
});



// Route to post Add Card form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {

  // We use the "Example" class we defined above to check our req.body against our user model
  var card = new Example(req.body);

  // With the new "Example" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});

