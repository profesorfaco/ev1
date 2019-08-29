function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  noStroke();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  for (var x = 0; x < 100; x++) {
    var a = random(0, 360);
    fill(a, 100, 100);
    pelota(a);
  }
}

function pelota(diametro) {
  ellipse(random(0, width), random(0, height), diametro, diametro);
}