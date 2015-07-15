//retrieveGameSessionForLevel.js

var levelquery = new Parse.Query('game_session');
query.equalTo("username", "jhgfjf76576jhgjhgf");
//could be ascending
query.addDescending('createdAt');
query.first({
  success: function(result) {
  	console.log(result);
   //prob return result and make into a variable
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});