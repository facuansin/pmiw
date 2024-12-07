//tpfinalparte2rec
//comision 1
//Facundo Ansin y Marcos Villaro
//legajo: 93054/5
//link a video: https://www.youtube.com/watch?v=2TDSP0Hy6Zs&ab_channel=FacundoAnsin

let objJuego;
let imagenes = [];
let sonidoVictoria;
let sonidoPelea;

function preload() {
  for (let i = 0; i < 27; i++) {                                     //Las imagenes cargadas
    imagenes[i] = loadImage("libraries/img"+i+".png");
  }
  sonidoVictoria = loadSound('libraries/audio1.mp3');
  sonidoPelea = loadSound('libraries/audio0.mp3');                  //sonidos cargados
  sonidoPerdiste = loadSound('libraries/audio2.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
  sonidoPelea.setVolume (0.1);
  sonidoVictoria.setVolume (0.1);
  sonidoPerdiste.setVolume (0.2);
}

function draw() {
  objJuego.dibujar();
  objJuego.teclaMantenida(key);
}

function mousePressed() {
  objJuego.mousePresionado();
}

function keyReleased() {
  objJuego.teclaSoltada(key);           /////COMPROBADOR PARA LOS DERRAPES DEL PERSONAJE
}
