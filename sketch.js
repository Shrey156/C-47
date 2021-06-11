var database,form,player,playerCount,game;
var gameState = 0;
var allPlayers,plr;
var ant1,ant2,ants;
var ant1Img,ant2Img;

function preload() {
  ant1Img = loadImage("img/ant1.png");
  ant2Img = loadImage("img/ant2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  game = new Game();
  game.getGameState();
  game.start();
}

function draw() {
  background(255);  
if(playerCount===2){
  game.updateGameState(1); 
}
if(gameState===1){
  clear();
  game.play();
}
  
  drawSprites();
}

function mouseDragged(){
player.distance = player.distance+50;
player.y = player.y+mouseY;
}