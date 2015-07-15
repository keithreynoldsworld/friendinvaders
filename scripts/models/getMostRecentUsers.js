//getMostRecentUsers.js

//make a call to parse.com and return an array with pic, first name, last name


var uQuery = new Parse.Query('User');
uQuery.limit(10)
//could be ascending

uQuery.find({
  success: function(result) {
  	console.log(result);
   //prob return result and make into a variable
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});