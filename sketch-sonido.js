let mic;

function setup() {
  createCanvas(710, 200);

  // crea una entrada de audio
  mic = new p5.AudioIn();

  // inicia la entrada de audio
  // por defecto, no la conecta (.connect()) a los parlantes del computador.
  mic.start();
}

function draw() {
  background(200);

  // obtén el volumen general (entre 0.0 y 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // dibuja una elipse con altura según el volumen
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}