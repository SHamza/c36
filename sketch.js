var database;
var gstate=0;
var pcount=0;
var player,game,form;


function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();

 
}

function draw(){
 
  
}



