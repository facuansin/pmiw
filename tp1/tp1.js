//Facundo Ansin
//legajo: 93054/5
//TP#1 - OpArt con Funciones y Ciclo For en P5-js
//enlace al video: https://youtu.be/M4HGAk8UNck?si=EbExyAG8i5tQez4o



let ilusionoptica;
let negro;
let blanco;
let color3;
let barraApretada = false;

function preload() {
  ilusionoptica = loadImage('assets/ilusionoptica.png');  // Carga de imagen
}

function setup() {
  createCanvas(800, 400);
  negro = color(0);
  blanco = color(255);
  color3 = color(0);
}

function draw() {
  background(color3);
  
  if (mouseIsPressed) {
    let mx = map(mouseX, 0, width, 0, 255);        // si el M1 se presiona y se mueve, el color de los triángulos cambiará
    let my = map(mouseY, 0, height, 0, 255);
    background(mx, 0, my);
    negro = color(mx, 0, my);
  } else {
    background(color3);
    negro = color3;
  }

  noStroke();
  
  for (let i = 0; i < 5; i++) {
    for (let d = 0; d < 5; d++) {
      push();
      translate(-200 + i * 200 + d * 200 / 2, 150 + d * 200);
      triangulo(-100, 50, 0, -150, 100, 50);       // for anidado para dibujar todos los triángulos
      pop();
      
      push();
      translate(-100 + i * 200 + d * 200 / 2, 0 + d * 200);
      triangulo2(-100, -50, 0, 150, 100, -50);
      pop();
    }
  }
  
  image(ilusionoptica, 0, 0, 400, 400);
}

function keyPressed() {
  if (key === ' ') {
    barraApretada = true;

    if (negro.levels[0] === 0) {
      negro = color(255);
    } else {
      negro = color(0);
    }
    
    if (blanco.levels[0] === 255) {               // si la barra espaciadora es presionada, el blanco y negro se intercambian
      blanco = color(0);
    } else {
      blanco = color(255);
    }
    
    if (color3.levels[0] === 0) {
      color3 = color(255);
    } else {
      color3 = color(0);
    }
  }
}

function keyReleased() {
  if (key === ' ') {
    barraApretada = false;
  }
}
