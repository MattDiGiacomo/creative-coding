function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();

}

function draw() {
  background(220);

for (let x = 0; x < 0; x += 1){

circle(x * 50,80,50);

}
for (let x = 1; x < 9; x += 1){
for (let y = 1; y < 9; y+=1){
fill(random(255), random(255), random(255));
strokeWeight(random(1,15))
stroke(random(0,200),25,235)
circle(x * 60, y * 60,60);

}

}

}