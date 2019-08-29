var temblores;

function preload() {
    temblores = loadJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson');
}

function setup() {
    console.log(temblores);
    createCanvas(windowWidth, windowHeight);
    noLoop();
    noStroke();
}

function draw() {
    colorMode(HSB, 360, 100, 100);
    for (var x = 0; x < temblores.features.length; x++) {
    	var lugar = temblores.features[x].properties.title;
        if (lugar.includes("Chile")) {
			fill(0, 100, 100);
	       	pelota(temblores.features[x].properties.mag);
        } else {
			fill(0,25,100);
			cuadrado(temblores.features[x].properties.mag);
        }
    }
}

function pelota(diametro) {
    ellipse(random(0, width), random(0, height), diametro, diametro);
}

function cuadrado(lado) {
    rect(random(0, width), random(0, height), lado, lado);
}