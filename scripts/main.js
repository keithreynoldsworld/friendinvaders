var React = require('react');
var $ = require('jquery');
var Backbone = require('backbone');
var killListHolder = {happy:"sad"};
var Parse = require('parse-browserify');
var klist = {};
var klistFINAL = {};
klistFINAL.list = [];
var myProfilePic = {};
myProfilePic.house = {};
Parse.initialize("n3pY1RgYj6joprnEw22uqgnrKuCjlOXUxzq2hWhl", "LqdhjBO6ENSnsk7z7N4k4sfQw7eOv7ewC8kl1cV5");
// var LoginComponent = require("./components/LoginComponent");
// var ChooseFriendsToKillComponent = require("./components/ChooseFriendsToKillComponent");
// var AboutComponent = require("./components/AboutComponent");
// var HighScoresComponent = require("./components/HighScoresComponent");
// var LevelOneComponent = require("./components/LevelOneComponent");
// var LevelTwoComponent = require("./components/LevelTwoComponent");
// var LevelThreeComponent = require("./components/LevelThreeComponent");

var App = Backbone.Router.extend({
	routes: {
		"": "login",
		"login":"login",
		"choosefriendstokill": "choosefriendstokill",
		"about":"about",
		"highscores": "highscores",
		"levelone": "levelone",
		"leveltwo": "leveltwo",
		"levelthree": "levelthree",
	},
	login: function() {
		// Initialize Parse
  		
    	
					
				$('#leveltitle').append("<button id='LO'>Logout from facebook</button>");
				$('#leveltitle').append("are you ready to MURDER your friends?");
				$('#phaser-example').html('<button id="gotochoose">kill</button>');
				// $('#LO').on('click', function(e){
				// 	e.preventDefault;
				// 	console.log('LO button clicked');
				// 	FB.logout(function(response) {
  		// 				// user is now logged out
				// 	});
				// });
				$('#gotochoose').on('click', function(e){
					e.preventDefault;
					console.log('button works');
					myRouter.navigate('choosefriendstokill', {trigger: true});
				});

				
		
		

        // Run code after the Facebook SDK is loaded.
  

  
		// React.render(
		// 	<LoginComponent user={user} myRouter={myRouter} />,
		// 	document.getElementById("container"));
	},
	choosefriendstokill: function() {
		$('#leveltitle').html("First CHOOSE which friends to MURDER. Then press PLAY!");
		$('#phaser-example').html('<button style="width:120px;height:120px;background:none" id="friendlist">CHOOSE YOUR VICTIMS</button><button id="gotogame">play</button><br/>');
		$('#gotogame').on('click', function(){
			 
			 klist.LIST =  $("#chosen").find('img');
			 console.log(klist.LIST[0].src);
			 console.log(klist.LIST.length);
			 if(klist.LIST.length===0){}
			 else if(klist.LIST.length===1){klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[0].src);}
			 else if(klist.LIST.length===2){klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[1].src);klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[1].src);}
			 else if(klist.LIST.length===3){klistFINAL.list.push(klist.LIST[0].src);klistFINAL.list.push(klist.LIST[1].src);klistFINAL.list.push(klist.LIST[2].src);klistFINAL.list.push(klist.LIST[0].src);}
			 else{for(var i = 0;i<4;i++){
			 	klistFINAL.list.push(klist.LIST[i].src);}
			 }
    //          console.log(klistFINAL.list);
			 myRouter.navigate('levelone', {trigger: true});
		});
		displayFriends();
		FB.api('me/picture?width=100&height=100', function(response) {
  			console.log(response);
  			myProfilePic.house = response.data.url;
  		});
  		
  		
		//displayFriends();

		// React.render(
		// 	<ChooseFriendsToKillComponent user={user} myRouter={myRouter} />,
		// 	document.getElementById("container"));
	},
	about: function() {
		$('#leveltitle').html("This video explains friend invaders in depth");
		$('#phaser-example').html('****video placeholder***<button id="gotohome">home</button>');
		$('#gotohome').on('click', function(){
			myRouter.navigate('login', {trigger: true});
		})
		// React.render(
			
		// 		<AboutComponent user={user} myRouter={myRouter} />,
				
		// 	document.getElementById("container"));
	},
	highscores: function() {
		$('#leveltitle').html("HIGH SCORES");
		$('#phaser-example').html('keith reynolds has won every time');
		// React.render(
			
		// 		<HighScoresComponent user={user} myRouter={myRouter} />,
		// 	document.getElementById("container"));
	},
	levelone: function() {
		$('#leveltitle').html("LEVEL ONE - EASY PEASEY");
		$('#phaser-example').html('');
		$('#chooserlistcontainer').hide();

		levelOne();

		// React.render(
			
		// 		<LevelOneComponent />,
		// 	document.getElementById("container"));
	},
	leveltwo: function() {
		$('#leveltitle').html("LEVEL TWO - UH OH");
		$('#phaser-example').html('');
		levelTwo();
		// React.render(
			
		// 		<LevelTwoComponent user={user} myRouter={myRouter} />,
		// 	document.getElementById("container"));
	},
	levelthree: function() {
		$('#leveltitle').html("LEVEL THREE - BOOK OF REVELATIONS");
		$('#phaser-example').html('');
		levelThree();
			// 	React.render(
			
			// 	<LevelThreeComponent user={user} myRouter={myRouter}/>,
			// document.getElementById("container"));
	}

});

var myRouter = new App();
Backbone.history.start();
 var friendList = {};




console.log('application running');

function displayFriends(){


    $( "#friendlist" ).on( "click", function() {
    	console.log('friendlist-button');
    	
    	var uQuery = new Parse.Query(Parse.User);
		// uQuery.limit(10);
		// uQuery.toJSON;
//could be ascending

		uQuery.find({
  			success: function(results) {
  				
  				console.log(results);
  				console.log(results[0].attributes.first_name);
  				var f = ['asf','asdfasdf','asdffads'];
  				console.log(f);
  				
  				//console.log(results.length);
  				// var eat = results[0];
  				// console.log(eat);
  				for(var i=0;i<results.length;i++){
  					$('#watchlist').prepend("<div class='chooser'><img src='" + 
  						results[i].attributes.profile_pic_url + "'/><br/><br/>"+
  						results[i].attributes.first_name + "<br/> " +
  						results[i].attributes.last_name +
  						"<br/><button class='kill'>KILL</button> </div>");
   //prob return result and make into a variable
   				}
   				addClickersToFriends();
    		},
  
  			error: function(error) {
    			alert("Error: " + error.code + " " + error.message);
  			}
		});

		
  // 		FB.api('/me/friends', {fields: 'id'},function(response) {
  // 		$('#phaser-example').append(response);
  // 		friendList.list = response;
  // 		console.log(friendList.list);
  // 		for(var i=0;i<response.data.length;i++){
  // 		$('#watchlist').prepend("<div class='chooser'><img src='" + friendList.list.data[i].picture.data.url + "'/><br/><br/>"+
  // 			friendList.list.data[i].name + "<br/><button class='kill'>KILL</button> </div>")
  // 		}
  		
		// });
	});
}

function addClickersToFriends(){
	function addToWatch(e) {
	console.log("clicked");

	$('#chosen').append(this);
	$(this).append('<br/>R. I. P.');
	}	
	$('.chooser').click(addToWatch);
 			
}
function levelOne(){
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
		var file1 = {
		            type: 'image',
		            key: 'example',
		            url: klistFINAL.list[0],
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file1.data = new Image();
		        file1.data.name = file1.key;

		        file1.data.onload = function () {
		            file1.loaded = true;
		            game.cache.addImage(file1.key, file1.url, file1.data);
		        };

		        file1.data.onerror = function () {
		            file1.error = true;
		        };

		        file1.data.crossOrigin = '';
		        file1.data.src = file1.url;

				var file2 = {
		            type: 'image',
		            key: 'example',
		            url: klistFINAL.list[1],
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file2.data = new Image();
		        file2.data.name = file2.key;

		        file2.data.onload = function () {
		            file2.loaded = true;
		            game.cache.addImage(file2.key, file2.url, file2.data);
		        };

		        file2.data.onerror = function () {
		            file2.error = true;
		        };

		        file2.data.crossOrigin = '';
		        file2.data.src = file2.url;

		        var file3 = {
		            type: 'image',
		            key: 'example',
		            url: klistFINAL.list[2],
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file3.data = new Image();
		        file3.data.name = file3.key;

		        file3.data.onload = function () {
		            file3.loaded = true;
		            game.cache.addImage(file3.key, file3.url, file3.data);
		        };

		        file3.data.onerror = function () {
		            file3.error = true;
		        };

		        file3.data.crossOrigin = '';
		        file3.data.src = file3.url;

		        		var file4 = {
		            type: 'image',
		            key: 'example',
		            url: klistFINAL.list[3],
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file4.data = new Image();
		        file4.data.name = file4.key;

		        file4.data.onload = function () {
		            file4.loaded = true;
		            game.cache.addImage(file4.key, file4.url, file4.data);
		        };

		        file4.data.onerror = function () {
		            file4.error = true;
		        };

		        file4.data.crossOrigin = '';
		        file4.data.src = file4.url;


		       	// var file5 = {
		        //     type: 'image',
		        //     key: 'example',
		        //     url: myProfilePic.house.data.url,
		        //     data: null,
		        //     error: false,
		        //     loaded: false
		        // };

		        // file5.data = new Image();
		        // file5.data.name = file5.key;

		        // file5.data.onload = function () {
		        //     file5.loaded = true;
		        //     game.cache.addImage(file5.key, file5.url, file5.data);
		        // };

		        // file5.data.onerror = function () {
		        //     file5.error = true;
		        // };

		        // file5.data.crossOrigin = '';
		        // file5.data.src = file5.url;
		function preload() {
			game.load.crossOrigin = 'anonymous';
		    game.load.image('bullet', '../assets/games/invaders/bullet.png');
		    game.load.image('enemyBullet', '../assets/games/invaders/enemy-bullet.png');
		    game.load.spritesheet('invader1', file1.data.src, 160, 160);
		    game.load.spritesheet('invader2', file2.data.src, 160, 160);
		    game.load.spritesheet('invader3', file3.data.src, 160, 160);
		    game.load.spritesheet('invader4', file4.data.src, 160, 160);
		    game.load.image('ship', '../assets/games/invaders/player.png');
		    game.load.spritesheet('kaboom', '../assets/games/invaders/explode.png', 128, 128);
		    game.load.image('starfield', '../assets/games/invaders/starfield.png');
		    game.load.image('background', '../assets/games/starstruck/background2.png');

		}

		var player;
		var aliens;
		var bullets;
		var bullet;
		var live;
		var bulletTime = 0;
		var cursors;
		var fireButton;
		var explosions;
		var starfield;
		var score = 0;
		var scoreString = '';
		var scoreText;
		var lives;
		var enemyBullet;
		var enemyBullets;
		var firingTimer = 0;
		var stateText;
		var livingEnemies = [];

		function create() {

		    game.physics.startSystem(Phaser.Physics.ARCADE);

		    //  The scrolling starfield background
		    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');

		    //  Our bullet group
		    bullets = game.add.group();
		    bullets.enableBody = true;
		    bullets.physicsBodyType = Phaser.Physics.ARCADE;
		    bullets.createMultiple(30, 'bullet');
		    bullets.setAll('anchor.x', 0.5);
		    bullets.setAll('anchor.y', 1);
		    bullets.setAll('outOfBoundsKill', true);
		    bullets.setAll('checkWorldBounds', true);

		    // The enemy's bullets
		    enemyBullets = game.add.group();
		    enemyBullets.enableBody = true;
		    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
		    enemyBullets.createMultiple(30, 'enemyBullet');
		    enemyBullets.setAll('anchor.x', 0.5);
		    enemyBullets.setAll('anchor.y', 1);
		    enemyBullets.setAll('outOfBoundsKill', true);
		    enemyBullets.setAll('checkWorldBounds', true);

		    //  The hero!
		    player = game.add.sprite(400, 500, 'ship');
		    player.anchor.setTo(0.5, 0.5);
		    game.physics.enable(player, Phaser.Physics.ARCADE);

		    //  The baddies!
		    aliens = game.add.group();
		    aliens.enableBody = true;
		    aliens.physicsBodyType = Phaser.Physics.ARCADE;

		    createAliens();

		    //  The score
		    scoreString = 'Score : ';
		    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });

		    //  Lives
		    lives = game.add.group();
		    game.add.text(game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

		    //  Text
		    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
		    stateText.anchor.setTo(0.5, 0.5);
		    stateText.visible = false;

		    for (var i = 0; i < 3; i++) 
		    {
		        var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
		        ship.anchor.setTo(0.5, 0.5);
		        ship.angle = 90;
		        ship.alpha = 0.4;
		    }

		    //  An explosion pool
		    explosions = game.add.group();
		    explosions.createMultiple(30, 'kaboom');
		    explosions.forEach(setupInvader, this);

		    //  And some controls to play the game with
		    cursors = game.input.keyboard.createCursorKeys();
		    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		    
		}

		function createAliens () {

		    
		        for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, 1 * 50, 'invader1');
		            alien.scale.setTo(.25, .25);
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }
		    	for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, 2 * 50, 'invader2');
		            alien.scale.setTo(.25, .25);
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }
		        for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, 3 * 50, 'invader3');
		            alien.scale.setTo(.25, .25);
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }
		        for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, 4 * 50, 'invader4');
		            alien.scale.setTo(.25, .25);
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }

		    aliens.x = 100;
		    aliens.y = 50;

		    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
		    var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		    //  When the tween loops it calls descend
		    tween.onLoop.add(descend, this);
		}

		function setupInvader (invader) {

		    invader.anchor.x = 0.5;
		    invader.anchor.y = 0.5;
		    invader.animations.add('kaboom');

		}

		function descend() {

		    aliens.y += 10;

		}

		function update() {

		    //  Scroll the background
		    starfield.tilePosition.y += 2;

		    if (player.alive)
		    {
		        //  Reset the player, then check for movement keys
		        player.body.velocity.setTo(0, 0);

		        if (cursors.left.isDown)
		        {
		            player.body.velocity.x = -200;
		        }
		        else if (cursors.right.isDown)
		        {
		            player.body.velocity.x = 200;
		        }

		        //  Firing?
		        if (fireButton.isDown)
		        {
		            fireBullet();
		        }

		        if (game.time.now > firingTimer)
		        {
		            enemyFires();
		        }

		        //  Run collision
		        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
		        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
		    }

		}

		function render() {

		    // for (var i = 0; i < aliens.length; i++)
		    // {
		    //     game.debug.body(aliens.children[i]);
		    // }

		}

		function collisionHandler (bullet, alien) {

		    //  When a bullet hits an alien we kill them both
		    bullet.kill();
		    alien.kill();

		    //  Increase the score
		    score += 20;
		    scoreText.text = scoreString + score;

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(alien.body.x, alien.body.y);
		    explosion.play('kaboom', 30, false, true);

		    if (aliens.countLiving() == 0)
		    {
		        score += 1000;
		        scoreText.text = scoreString + score;

		        enemyBullets.callAll('kill',this);
		        stateText.text = " You Won, \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyHitsPlayer (player,bullet) {
		    
		    bullet.kill();

		    live = lives.getFirstAlive();

		    if (live)
		    {
		        live.kill();
		    }

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(player.body.x, player.body.y);
		    explosion.play('kaboom', 30, false, true);

		    // When the player dies
		    if (lives.countLiving() < 1)
		    {
		        player.kill();
		        enemyBullets.callAll('kill');

		        stateText.text=" GAME OVER \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyFires () {

		    //  Grab the first bullet we can from the pool
		    enemyBullet = enemyBullets.getFirstExists(false);

		    livingEnemies.length=0;

		    aliens.forEachAlive(function(alien){

		        // put every living enemy in an array
		        livingEnemies.push(alien);
		    });


		    if (enemyBullet && livingEnemies.length > 0)
		    {
		        
		        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

		        // randomly select one of them
		        var shooter=livingEnemies[random];
		        // And fire the bullet from this enemy
		        enemyBullet.reset(shooter.body.x, shooter.body.y);

		        game.physics.arcade.moveToObject(enemyBullet,player,120);
		        firingTimer = game.time.now + 2000;
		    }

		}

		function fireBullet () {

		    //  To avoid them being allowed to fire too fast we set a time limit
		    if (game.time.now > bulletTime)
		    {
		        //  Grab the first bullet we can from the pool
		        bullet = bullets.getFirstExists(false);

		        if (bullet)
		        {
		            //  And fire it
		            bullet.reset(player.x, player.y + 8);
		            bullet.body.velocity.y = -400;
		            bulletTime = game.time.now + 200;
		        }
		    }

		}

		function resetBullet (bullet) {

		    //  Called if the bullet goes out of the screen
		    bullet.kill();

		}

		function restart () {

		    //  A new level starts
		    
		    //resets the life count
		    lives.callAll('revive');
		    //  And brings the aliens back from the dead :)
		    aliens.removeAll();
		    createAliens();

		    //revives the player
		    player.revive();
		    //hides the text
		    stateText.visible = false;

		}
}
function levelTwo(){
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
		var file = {
		            type: 'image',
		            key: 'example',
		            url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c20.20.253.253/s50x50/600579_10100588225423355_530492250_n.jpg?oh=eced011e07ca7d65c7f1c279487445ea&oe=562EB08E&__gda__=1445015180_e3bda6711c59c37daa98c823b73203ce',
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file.data = new Image();
		        file.data.name = file.key;

		        file.data.onload = function () {
		            file.loaded = true;
		            game.cache.addImage(file.key, file.url, file.data);
		        };

		        file.data.onerror = function () {
		            file.error = true;
		        };

		        file.data.crossOrigin = '';
		        file.data.src = file.url;

		function preload() {
			game.load.crossOrigin = 'anonymous';
		    game.load.image('bullet', '../assets/games/invaders/bullet.png');
		    game.load.image('enemyBullet', '../assets/games/invaders/enemy-bullet.png');
		    game.load.spritesheet('invader', file.data.src, 32, 32);
		    game.load.image('ship', '../assets/games/invaders/player.png');
		    game.load.spritesheet('kaboom', '../assets/games/invaders/explode.png', 128, 128);
		    game.load.image('starfield', '../assets/games/invaders/starfield.png');
		    game.load.image('background', '../assets/games/starstruck/background2.png');

		}

		var player;
		var aliens;
		var bullets;
		var bullet;
		var live;
		var bulletTime = 0;
		var cursors;
		var fireButton;
		var explosions;
		var starfield;
		var score = 0;
		var scoreString = '';
		var scoreText;
		var lives;
		var enemyBullet;
		var enemyBullets;
		var firingTimer = 0;
		var stateText;
		var livingEnemies = [];

		function create() {

		    game.physics.startSystem(Phaser.Physics.ARCADE);

		    //  The scrolling starfield background
		    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');

		    //  Our bullet group
		    bullets = game.add.group();
		    bullets.enableBody = true;
		    bullets.physicsBodyType = Phaser.Physics.ARCADE;
		    bullets.createMultiple(30, 'bullet');
		    bullets.setAll('anchor.x', 0.5);
		    bullets.setAll('anchor.y', 1);
		    bullets.setAll('outOfBoundsKill', true);
		    bullets.setAll('checkWorldBounds', true);

		    // The enemy's bullets
		    enemyBullets = game.add.group();
		    enemyBullets.enableBody = true;
		    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
		    enemyBullets.createMultiple(30, 'enemyBullet');
		    enemyBullets.setAll('anchor.x', 0.5);
		    enemyBullets.setAll('anchor.y', 1);
		    enemyBullets.setAll('outOfBoundsKill', true);
		    enemyBullets.setAll('checkWorldBounds', true);

		    //  The hero!
		    player = game.add.sprite(400, 500, 'ship');
		    player.anchor.setTo(0.5, 0.5);
		    game.physics.enable(player, Phaser.Physics.ARCADE);

		    //  The baddies!
		    aliens = game.add.group();
		    aliens.enableBody = true;
		    aliens.physicsBodyType = Phaser.Physics.ARCADE;

		    createAliens();

		    //  The score
		    scoreString = 'Score : ';
		    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });

		    //  Lives
		    lives = game.add.group();
		    game.add.text(game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

		    //  Text
		    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
		    stateText.anchor.setTo(0.5, 0.5);
		    stateText.visible = false;

		    for (var i = 0; i < 3; i++) 
		    {
		        var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
		        ship.anchor.setTo(0.5, 0.5);
		        ship.angle = 90;
		        ship.alpha = 0.4;
		    }

		    //  An explosion pool
		    explosions = game.add.group();
		    explosions.createMultiple(30, 'kaboom');
		    explosions.forEach(setupInvader, this);

		    //  And some controls to play the game with
		    cursors = game.input.keyboard.createCursorKeys();
		    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		    
		}

		function createAliens () {

		    for (var y = 0; y < 4; y++)
		    {
		        for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, y * 50, 'invader');
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }
		    }

		    aliens.x = 100;
		    aliens.y = 50;

		    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
		    var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		    //  When the tween loops it calls descend
		    tween.onLoop.add(descend, this);
		}

		function setupInvader (invader) {

		    invader.anchor.x = 0.5;
		    invader.anchor.y = 0.5;
		    invader.animations.add('kaboom');

		}

		function descend() {

		    aliens.y += 10;

		}

		function update() {

		    //  Scroll the background
		    starfield.tilePosition.y += 2;

		    if (player.alive)
		    {
		        //  Reset the player, then check for movement keys
		        player.body.velocity.setTo(0, 0);

		        if (cursors.left.isDown)
		        {
		            player.body.velocity.x = -200;
		        }
		        else if (cursors.right.isDown)
		        {
		            player.body.velocity.x = 200;
		        }

		        //  Firing?
		        if (fireButton.isDown)
		        {
		            fireBullet();
		        }

		        if (game.time.now > firingTimer)
		        {
		            enemyFires();
		        }

		        //  Run collision
		        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
		        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
		    }

		}

		function render() {

		    // for (var i = 0; i < aliens.length; i++)
		    // {
		    //     game.debug.body(aliens.children[i]);
		    // }

		}

		function collisionHandler (bullet, alien) {

		    //  When a bullet hits an alien we kill them both
		    bullet.kill();
		    alien.kill();

		    //  Increase the score
		    score += 20;
		    scoreText.text = scoreString + score;

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(alien.body.x, alien.body.y);
		    explosion.play('kaboom', 30, false, true);

		    if (aliens.countLiving() == 0)
		    {
		        score += 1000;
		        scoreText.text = scoreString + score;

		        enemyBullets.callAll('kill',this);
		        stateText.text = " You Won, \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyHitsPlayer (player,bullet) {
		    
		    bullet.kill();

		    live = lives.getFirstAlive();

		    if (live)
		    {
		        live.kill();
		    }

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(player.body.x, player.body.y);
		    explosion.play('kaboom', 30, false, true);

		    // When the player dies
		    if (lives.countLiving() < 1)
		    {
		        player.kill();
		        enemyBullets.callAll('kill');

		        stateText.text=" GAME OVER \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyFires () {

		    //  Grab the first bullet we can from the pool
		    enemyBullet = enemyBullets.getFirstExists(false);

		    livingEnemies.length=0;

		    aliens.forEachAlive(function(alien){

		        // put every living enemy in an array
		        livingEnemies.push(alien);
		    });


		    if (enemyBullet && livingEnemies.length > 0)
		    {
		        
		        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

		        // randomly select one of them
		        var shooter=livingEnemies[random];
		        // And fire the bullet from this enemy
		        enemyBullet.reset(shooter.body.x, shooter.body.y);

		        game.physics.arcade.moveToObject(enemyBullet,player,120);
		        firingTimer = game.time.now + 2000;
		    }

		}

		function fireBullet () {

		    //  To avoid them being allowed to fire too fast we set a time limit
		    if (game.time.now > bulletTime)
		    {
		        //  Grab the first bullet we can from the pool
		        bullet = bullets.getFirstExists(false);

		        if (bullet)
		        {
		            //  And fire it
		            bullet.reset(player.x, player.y + 8);
		            bullet.body.velocity.y = -400;
		            bulletTime = game.time.now + 200;
		        }
		    }

		}

		function resetBullet (bullet) {

		    //  Called if the bullet goes out of the screen
		    bullet.kill();

		}

		function restart () {

		    //  A new level starts
		    
		    //resets the life count
		    lives.callAll('revive');
		    //  And brings the aliens back from the dead :)
		    aliens.removeAll();
		    createAliens();

		    //revives the player
		    player.revive();
		    //hides the text
		    stateText.visible = false;

		}
}
function levelThree(){
		var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
		var file = {
		            type: 'image',
		            key: 'example',
		            url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c20.20.253.253/s50x50/600579_10100588225423355_530492250_n.jpg?oh=eced011e07ca7d65c7f1c279487445ea&oe=562EB08E&__gda__=1445015180_e3bda6711c59c37daa98c823b73203ce',
		            data: null,
		            error: false,
		            loaded: false
		        };

		        file.data = new Image();
		        file.data.name = file.key;

		        file.data.onload = function () {
		            file.loaded = true;
		            game.cache.addImage(file.key, file.url, file.data);
		        };

		        file.data.onerror = function () {
		            file.error = true;
		        };

		        file.data.crossOrigin = '';
		        file.data.src = file.url;

		function preload() {
			game.load.crossOrigin = 'anonymous';
		    game.load.image('bullet', '../assets/games/invaders/bullet.png');
		    game.load.image('enemyBullet', '../assets/games/invaders/enemy-bullet.png');
		    game.load.spritesheet('invader', file.data.src, 32, 32);
		    game.load.image('ship', '../assets/games/invaders/player.png');
		    game.load.spritesheet('kaboom', '../assets/games/invaders/explode.png', 128, 128);
		    game.load.image('starfield', '../assets/games/invaders/starfield.png');
		    game.load.image('background', '../assets/games/starstruck/background2.png');

		}

		var player;
		var aliens;
		var bullets;
		var bullet;
		var live;
		var bulletTime = 0;
		var cursors;
		var fireButton;
		var explosions;
		var starfield;
		var score = 0;
		var scoreString = '';
		var scoreText;
		var lives;
		var enemyBullet;
		var enemyBullets;
		var firingTimer = 0;
		var stateText;
		var livingEnemies = [];

		function create() {

		    game.physics.startSystem(Phaser.Physics.ARCADE);

		    //  The scrolling starfield background
		    starfield = game.add.tileSprite(0, 0, 800, 600, 'starfield');

		    //  Our bullet group
		    bullets = game.add.group();
		    bullets.enableBody = true;
		    bullets.physicsBodyType = Phaser.Physics.ARCADE;
		    bullets.createMultiple(30, 'bullet');
		    bullets.setAll('anchor.x', 0.5);
		    bullets.setAll('anchor.y', 1);
		    bullets.setAll('outOfBoundsKill', true);
		    bullets.setAll('checkWorldBounds', true);

		    // The enemy's bullets
		    enemyBullets = game.add.group();
		    enemyBullets.enableBody = true;
		    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
		    enemyBullets.createMultiple(30, 'enemyBullet');
		    enemyBullets.setAll('anchor.x', 0.5);
		    enemyBullets.setAll('anchor.y', 1);
		    enemyBullets.setAll('outOfBoundsKill', true);
		    enemyBullets.setAll('checkWorldBounds', true);

		    //  The hero!
		    player = game.add.sprite(400, 500, 'ship');
		    player.anchor.setTo(0.5, 0.5);
		    game.physics.enable(player, Phaser.Physics.ARCADE);

		    //  The baddies!
		    aliens = game.add.group();
		    aliens.enableBody = true;
		    aliens.physicsBodyType = Phaser.Physics.ARCADE;

		    createAliens();

		    //  The score
		    scoreString = 'Score : ';
		    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });

		    //  Lives
		    lives = game.add.group();
		    game.add.text(game.world.width - 100, 10, 'Lives : ', { font: '34px Arial', fill: '#fff' });

		    //  Text
		    stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#fff' });
		    stateText.anchor.setTo(0.5, 0.5);
		    stateText.visible = false;

		    for (var i = 0; i < 3; i++) 
		    {
		        var ship = lives.create(game.world.width - 100 + (30 * i), 60, 'ship');
		        ship.anchor.setTo(0.5, 0.5);
		        ship.angle = 90;
		        ship.alpha = 0.4;
		    }

		    //  An explosion pool
		    explosions = game.add.group();
		    explosions.createMultiple(30, 'kaboom');
		    explosions.forEach(setupInvader, this);

		    //  And some controls to play the game with
		    cursors = game.input.keyboard.createCursorKeys();
		    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		    
		}

		function createAliens () {

		    for (var y = 0; y < 4; y++)
		    {
		        for (var x = 0; x < 10; x++)
		        {
		            var alien = aliens.create(x * 48, y * 50, 'invader');
		            alien.anchor.setTo(0.5, 0.5);
		            // alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
		            // alien.play('fly');
		            alien.body.moves = false;
		        }
		    }

		    aliens.x = 100;
		    aliens.y = 50;

		    //  All this does is basically start the invaders moving. Notice we're moving the Group they belong to, rather than the invaders directly.
		    var tween = game.add.tween(aliens).to( { x: 200 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		    //  When the tween loops it calls descend
		    tween.onLoop.add(descend, this);
		}

		function setupInvader (invader) {

		    invader.anchor.x = 0.5;
		    invader.anchor.y = 0.5;
		    invader.animations.add('kaboom');

		}

		function descend() {

		    aliens.y += 10;

		}

		function update() {

		    //  Scroll the background
		    starfield.tilePosition.y += 2;

		    if (player.alive)
		    {
		        //  Reset the player, then check for movement keys
		        player.body.velocity.setTo(0, 0);

		        if (cursors.left.isDown)
		        {
		            player.body.velocity.x = -200;
		        }
		        else if (cursors.right.isDown)
		        {
		            player.body.velocity.x = 200;
		        }

		        //  Firing?
		        if (fireButton.isDown)
		        {
		            fireBullet();
		        }

		        if (game.time.now > firingTimer)
		        {
		            enemyFires();
		        }

		        //  Run collision
		        game.physics.arcade.overlap(bullets, aliens, collisionHandler, null, this);
		        game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
		    }

		}

		function render() {

		    // for (var i = 0; i < aliens.length; i++)
		    // {
		    //     game.debug.body(aliens.children[i]);
		    // }

		}

		function collisionHandler (bullet, alien) {

		    //  When a bullet hits an alien we kill them both
		    bullet.kill();
		    alien.kill();

		    //  Increase the score
		    score += 20;
		    scoreText.text = scoreString + score;

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(alien.body.x, alien.body.y);
		    explosion.play('kaboom', 30, false, true);

		    if (aliens.countLiving() == 0)
		    {
		        score += 1000;
		        scoreText.text = scoreString + score;

		        enemyBullets.callAll('kill',this);
		        stateText.text = " You Won, \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyHitsPlayer (player,bullet) {
		    
		    bullet.kill();

		    live = lives.getFirstAlive();

		    if (live)
		    {
		        live.kill();
		    }

		    //  And create an explosion :)
		    var explosion = explosions.getFirstExists(false);
		    explosion.reset(player.body.x, player.body.y);
		    explosion.play('kaboom', 30, false, true);

		    // When the player dies
		    if (lives.countLiving() < 1)
		    {
		        player.kill();
		        enemyBullets.callAll('kill');

		        stateText.text=" GAME OVER \n Click to restart";
		        stateText.visible = true;

		        //the "click to restart" handler
		        game.input.onTap.addOnce(restart,this);
		    }

		}

		function enemyFires () {

		    //  Grab the first bullet we can from the pool
		    enemyBullet = enemyBullets.getFirstExists(false);

		    livingEnemies.length=0;

		    aliens.forEachAlive(function(alien){

		        // put every living enemy in an array
		        livingEnemies.push(alien);
		    });


		    if (enemyBullet && livingEnemies.length > 0)
		    {
		        
		        var random=game.rnd.integerInRange(0,livingEnemies.length-1);

		        // randomly select one of them
		        var shooter=livingEnemies[random];
		        // And fire the bullet from this enemy
		        enemyBullet.reset(shooter.body.x, shooter.body.y);

		        game.physics.arcade.moveToObject(enemyBullet,player,120);
		        firingTimer = game.time.now + 2000;
		    }

		}

		function fireBullet () {

		    //  To avoid them being allowed to fire too fast we set a time limit
		    if (game.time.now > bulletTime)
		    {
		        //  Grab the first bullet we can from the pool
		        bullet = bullets.getFirstExists(false);

		        if (bullet)
		        {
		            //  And fire it
		            bullet.reset(player.x, player.y + 8);
		            bullet.body.velocity.y = -400;
		            bulletTime = game.time.now + 200;
		        }
		    }

		}

		function resetBullet (bullet) {

		    //  Called if the bullet goes out of the screen
		    bullet.kill();

		}

		function restart () {

		    //  A new level starts
		    
		    //resets the life count
		    lives.callAll('revive');
		    //  And brings the aliens back from the dead :)
		    aliens.removeAll();
		    createAliens();

		    //revives the player
		    player.revive();
		    //hides the text
		    stateText.visible = false;

		}
}