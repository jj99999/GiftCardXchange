// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

var email;
import cookie from 'react-cookie'

var helper = {
        
getUser: function(){
	return axios.get("/login").then(function(response){
		console.log("HERE IS AXIOS EMAIL FROM HELPERS");
	   	email = response.data;
		console.log(email);
		cookie.save('email', email);
		return email;
	})

}


};




// We export the helpers function 
module.exports = helper;