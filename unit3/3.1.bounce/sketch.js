let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(220);
  fill("blue")
  noStroke();

translate(width / 2, height / 2);

circle(x,y,10);

if (x > 200 | x < -200){
  xspeed = -xspeed;
}

if (y > 150 | y < -150){
  yspeed = -yspeed;
}
y += yspeed
x += xspeed;

}