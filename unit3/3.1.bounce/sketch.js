let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;
// x and y are for circle cordinates
//xspeed and yspeed move the circle

function setup() { // creates canvas and makes the background blue
  createCanvas(400, 300);
    fill("blue")
}

function draw() { //background color, no shape outlines, translate moves origin
  background(220);

  noStroke();

translate(width / 2, height / 2);

circle(x,y,20);

if (x > 200 | x < -200){ // gives the circle boundaries, causing it to change direction 
  xspeed = -xspeed;
  fill(random(255),100,100);
}

if ( y > 150 | y < -150){
  yspeed = -yspeed;
    fill(random(255),100,100);
}
y += yspeed;
x += xspeed;
}

