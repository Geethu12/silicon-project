var canvas, backgroundImage;
var kyoga1;
var counter=0;
var gameState = 0;
var userCount, useremail;
var allusers;
var database;
var emails=[];
var use=[];
var kids,adults,elders,b1,b2,b3,slogan;
var database;
var bg,bg1,bg2,kidsimg,adultsimg,eldersimg,sloganImg,st;
var form, user, game;
var UserName,UserCount=0;
var sukhasana,sukhasana_steps;
function preload(){
  bg=loadImage("bg.jpg");
  bg1=loadImage("bg2.jpeg");
  bg2=loadImage("bg4.jpg");
  kidsimg=loadImage("kids yoga.jpg");
  adultsimg=loadImage("adults yoga.jpg");
  eldersimg=loadImage("elder yoga.jpg");
  sloganImg=loadImage("s.jpg");
  st=loadImage("start.png")
  kyoga1=loadImage("kyoga1.png");
  sukhasana=loadImage("sukhasana.png");
  sukhasana_steps=loadImage("sukhasana_steps.png");
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  //game.getState();
  game.start();
 
}


function draw(){
  if(gameState===1){
    background(bg2);
    game.play();
  }
 else if(gameState===2){
  
   background(bg1);
   game.kidsyoga();
 }
 else if (gameState===3){
   background("lightblue");
   fill("black")
   textSize(30)
   textStyle(BOLD);
   text("SUKHASANA (EASY SITTING POSE)",displayWidth-900,100)
 image(sukhasana,displayWidth-900,200,400,300);
 image(kyoga1,displayWidth-1400,150,720,350);
 image(sukhasana_steps,displayWidth-450,166,300,400);
 
 }
 else if(gameState===4){
  
  background("pink");
  
}
else if(gameState===5){
  
  background("white");
  
}
else if(gameState===6){
  
  background("white");
  
}
else if(gameState===7){
  
  background("white");
  
}
else if(gameState===8){
  
  background("white");
  
}
}








/*

<body translate="no"> 
      <canvas height="200" width="200" id="counter"></canvas> 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
      <script>
      var counter = document.getElementById('counter').getContext('2d');
var no = 30;//  w  w w  .  j  av  a  2  s .co  m
var pointToFill = 4.72;
var cw = counter.canvas.width;
var ch = counter.canvas.height;
var diff;
function fillCounter() {
    diff = ((no / 10) * Math.PI * 2 * 10);
    counter.clearRect(0, 0, cw, ch);
    counter.lineWidth = 15;
    counter.fillStyle = '#000';
    counter.strokeStyle = '#F5E0A9';
    counter.textAlign = 'center';
    counter.font = "25px monospace";
    counter.fillText(no + 'sec', 100, 110);
    counter.beginPath();
    counter.arc(100, 100, 90, pointToFill, diff / 30 + pointToFill);
    counter.stroke();
    if (no == 0) {
        clearTimeout(fill);
        counter.fillStyle = '#FFF';
        counter.fillRect(0, 0, cw, ch);
        counter.fillStyle = '#000';
        counter.fillText('Times up', 100, 110);
    }
    no--;
}

var fill = setInterval(fillCounter, 1000);
      //# sourceURL=pen.js
    
      </script>  
   </body>
*/