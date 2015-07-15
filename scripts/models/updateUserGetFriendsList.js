

UPDATE USER

GET the following from facebook

first name, last name, full name, profile pic url



 FB.api('/me', {fields: 'last_name, first_name, name'}, function(response) {
  console.log(response);
});

  FB.api('me/picture?fields=url,picture.width(160).height(160)', function(response) {
  console.log(response);
});


//SET current USER

//first_name, last_name, full_name, profile_pic_url

Parse.User.current().set({first_name: VARIABLE, last_name: VARIABLE, full_name: VARIABLE});

Parse.User.current().set({profile_pic_url: VARIABLE});



GET FRIENDSLIST

GET friendlist // nJust the ids, the rest is  already on parse and pics and names<maybe>from facebook

 FB.api('/me/friends', {fields: 'id'}, function(response) {
  console.log(response);
});

//no, i already have this info on Parse
// FB.api('/id/picture?fields=url,picture.width(160).height(160)',{fields: first_n})

//GET pics and names from parse




var query = new Parse.Query(Parse.User);
query.equalTo("username", "jhgfjf76576jhgjhgf");
query.find({
  success: function(results) {
  	console.log(results);
    console.log("Successfully retrieved " + results.length + " users.");
    // Do something with the returned Parse.Object values
    // Display the first name, last initial, and pic 
    //AND BE SURE TO INCLUDE the username hidden in the display
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('playerName'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});



//results.map('friend id, first_name, last_name, profile_pic_url');


