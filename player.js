class Player{
    constructor(){}
    getCount(){
        var pcountref = database.ref("playerCount");
        pcountref.on("value",function(data){
            pcount = data.val();
            

        });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })

    }
    update(nam){
        var playerIndex = "player"+pcount
        database.ref(playerIndex).set({
            name:nam
        });

    }

}