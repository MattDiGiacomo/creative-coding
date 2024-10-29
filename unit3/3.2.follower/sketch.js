let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0; 
let y = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
fill(100,150,255);
noStroke();
ellipse(mouseX, mouseY,50, 50);


}