# FRIEND INVADERS!!!

## About

Everyone likes to have fun.  Shooting things is fun.  Shooting your friends is even more fun!

Friend Invaders is a one-page-app game.  The usual attacking aliens in a space shoot-em-up game are replaced by 
pictures of the user's facebook friends' faces.  The user's face moves back and forth on the bottom of the screen shooting up at the friend invaders.  The first version of this game will be optimized for use in a browser on a desktop or laptop, but may work for higher-speed mobile devices as well. 

The About section will feature Keith Reynolds in a youtube video singing and playing the Friend Invaders theme song.

The Hall of Champions will display the top scores and players in a star wars type fashion.

The main action will take place in an HTML5 canvas manipulated with Javascript.

A user with a keyboard will be only using three keys: left, right, and spacebar(shoot).

A user without a keyboard will be able to touch on screen buttons representing left right and spacebar(shoot).
## User Stories

Include a link to your trellow board with user stories.

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



## APIs, Plugins, Libraries and Frameworks

A list of all of the third-party tools and code you will need for your project as well as a short demo (with code) of you successfully using that tool.

