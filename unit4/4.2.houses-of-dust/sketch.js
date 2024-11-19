let quatrain = '';

let grammar = tracery.createGrammar(
{
 "line1" : "A HOUSE OF #material#",
 "material" : ["DUST", "BRICK", "PAPER", "LEAVES", "ROOTS", "DISCARDED CLOTHING", "WEEDS", "WOOD", "TIN", "SAND", "GLASS", "STONE", "STRAW", "PLASTIC", "MUD", "BROKEN DISHES", "PLASTIC"]
}


  )

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);

  textSize(20);
  text(quatrain,50,50);
}