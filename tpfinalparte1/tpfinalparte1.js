//tpfinalparte1
//Alumno: Facundo Ansin
//Legajo: 93054/5
//link a video: https://www.youtube.com/watch?v=2TDSP0Hy6Zs&ab_channel=FacundoAnsin
//Comision 1

let sonido0;
let sonido1;
let estado;
let imagenes = [];
let textos = [];

function preload(){
  for (let i = 0; i < 17; i++) {                                     //Las imagenes cargadas
    imagenes[i] = loadImage(`Assets/imagenes/imagen${i}.jpeg`);
    
  }
   //Los sonidos cargados
    sonido0 = loadSound('Assets/sonido0.mp3');
    sonido1 = loadSound('Assets/sonido1.mp3');
    
  for (let i = 0; i < 15; i++) {                                     //Los textos cargados
    textos[i] = loadStrings(`Assets/textos/texto${i}.txt`);}
    
}
function setup() {
  estado = 0;
  createCanvas(640, 480);
  
  sonido0.setVolume(0.1);
  sonido1.setVolume(0.1);
}

function draw() {
  if(estado === 0){           //Menu
     fondo(12);
     texto(10, 40, 170, 200, 40, "El Idolo\nDe Las\nCicladas", 15, 100);
     boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
     boton(8, 320, 180, 50, 35, "Creditos", 25, 358);
     
  }else if(estado === 16){    //Pantalla 16
    fondo(16);
    texto(10, 300, 620, 150, 20, "Autor: Julio Cortazar \nCreado por: Facundo Ansin y Marcos Villaro \nComision 1", 15, 320);
    boton(10, 390, 130, 40, 20, "Menu", 45, 415);

  }else if (estado === 1){   //Pantalla 1
    fondo(1);
    texto2(10, 140, 617, 130, 25, 0, 20, 160, 670);
    boton(10, 300, 190, 50, 35, "Siguiente", 30, 335);

  }else if (estado === 11) {  //Pantalla 11
    fondo(11);
    texto2(10, 310, 617, 110, 25, 1, 20, 320, 670);
    boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
    
  }else if (estado === 2){   //Pantalla 2 - eleccion
    fondo(2);
    texto2(5, 190, 630, 180, 23, 2, 10, 203, 580);
    boton(80, 380, 190, 50, 25, "Destruir Idolo", 100, 413);
    boton(360, 380, 190, 50, 20, "No Destruir Idolo", 381, 413);
    
  }else if (estado === 12){  //Pantalla 12
    fondo(13);
    texto2(10, 310, 600, 140, 30, 3, 20, 325, 580);
    boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
  
  }else if (estado === 3){  //Pantalla 3 - Final 1
    fondo(3);
    texto2(220, 70, 395, 215, 20, 4, 230, 90, 380);
    boton(320, 300, 150, 50, 25, "Reiniciar", 345, 335);
        
  }else if (estado === 4){  //Pantalla 4
    fondo(4);
    texto2(20, 190, 600, 150, 22, 5, 25, 203, 600);
    boton(90, 360, 260, 60, 35, "Siguiente", 140, 400);
     
  }else if (estado === 13){  //Pantalla 13
    fondo(0);
    texto2(10, 355, 600, 100, 20, 6, 15, 370, 500);
    boton(8, 300, 180, 50, 35, "Siguiente", 25, 338);
    
  }else if (estado === 5){  //Pantalla 5 - eleccion
    fondo(5);
    texto2(25, 323, 595, 200, 23, 7, 35, 333, 580);
    boton(30, 250, 200, 60, 20, "Morand mata \n   a Somoza", 70, 275);
    boton(410, 250, 200, 60, 20, "Somoza mata \n   a Morand", 450, 275);

    
  }else if (estado == 6){    //Pantalla 6 - Minijuego
    fondo(14);
    texto2(43, 120, 580, 190, 22, 8, 60, 130, 530);
    boton(170, 390, 270, 70, 35, "Siguiente", 230, 435);

    
  }else if (estado === 7){   //Pantalla 7 - eleccion
    fondo(6);
    texto2(65, 220, 540, 140, 20, 10, 77, 230, 500);
    boton(80, 380, 190, 50, 20, "Somoza continua", 95, 410);
    boton(360, 380, 190, 50, 20, "Somoza recapacita", 370, 410);
    
  }else if (estado === 14){    //Pantalla 14
    fondo(8);
    texto2(100, 240, 470, 140, 21, 12, 120, 260, 480);
    boton(220, 390, 170, 70, 35, "Siguiente", 230, 435);
    
  }else if(estado === 15){    //Pantalla 15
    fondo(15);
    texto2(50, 240, 530, 100, 20, 11, 60, 260, 550);
    boton(220, 390, 170, 70, 35, "Siguiente", 230, 435);
    
  }else if (estado === 8){   //Pantalla 8 - Final 2
    fondo(7);
    texto2(30, 240, 580, 270, 22, 9, 40, 260, 520);
    boton(380, 390, 170, 50, 20, "Reiniciar", 418, 420);
    
  }else if (estado === 9){  //Pantalla 9 - Final 3
    fondo(9);
    texto2(10, 220, 520, 110, 20, 13, 20, 240, 520);
    boton(125, 350, 170, 50, 20, "Reiniciar", 165, 380);
 
  }else if (estado === 10){    //Pantalla 10 - Final 4
    fondo(10);
    texto2(25, 323, 595, 135, 21, 14, 35, 333, 550);
    boton(20, 20, 170, 50, 20, "Reiniciar", 65, 55);
  }
}

function mousePressed(){
  if(estado === 0 && detectarBoton(8, 250, 180, 50)){
    estado = 1;
    sonido0.stop();                                     //Si al empezar el sonido de alguno de los finales sigue sonando, se detiene
    if(!sonido1.isPlaying()){                           //Al empezar, el primer sonido empieza
      sonido1.play();
    }else{
      sonido1.stop();
  }
  }
  if(estado === 0 && detectarBoton(8, 320, 180, 50)){
    estado = 16;
  }
  if(estado === 16 && detectarBoton(10, 390, 130, 40)){
    estado = 0;
  }
  if(estado === 1 && detectarBoton(10, 300, 190, 50)){
    estado = 11;
  }
  if(estado === 11 && detectarBoton(8, 250, 180, 50)){
    estado = 2;
  }
  if(estado === 2 && detectarBoton(80, 380, 190, 50)){
    estado = 12;
    sonido1.stop();
    if(!sonido0.isPlaying()){                            //Tras elegir una "decision de la que no hay vuelta atras" El sonido de fondo se detiene y empieza el sonido de el final
      sonido0.play();
    }else{
      sonido0.stop();
  }
  }
  if(estado === 12 && detectarBoton(8, 250, 180, 50)){
    estado = 3;
  }
  if(estado === 2 && detectarBoton(360, 380, 190, 50)){
    estado = 4;
  }
  if(estado === 4 && detectarBoton(90, 360, 260, 60)){
    estado = 13;
  }
  if(estado === 13 && detectarBoton(8, 300, 180, 50)){
    estado = 5;
  }
  if(estado === 5 && detectarBoton(30, 250, 200, 60)){
    estado = 6;
    sonido1.stop();
    if(!sonido0.isPlaying()){
      sonido0.play();
    }else{
      sonido0.stop();
  }
  }
   if(estado === 5 && detectarBoton(410, 250, 200, 60)){
    estado = 7;
  }
  if(estado === 6 && detectarBoton(170, 390, 270, 70)){
    estado = 8;
  }
  if(estado === 7 && detectarBoton(360, 380, 190, 50)){
    estado = 15;
    sonido1.stop();
    if(!sonido0.isPlaying()){
      sonido0.play();
    }else{
      sonido0.stop();
  }
  }
   if(estado === 7 && detectarBoton(80, 380, 190, 50)){
    estado = 14;
    sonido1.stop();
    if(!sonido0.isPlaying()){
      sonido0.play();
    }else{
      sonido0.stop();
  }
  }
  if(estado === 14 && detectarBoton(220, 390, 170, 70)){
    estado = 9;
  }
  if(estado === 15 && detectarBoton(220, 390, 170, 70)){
    estado = 10;
  }
  if(estado === 3 && detectarBoton(320, 300, 150, 50)){
    estado = 0;
  }
  if(estado === 8 && detectarBoton(380, 390, 170, 50)){
    estado = 0;
  }
  if(estado === 9 && detectarBoton(125, 350, 170, 50)){
    estado = 0;
  }
  if(estado === 10 && detectarBoton(20, 20, 170, 50)){
    estado = 0;
  }
}

 
