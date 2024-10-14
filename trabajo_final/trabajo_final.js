let estado;
let imagenes = [];

function preload(){
  for (let i = 0; i < 11; i++) {  // Cambia 5 por el número de imágenes que tienes
    imagenes[i] = loadImage(`Assets/imagenes/imagen${i}.jpeg`);  // Asegúrate de cambiar la ruta a tus imágenes
  }
}
function setup() {
  estado = 00;
  createCanvas(640, 480);
  
}

function draw() {
  if(estado == 0){
     image(imagenes[0], 0, 0, 640, 480);
     fill(0, 210);
     rect(10,40,170, 200);
     fill(255);
     textSize(40);
     text("El Idolo\nDe Las\nCicladas", 15, 100);
     botonUno(10, 280, 180, 50);
     fill(0);
     textSize(35);
     text("Siguiente", 25, 317);
     
  }else if (estado == 1){
    image(imagenes[1], 0, 0, 640, 480);
    fill(0, 210);
    rect(10, 80, 260, 120);
    fill(255);
    text("Descubrimiento \ndel Idolo", 20, 130);
    botonUno(10, 350, 190, 50);
     fill(0);
     textSize(35);
     text("Siguiente", 30, 385);
  
  }else if (estado == 2){
    image(imagenes[2], 0, 0, 640, 480);
    fill(0, 210);
    rect(50, 260, 550, 70);
    fill(255);
    textSize(35);
    text("Comienza la obsesion con el idolo", 60, 305);
    botonDos(80, 380, 190, 50);
    botonUno(360, 380, 190, 50);
     fill(0);
     textSize(25);
     text("Destruir Idolo", 100, 413);
     textSize(20);
    
     text("No Destruir Idolo", 381, 413);
  
  }else if (estado == 3){
    textSize(25);
    image(imagenes[3], 0, 0, 640, 480);
    fill(0,210);
    rect(240, 70, 285, 170);
    fill(255);
    text("            FIN: \n EL IDOLO SE ROMPE \n Y LA PRESUNTA \n MALDICION ES \n DESTRUIDA", 250, 100);
    
  }else if (estado == 4){
    background(150);
    image(imagenes[4], 0, 0, 640, 480);
    fill(0,210);
    rect(60, 230, 320, 100);
    fill(255);
    textSize(30);
    text("Desarrollo del Aspecto \nsobrenatural del Idolo", 70, 270);
    botonUno(90, 360, 260, 60);
    fill(0);
    textSize(35);
    text("Siguiente", 140, 400);
     
  }else if (estado == 5){
    image(imagenes[5], 0, 0, 640, 480);
    fill(0,210);
    rect(30, 365, 580, 50);
    fill(255);
    textSize(30);
    text("Enfrentamiento entre los dos personajes", 50, 400);
    botonUno(30, 250, 200, 60);
    botonDos(410, 250, 200, 60);
    fill(0);
    textSize(20);
    text("Morand mata \n   a Somoza", 70, 275);
    text("Somoza mata \n   a Morand", 450, 275);
    
  }else if (estado == 6){
    image(imagenes[6], 0, 0, 640, 480);
    fill(0, 210);
    rect(170, 260, 270, 100);
    fill(255);
    textSize(35);
    text("Mata a Somoza \n    (minijuego)", 180, 300);
    botonUno(170, 390, 270, 70);
    fill(0);
    text("Siguiente", 230, 435);
    
  }else if (estado == 7){
    image(imagenes[8], 0, 0, 640, 480);
    fill(0,210);
    rect(65, 260, 500, 100);
    fill(255);
    textSize(30);
    text("Somoza mata a Morand y completa \n                el SACRIFICIO", 80, 300);
    botonUno(80, 380, 190, 50);
    botonDos(360, 380, 190, 50);
    fill(0);
    textSize(20);
    text("Somoza continua", 95, 410);
    text("Somoza recapacita", 370, 410);
    
  }else if (estado == 8){
    image(imagenes[7], 0, 0, 640, 480);
    fill(0, 210);
    rect(150, 240, 400, 100);
    fill(255);
    textSize(40);
    text("FINAL ORIGINAL", 200, 300);
    
  }else if (estado == 9){
    image(imagenes[9], 0, 0, 640, 480);
    fill(0,210);
    rect(10, 220, 270, 150);
    fill(255);
    textSize(20);
    text("FIN: \nSOMOZA CONTINUA CON \nSU PLAN Y SE PREPARA \nPARA EL SIGUIENTE \nSACRIFICIO", 20, 250);
    
  }else if (estado == 10){
    image(imagenes[10], 0, 0, 640, 480);
    fill(0,210);
    rect(10, 270, 490, 100);
    fill(255);
    textSize(23);
    text("FIN: \nSOMOZA SE DA CUENTA DE LO QUE \nACABA DE HACER Y DESTRUYE EL IDOLO", 20, 300); 
  }
}
function mousePressed(){
  if(estado == 0 && detectarBoton(10,280,180,50)){
    estado = 1;
  }
  if(estado == 1 && detectarBoton(10, 350, 190, 50)){
    estado = 2;
  }
  if(estado == 2 && detectarBoton2(80, 380, 190, 50)){
    estado = 3;
  }
  if(estado == 2 && detectarBoton(360, 380, 190, 50)){
    estado = 4;
  }
  if(estado == 4 && detectarBoton(90, 360, 260, 60)){
    estado = 5;
  }
  if(estado == 5 && detectarBoton(30, 250, 200, 60)){
    estado = 6;
  }
   if(estado == 5 && detectarBoton2(410, 250, 200, 60)){
    estado = 7;
  }
  if(estado == 6 && detectarBoton(170, 390, 270, 70)){
    estado = 8;
  }
  if(estado == 7 && detectarBoton2(360, 380, 190, 50)){
    estado = 10;
  }
   if(estado == 7 && detectarBoton(80, 380, 190, 50)){
    estado = 9;
  }
}

 
