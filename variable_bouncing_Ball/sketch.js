var circleX = 50;
var xSpeed = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 250, 100);
  fill(250, 200, 200);
  
  ellipse(circleX, 200, 80, 80);
  circleX = circleX+xSpeed;
  if(circleX > 600 || circleX < 0){
  xSpeed *= -1;
  }
  
}

function mousePressed(){
  
}