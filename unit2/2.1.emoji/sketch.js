function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw(circle) {
  background(220);

  rectMode(CENTER);
 
}

function setup() {
  createCanvas(400, 400);
  background(255);

  // Face
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200);

  // Eyes
  fill(0);
  ellipse(160, 170, 30, 50);
  ellipse(240, 170, 30, 50);

  // Eyebrows
  stroke(0);
  strokeWeight(5);
  line(130, 130, 170, 150);
  line(210, 150, 250, 130);

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(200, 240, 100, 50, 0, PI);
}

function draw() {
  // No need to draw anything continuously
}
