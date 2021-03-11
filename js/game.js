'use strict';


// Create a new scene
let gameScene = new Phaser.Scene('Game');

// Load assets
gameScene.preload = function() {
  this.load.image('background', './assets/background.png');
  this.load.image('player', './assets/player.png');
  this.load.image('enemy', './assets/dragon.png')
};

// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');

  //place sprite in the center
  bg.setOrigin(0,0);

  // create the player
  let player = this.add.sprite(50, 180, 'player');

  player.setScale(0.5);
};

// this is called up to 60 times per second
gameScene.update = function() {
  
}

// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use canvas
  width: 640,
  height: 360,
  scene: gameScene
};

// create a new game, pass the configuration
let game = new Phaser.Game(config);