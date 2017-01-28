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
    var cookieLoad = cookie.load('email');
		return email;
	})

},

 addCard: function(storeName, cardBalance, redeemCode) {
 	
 	// console.log("ADD CARD function is running");
 	email = cookie.load('email');
 	// console.log(email);

    var newCard = { email: email, storeName: storeName, cardBalance: cardBalance, redeemCode: redeemCode };
    // console.log(newCard);
    return axios.post("/addcard", newCard);
      // .then(function(response) {
      //   // console.log("axios results", response);
      //   // return response;
      // }).catch(function(error){
      // 	console.log(error);
      // });

 },

 getInventory: function(Card){
   email = cookie.load('email');

  return axios.get("/getcard", {Card: Card}).then(function(response){
    // console.log("INVENTORY USER EMAIL")
   
       console.log("GETINVENTORY RESPONSE");
       // console.log(response);
       return response;
  });
  
 },


  allCards: function(){

 	  return axios.get('/allcards', function(){
 		
 	  });
  },

  tradeCard: function(req, res){
    console.log("tradeCard running");
    // res.sendFile('trade.html', { root: "public" });

    return axios.get('/trade', function(){
    
    });
  }

  

};


module.exports = helper;