let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;


function setup() {
  createCanvas(400, 300);
    fill("blue")
}

function draw() {
  background(220);

  noStroke();

translate(width / 2, height / 2);

circle(x,y,20);

if (x > 200 | x < -200){
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

