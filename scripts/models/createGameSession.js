//createGameSession.js



//Make Array for kill list
//  retrieve friendusernames from DOM display
//find the current user's username

var game_session = new Parse.Object.extend("game_session");




game_session.set({currentplayer: facebookUsername, highscore: 1,
    kill_list: [[friendusername1,1,1],[friendusername2,1,1],[friendusername3,1,1]]});