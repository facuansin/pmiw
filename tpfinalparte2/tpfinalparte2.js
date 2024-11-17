//tpfinalparte2
//comision 1
//Facundo Ansin
//legajo: 93054/5
//link a video: https://www.youtube.com/watch?v=UJnze0Ov2CY&ab_channel=FacundoAnsin


let objJuego;
let imagenes = [];
let sonidoVictoria;
let sonidoPelea;
let pantalla = 0;
let c = 0;
let d = 0;
function preload(){
  for (let i = 0; i < 22; i++) {                                     //Las imagenes cargadas
    imagenes[i] = loadImage(`libraries/img${i}.png`);
   
  }
  sonidoVictoria = loadSound('libraries/audio1.mp3');
  sonidoPelea = loadSound('libraries/audio0.mp3');                  //sonidos cargados
  sonidoPerdiste = loadSound('libraries/audio2.mp3');
}

function setup() {
  createCanvas(640,480);
  objJuego = new Juego();
  sonidoPelea.setVolume (0.1);
  sonidoVictoria.setVolume (0.1);
  sonidoPerdiste.setVolume (0.2);
}

function draw() {
  //////LOGICA DE PANTALLAS//////
  if(pantalla === 0){
    fondo(16);
    titulo("El idolo de las Cicladas", 50, 100, 50, 225, 200, 0);
    boton(20, 300, 180, 50, 35, "Empezar", 37, 338);
    boton(430, 300, 180, 50, 35, "Creditos", 453, 338);
    sonidoVictoria.stop();
  }
  if(pantalla === 1){
    if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
    fondo(17);
    titulo("¡Morand ataca!", 18, 100, 50, 225, 0, 0);
    texto(30, 125, 310, 130, 20, "¡Parece que Morand a llegado a \nla decision de quitarle la vida a \nSomoza! Lanza hachas a Somoza \npara acabar con el!", 35, 155);
    boton(90, 380, 180, 50, 35, "Jugar", 130, 415);
    boton(380, 380, 180, 50, 35, "Tutorial", 410, 415);
  }
  ////////PANTALLA DE JUEGO///////
  if(pantalla === 2){

  image(imagenes[1], 0, 0, 640, 480);
  fill(0, 50);   
  rect(0,0, 640, 480);
  objJuego.dibujar();
  objJuego.teclaMantenida(key);
  }
  //////FIN DE PANTALLA DE JUEGO//////
  if(pantalla === 3){
    fondo(20);
    boton(220, 380, 180, 50, 35, "Cerrar", 260, 415);
  }
  if(pantalla === 4){
    fondo(21);
    texto(50, 145, 500, 200, 20, "Autor: Julio Cortazar\nCreado por: Facundo Ansin y Marcos Villaro\nComision 1\nDocente: Jose Bugiolachi", 70, 195)
    boton(220, 380, 180, 50, 35, "Cerrar", 260, 415);
  }
  
  if(objJuego.ganaste === 1){
    c+=3;
    fill(0, c);
    rect(0,0,640,480);
    if(c >= 300){
      pantalla = 5;
      if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
    }
  }
  if(objJuego.perdiste === 1){
    d+=3;
    fill(0,d);
    rect(0,0,640,480);
     if(d >= 300){
      pantalla = 6;
       if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
     }
  }
  //////PANTALLA GANASTE///////
  if(pantalla === 5){
    fondo(19);
    sonidoPelea.stop();
    titulo("¡Ganaste!", 330, 100, 50, 0, 255, 0)
    boton(90, 380, 180, 50, 25, "Volver a Jugar", 100, 415);
    boton(380, 380, 180, 50, 35, "Menu", 425, 415);
    objJuego.ganaste = 0;
    objJuego.perdiste = 0;
    objJuego.enemigo.vida = 100;
    objJuego.personaje.vida = 50;
    objJuego.personaje.posX = 320;
    objJuego.personaje.posY = 360;
    objJuego.enemigo.posX = 320;
    objJuego.enemigo.posY = 100;
    d = 0;
    c = 0;
  }
  //////PANTALLA PERDISTE///////
  if(pantalla === 6){
    fondo(18);
    sonidoPelea.stop();
    titulo("¡Perdiste!", 70, 100, 50, 255, 0, 0)
    boton(90, 380, 180, 50, 25, "Volver a Jugar", 100, 415);
    boton(380, 380, 180, 50, 35, "Menu", 425, 415);
    objJuego.ganaste = 0;
    objJuego.perdiste = 0;
    objJuego.enemigo.vida = 100;
    objJuego.personaje.vida = 50;
    objJuego.personaje.posX = 320;
    objJuego.personaje.posY = 360;
    objJuego.enemigo.posX = 320;
    objJuego.enemigo.posY = 100;
    d = 0;
    c = 0;
  }

}

function mousePressed(){
  if(pantalla === 0 && detectarBoton(20, 300, 180, 50)){
    pantalla = 1;
  }
  if(pantalla === 0 && detectarBoton(430, 300, 180, 50)){       /////LOGICA DE CADA BOTON PARA CADA PANTALLA
    pantalla = 4;
  }
  if(pantalla === 4 && detectarBoton(220, 380, 180, 50)){
    pantalla = 0;
  }
   if(pantalla === 1 && detectarBoton(90, 380, 180, 50)){
      pantalla = 2
      if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
  }
  if(pantalla === 1 && detectarBoton(380, 380, 180, 50)){
    pantalla = 3;
  }
  if(pantalla === 3 && detectarBoton(220, 380, 180, 50)){
    pantalla = 1;
  }
  if(pantalla === 5 && detectarBoton(90, 380, 180, 50)){
    pantalla = 2;
    if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
   if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
  }
  if(pantalla === 5 && detectarBoton(380, 380, 180, 50)){
    pantalla = 0;
     if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
  }
  if(pantalla === 6 && detectarBoton(90, 380, 180, 50)){
    pantalla = 2;
    if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
   if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
  }
  if(pantalla === 6 && detectarBoton(380, 380, 180, 50)){
    pantalla = 0;
     if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
  }
  
}

function keyReleased(){
  if(pantalla === 2){
  objJuego.teclaSoltada(key);           /////COMPROBADOR PARA LOS DERRAPES DEL PERSONAJE
  }
}
