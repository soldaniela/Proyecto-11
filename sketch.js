var barco, barcoimg;
var mar,marimg;
function preload(){
marimg = loadImage("sea.png");
barcoimg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
mar = createSprite(200,200,60,60);
mar.addImage(marimg);
mar.scale = 0.5;
barco = createSprite(200,200,30,30);
barco.addAnimation("barco",barcoimg);
barco.scale = 0.5;
}

function draw() {
  background("blue");
  drawSprites();
 
}
