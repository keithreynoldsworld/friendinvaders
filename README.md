# FRIEND INVADERS!!!

## About

Everyone likes to have fun.  Shooting things is fun.  Shooting your friends is even more fun!

Friend Invaders is a one-page-app game.  The usual attacking aliens in a space shoot-em-up game are replaced by 
pictures of the user's facebook friends' faces.  The user's face moves back and forth on the bottom of the screen shooting up at the friend invaders.  The first version of this game will be optimized for use in a browser on a desktop or laptop, but may work for higher-speed mobile devices as well. 

The About section will feature Keith Reynolds in a youtube video singing and playing the Friend Invaders theme song.

The Hall of Champions will display the top scores and players in a star wars type fashion.

The main action will take place in an HTML5 canvas manipulated with Javascript.


I believe in fun and in creating fun.  That's the point of this app.  Serious fun takes serious planning!

## Bare Bones and More features

Please keep mind what I've described is a minimal bare bones version - the bottom rung I hope to achieve.

Other features include:
* upon been killed, a picture of the user's friend who killed him or her appears with a speech bubble that says "haha [user name] you're dead"
* user can only play five games.  the ability to play more comes back in two hours.
* user's friends' face appear in a porthole of a spaceship
* different types of deaths
* as many levels as possible, all different.  my real goal for presentation day is 100 levels.
* sign in with google plus
* android and iphone app versions
* using the users's 'likes' against him or her.  The friend invaders could rag on their favorite bars, restaurants, books, etc.
* the ability to choose exactly which friends you fight against.
* two player game - two shooters down below, each controlled from a different location
* additional types of friend invaders... perhaps a friend invaders centipede spaceship?
* different projectiles - like bananas that don't do much damage and make a mess.  or one that shrinks the enemy and you have to shrink it so many times to kill it
* friendlies in the air field who you may not hit
* other levels could be other games, like concentration, simple simon, flappybird or combat - all personalized with facebook.
* listen to a soundtrack while playing
* special bonus targets like the fruit in pacman
* keep track of who has killed who and how many times, so you and your friends can compete- i killed u 5000 times! - oh yeah, well i killed you 6147 times, so there, ha!
* allow the user to upload any pictures of their choice for the friend invaders
* the ability to purchase more lives, or a cool hat for the userpic - in app purchases
* a map of where people are currently playing friend invaders
* personalized friend invaders merchandise
* user must hit ammo ships to refuel
* record your game and share on youtube
* slot machine level bonu!
* comment the code very well so other coders can easily make their ownn versions
* the ability to make your own level to share with friends
* adapt to be an official facebook app
* adapt the theme song to include the user's name
* choose a language
* post a screenshot of your game on facebook
* replay!
* pause


## User Stories

[user stories on trello.com](https://trello.com/b/pSk7AzY3/friend-invaders "user-stories")

## Wireframes
check out my [wireframes](https://keithreynoldsworld.mybalsamiq.com/mockups/3298663.png?key=f9c1acfc12ca5adbd1ec074dba091473af584790 "mockups"). Simple pictures are the best.


## Models

level model
	
*	level: number, required default 1
*	user_shots_per_second: number required default 5 
*	number_of_friend_invaders: number required default 10
*	size_of_friends: number required default 25
*	speed_of_friends: number required default 1
*	path_of_friends: string required default “normal"
*	path_of_user bullet: string required default “straight"
*	path_of_aliens bullets: string required default “straight”
*	speed_of_user bullet: number required default 20
*	speed_of_aliens bullets: number required default 20
*	points_per_kill: number required default 1
	
	
user model

*	photos_of_friends: array of 10 photo models 
*	first_name: string required
*	last_name: string required
*	photo_of_user: object photo model
*	current_level: number required default 1
	
photo model

* url : string required
* x — X coord of the face in the picture
* y — Y coord of the face in the picture
* width — Width of the face
* height — Height of the face
* positionX — X position relative to the document
* positionY — Y position relative to the document
* offsetX — X position relative to the offset parent
* offsetY — Y position relative to the offset parent
* scaleX — Ratio between original image width and displayed width
* scaleY — Ratio between original image height and displayed height
* confidence — Level of confidence

level score model

* id_of_user - string, required
* final_level_score - number
* level - number

final score model

* id_of_user - string, required
* final_score - string, required


## APIs, Plugins, Libraries and Frameworks

[phaser.io a game engine](http://phaser.io/ "phaser")

[jquery](https://jquery.com/ "jquery")

[jQuery facefinder plug-in](http://facedetection.jaysalvat.com/ "facefinder")

[facebook login](https://developers.facebook.com/products/login "facebook login")

[Facebook graph api](https://developers.facebook.com/docs/graph-api "facebook graph api")

[parse.com cloud for back-end](https://www.parse.com "parse")

[git hub to host front end code](https://github.com/keithreynoldsworld "github")

[backbone javascript framework](http://backbonejs.org/ "backbone")


Demos coming soon.

