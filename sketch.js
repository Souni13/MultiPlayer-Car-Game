var souniDb;
var gameState=0;
var game, form;
var player;
var playerCount;
var allPlayerStorage;
var car1, car2, car3, car4;
var cars=[];
var c1,c2,c3,c4;
var ground,track;

function preload(){
c1= loadImage("images/car2.png");
c2= loadImage("images/car1.png");
c3= loadImage("images/car3.png");
c4= loadImage("images/car4.png");
ground= loadImage("images/track.png");
track= loadImage("images/track.jpg");


}
function setup(){
    createCanvas(displayWidth, displayHeight);
 souniDb= firebase.database();
 game= new Game();
 game.getGameState();
 console.log(gameState);

 game.startGame();
  
}

function draw(){
    game.getGameState();
    
    //if(gameState===0){
       // game.startGame();
   // }
    if(playerCount===4){
        game.updateGameState(1);
        game.getGameState();
    }
    if(gameState===1){
        console.log("entered45677");
        game.playGame();
    }
    if(gameState===2){
        game.end();
    }
}
