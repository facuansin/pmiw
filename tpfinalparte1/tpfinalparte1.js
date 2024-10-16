//Trabajo Final Parte 1
//Facundo Ansin y Marcos Villaro
//Comision 1



let estado;
let imagenes = [];

function preload(){
  for (let i = 0; i < 11; i++) {
    imagenes[i] = loadImage(`Assets/imagenes/imagen${i}.jpeg`);
  }
}
function setup() {
  estado = 0;
  createCanvas(640, 480);
  
}

function draw() {
  if(estado === 0){           //Menu
     fondo(0);
     texto(10, 40, 170, 200, 40, "El Idolo\nDe Las\nCicladas", 15, 100);
     boton(10, 280, 180, 50, 35, "Siguiente", 25, 317);

  }else if (estado === 1){   //Pantalla 1
    fondo(1);
    texto(10, 80, 260, 120, 35, "Descubrimiento \ndel Idolo", 20, 130);
    boton(10, 350, 190, 50, 35, "Siguiente", 30, 385);
  
  }else if (estado === 2){   //Pantalla 2 - eleccion
    fondo(2);
    texto(50, 260, 550, 70, 35, "Comienza la obsesion con el idolo", 60, 305);
    boton(80, 380, 190, 50, 25, "Destruir Idolo", 100, 413);
    boton(360, 380, 190, 50, 20, "No Destruir Idolo", 381, 413);
  
  }else if (estado === 3){  //Pantalla 3 - Final 1
    fondo(3);
    texto(240, 70, 285, 170, 25, "            FIN: \n EL IDOLO SE ROMPE \n Y LA PRESUNTA \n MALDICION ES \n DESTRUIDA", 250, 100);
        
  }else if (estado === 4){  //Pantalla 4
    fondo(4);
    texto(60, 230, 320, 100, 30, "Desarrollo del Aspecto \nsobrenatural del Idolo", 70, 270);
    boton(90, 360, 260, 60, 35, "Siguiente", 140, 400);
     
  }else if (estado === 5){  //Pantalla 5 - eleccion
    fondo(5);
    texto(30, 365, 580, 50, 30, "Enfrentamiento entre los dos personajes", 50, 400);
    boton(30, 250, 200, 60, 20, "Morand mata \n   a Somoza", 70, 275);
    boton(410, 250, 200, 60, 20, "Somoza mata \n   a Morand", 450, 275);

    
  }else if (estado == 6){    //Pantalla 6 - Minijuego
    fondo(6);
    texto(170, 260, 270, 100, 35, "Mata a Somoza \n    (minijuego)", 180, 300);
    boton(170, 390, 270, 70, 35, "Siguiente", 230, 435);

    
  }else if (estado === 7){   //Pantalla 7 - eleccion
    fondo(8);
    texto(65, 260, 500, 100, 30, "Somoza mata a Morand y completa \n                el SACRIFICIO", 80, 300);
    boton(80, 380, 190, 50, 20, "Somoza continua", 95, 410);
    boton(360, 380, 190, 50, 20, "Somoza recapacita", 370, 410);

    
  }else if (estado === 8){   //Pantalla 8 - Final 2
    fondo(7);
    texto(150, 240, 400, 100, 40, "FINAL ORIGINAL", 200, 300);
    
  }else if (estado === 9){  //Pantalla 9 - Final 3
    fondo(9);
    texto(10, 220, 270, 150, 20, "FIN: \nSOMOZA CONTINUA CON \nSU PLAN Y SE PREPARA \nPARA EL SIGUIENTE \nSACRIFICIO", 20, 250);
 
  }else if (estado === 10){    //Pantalla 10 - Final 4
    fondo(10);
    texto(10, 270, 490, 100, 23, "FIN: \nSOMOZA SE DA CUENTA DE LO QUE \nACABA DE HACER Y DESTRUYE EL IDOLO", 20, 300);
  }
}

function mousePressed(){
  if(estado === 0 && detectarBoton(10,280,180,50)){
    estado = 1;
  }
  if(estado === 1 && detectarBoton(10, 350, 190, 50)){
    estado = 2;
  }
  if(estado === 2 && detectarBoton(80, 380, 190, 50)){
    estado = 3;
  }
  if(estado === 2 && detectarBoton(360, 380, 190, 50)){
    estado = 4;
  }
  if(estado === 4 && detectarBoton(90, 360, 260, 60)){
    estado = 5;
  }
  if(estado === 5 && detectarBoton(30, 250, 200, 60)){
    estado = 6;
  }
   if(estado === 5 && detectarBoton(410, 250, 200, 60)){
    estado = 7;
  }
  if(estado === 6 && detectarBoton(170, 390, 270, 70)){
    estado = 8;
  }
  if(estado === 7 && detectarBoton(360, 380, 190, 50)){
    estado = 10;
  }
   if(estado === 7 && detectarBoton(80, 380, 190, 50)){
    estado = 9;
  }
}

 
