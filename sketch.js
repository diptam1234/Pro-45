var bg,bgImg;

var database
var pCount;
var gState=0;
var player1,player2,player3;
var player1Image,player2Image,player3Image;
var game , player , form;
var allPlayers;

function preload(){
    bgImg = loadImage("track.jpg");
    player1Image = loadImage("player2.png");
    player2Image = loadImage("player3.png");
    player3Image = loadImage("player4.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);

   database = firebase.database();
   
  /* bg = createSprite(1600,displayHeight/2);
   bg.addImage(bgImg);
   bg.scale = 0.4; 

   */

   game = new Game();
   game.gameState();
   game.start();

    
}

function draw(){
    background("skyblue")

    if(pCount === 3){
        game.updateState(1)
    }

    if(gState === 1){
        game.play ()
    }

}
