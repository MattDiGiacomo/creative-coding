let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
let x1speed = 5;
let x2speed = 5;
let y1speed = 5;
let y2speed = 5;
function setup() {
  createCanvas(400, 300);
    fill("blue")
}

function draw() {
  background(220);

  noStroke();

translate(width / 2, height / 2);

circle(x1,y1,20);

if (x1 > 200 | x1 < -200){
  x1speed = -x1speed;
  fill(random(255),100,100)
}

if (y1 > 150 | y1 < -150){
  y1speed = -y1speed;
    fill(random(255),100,100)
}
y1 += y1speed
x1 += x1speed;

translate(width / 2, height / 2);

circle(x2,y2,20);

if (x2 > 300 | x2 < -350){
  x2speed = -x2speed;
  fill(random(255),100,100)
}

if (y2 > 300 | y2 < -300){
  y2speed = -y2speed;
    fill(random(255),100,100)
}
y2 += y2speed;
x2 += x2speed;

}
