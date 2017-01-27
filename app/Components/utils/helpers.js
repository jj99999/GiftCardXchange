// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var email;
import cookie from 'react-cookie'


var helper = {
        
getUser: function(){
	return axios.get("/login").then(function(response){
		// console.log("HERE IS AXIOS EMAIL FROM HELPERS");
	   	email = response.data;
		// console.log(email);
		cookie.save('email', email);
		return email;
	})

},

 addCard: function(storeName, cardBalance, redeemCode) {
 	
 	// console.log("ADD CARD function is running");
 	email = cookie.load('email');
 	// console.log(email);

    // var newCard = { email: email, storeName: storeName, cardBalance: cardBalance, redeemCode: redeemCode };
    // console.log(newCard);
    return axios.post("/addcard", { email: email, storeName: storeName, cardBalance: cardBalance, redeemCode: redeemCode })
      .then(function(response) {
        // console.log("axios results", response);
        return response;
      }).catch(function(error){
      	console.log(error);
      });

 },

  allCards: function(){

 	  return axios.get('/allcards', function(){
 		
 	  });
  },

  tradeCard: function(){
    return axios.get('/trade', function(){

    });

  }

};


module.exports = helper;