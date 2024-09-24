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
  drawAngerEmoji();
}

function drawAngerEmoji() {
  // Face
  fill(255, 0, 0);
  ellipse(200, 200, 200, 200);

  // Eyes
  fill(0);
  ellipse(160, 170, 30, 30);
  ellipse(240, 170, 30, 30);

  // Eyebrows
  stroke(0);
  strokeWeight(5);
  line(140, 150, 180, 160);
  line(220, 160, 260, 150);

  // Mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(200, 240, 100, 50, 0, PI);
}

function draw() {
  // No continuous drawing needed
}
