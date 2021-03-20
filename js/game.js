class Game{
    constructor(){

    }
async getGameState(){
var gameRef= await souniDb.ref("gamestate").once("value");
console.log(gameRef);
if(gameRef.exists()){
    console.log("entered"+gameRef.val());
    gameState= gameRef.val();
    //if(gameState===0){
      //  this.startGame();
   // }
   
}

}
updateGameState(count){
var gameRef= souniDb.ref("/");
gameRef.update({
    gamestate: count
})
}


async startGame(){
    if(gameState===0){
        console.log("2");
        player=new Player();
        
        var playerCountRef= await souniDb.ref("playerCount").once("value");
        if (playerCountRef.exists()){
            playerCount= playerCountRef.val();
            console.log("1");
        }
        
        form= new Form();
        form.display();
    }
   

car1= createSprite(100,400,50,50);
car1.addImage(c1);
car1.visible= false;
car2= createSprite(200,400,50,50);
car2.addImage(c2);
car2.visible= false;
car3= createSprite(300,400,50,50);
car3.addImage(c3);
car3.visible= false;
car4= createSprite(400,400,50,50);
car4.addImage(c4);
car4.visible= false;

cars=[car1, car2, car3, car4];
}

playGame(){
text("Souni Samanta",100,100);
console.log("we have entered");
console.log(gameState);
if(form){
    form.hide();
}
Player.allPlayersInfo();
console.log(player);
player.getPlayerLastRank();
console.log(player.rank);
if(allPlayerStorage!== undefined){
    background(ground);
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
    var x= 300;
    console.log(allPlayerStorage)
    var y ;
    var index= 0;
for(var plr in allPlayerStorage){
    y= height-allPlayerStorage[plr].distance;
    index= index+1;
    cars[index-1].x=x;
    cars[index-1].y=y;
    cars[index-1].visible= true;
    x= x+100;
if(allPlayerStorage[plr].id===player.id){
    push();
    fill("red");
    ellipse(cars[index-1].x, cars[index-1].y, 60, 60);
    pop();

    cars[index-1].shapeColor="red";
    camera.position.x= width/2;
    camera.position.y= cars[index-1].y;
}
}

}

if(keyDown("up")&& player.id!== null){
    player.distance= player.distance+50;
    player.updatePlayer();

}
if(player.distance=== 3700){
    gameState=2;
    console.log("reach");
    player.rank= player.rank+1;
    Player.updatePlayerLastRank(player.rank);

}
drawSprites();
}
end(){
var sortDistance=[];
if(allPlayerStorage!== undefined){
    for(var plr in allPlayerStorage){
        sortDistance.push(allPlayerStorage[plr].distance);

    }

}
console.log(sortDistance);
}
}