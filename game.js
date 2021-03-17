class Game{
   constructor(){}
   getState(){
       var gstateref = database.ref("gameState");
       gstateref.on("value",function (data){
           gstate = data.val();
       })
   }

   update(state){
       database.ref("/").update({
           gameState:state
       });
   }
   start(){
       if (gstate===0){
           player = new Player();
           player.getCount();
           form = new Form();
           form. display();
       }
   }






}