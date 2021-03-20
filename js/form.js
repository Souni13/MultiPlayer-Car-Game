class Form{
constructor(){
this.input= createInput();
this.button= createButton("Press Here");
this.greet= createElement("h1")


}
hide(){
    this.input.hide();
    this.greet.hide();
    this.button.hide();
}
display(){
    console.log("display");
    var title= createElement("h2");
    title.html("Multiplayer Car Game");
    title.position(100,100);
    this.input.position(100,225);
    this.button.position(100,250);
    this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    
    playerCount= playerCount+1;
    player.name= this.input.value();
    player.distance= 0;
    player.id= playerCount;
    player.updatePlayer();
    player.updatePlayerCount(playerCount);
    
    this.greet.html("Hello "+ player.name);
    this.greet.position(100,200);
    
    })

}
}