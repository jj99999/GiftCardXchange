// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var email;

var helper = {

        
getUser: function(){
	return axios.get("/login").then(function(response){
		console.log("HERE IS AXIOS EMAIL");
	   email = response;
		console.log(email);
	})

}


};




// We export the helpers function 
module.exports = helper;