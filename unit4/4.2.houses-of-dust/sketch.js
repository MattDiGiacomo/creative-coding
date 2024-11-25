let poem = '';

let grammar = tracery.createGrammar({
"origin": ["A HOUSE OF #material# #situation# #lighting# #inhabitants#"],
"material":["SAND","DUST","LEAVES","PAPER","TIN","ROOTS","BRICK","BROKEN DISHES", "WOOD","STRAW","WEEDS"],
"situation":["ON A MOUNTAIN", "IN A FOREST", "IN A CITY", "BY THE SEA", "IN A DESERT"],
"lighting":["UNDER THE SUN", "UNDER THE MOON", "IN THE RAIN", "IN THE SNOW", "IN THE FOG"],
"inhabitants":[ "INHABITED BY ANIMALS", "INHABITED BY PEOPLE", "INHABITED BY GHOSTS", "INHABITED BY ZOMBIES", "INHABITED BY PILLOWS"]
});


function setup() {
  createCanvas(800, 800);
  frameRate(1);
}

function draw() {
  background(220);
poem = grammar.flatten("#origin#");
  textSize(20);
  text(poem,50,100);
}