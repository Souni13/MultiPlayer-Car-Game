class Player{
    constructor(){
        this.id= null;
        this.name= "";
        this.distance=0;
        this.rank= 0;
    }
    getPlayerCount(){
    var playerRef= souniDb.ref("playerCount");
    playerRef.on("value",(data)=>{
    playerCount= data.val();
    })
    }

    updatePlayerCount(count){
        var playerRef1= souniDb.ref('/');
        console.log(playerRef1);
        console.log(count);
        playerRef1.update({
            playerCount: count
        })
    }

    updatePlayer(){
        var playerIndex= "players/player"+ this.id;
        var playerRef= souniDb.ref(playerIndex);
        playerRef.set({
            id: this.id,
            name: this.name,
            distance:this.distance
        })
    }
    static allPlayersInfo(){
     var allPlayersRef= souniDb.ref("players");
     allPlayersRef.on("value", function(data){
         allPlayerStorage= data.val();
     })
    }

    getPlayerLastRank(){
        var getLastRankRef= souniDb.ref("carsAtEnd");
        getLastRankRef.on("value",function(data){
        this.rank= data.val();
        })


    }
    static updatePlayerLastRank(rank){
    var updatePlayerLastRank= souniDb.ref("/");
    updatePlayerLastRank.update({
    carsAtEnd : rank
    });

    }
    /*static allCarsReached(){
        var allCarsDistanceReader= souniDb.ref("allcarsReached");
        allCarsDistanceReader.on("value", function(data){

        })
    }*/
}