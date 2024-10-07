let imagenes = [];

function preload(){
  for (let i = 0; i < 11; i++) {  // Cambia 5 por el número de imágenes que tienes
    imagenes[i] = loadImage(`Assets/imagenes/imagen${i}.jpeg`);  // Asegúrate de cambiar la ruta a tus imágenes
  }
}
class ClaseJuego {

   constructor() {
    this.pantalla = 0;
    this.b = new byf();
    
  }
PantallaEstados(){
switch(this.pantalla){
  
 case 0: //Menu Inicial
  background(20);
  image(imagenes[0], 0, 0, 640, 480);
  fill(255);
  text("El Idolo De Las Cicladas", 15, 100);
  fill(0);
  this.b.menuB();
 break;

case 1: //Pantalla de transicion
  background(150);
  image(imagenes[1], 0, 0, 640, 480);
  fill(255);
  text("Descubrimiento de Idolo", 70, 100);
  this.b.mostrarBU();
  
break;

case 2: //Pantalla de decision con dos opciones
  background(100);
  image(imagenes[2], 0, 0, 640, 480);
  fill(70);
  text("Comienza la obsesion con el idolo", 80, 100);
  this.b.mostrarDosBotones("Destruir Idolo", "No destruir \n el Idolo");
break;

case 3: //Decision 1 de la pantalla 2
background(50);
image(imagenes[3], 0, 0, 640, 480);
text("FIN: \n EL IDOLO SE ROMPE \n Y LA PRESUNTA \n MALDICION ES DESTRUIDA", 200, 100);
break;

case 4: //Decision 2 de la pantalla 2, continua con el flujo
background(150);
image(imagenes[4], 0, 0, 640, 480);
fill(255);
text("Desarrollo del Aspecto \nsobrenatural del Idolo", 10, 100);
this.b.mostrarBU();
break;

case 5: // Pantalla con otra decisión (pantalla 6)
background(200);
image(imagenes[5], 0, 0, 640, 480);
fill(255);
text("Enfrentamiento entre los dos personajes", 10, 100);
        this.b.mostrarDosBotones("Morand mata \na Somoza", "Somoza mata \na Morand");
break;

case 6: // Decisión 1 de la pantalla 5, lleva a la pantalla 8
background(50);
image(imagenes[6], 0, 0, 640, 480);
fill(255);
        text("Mata a Somoza(minijuego)", 100, 300);
        this.b.mostrarBU();
break;

case 7: // Decisión 2 de la pantalla 5, lleva a más decisiones
background(100);
image(imagenes[8], 0, 0, 640, 480);
fill(255);
        text("Somoza mata a Morand y completa \nel sacrificio", 100, 300);
        this.b.mostrarDosBotones("Somoza \ncontinua", "Somoza \nrecapacita");
break;

case 8: // Pantalla 8
background(250);
image(imagenes[7], 0, 0, 640, 480);
fill(255);
text("FINAL ORIGINAL", 200, 300);
break;

case 9: // Pantalla 10
  background(100);
  image(imagenes[9], 0, 0, 640, 480);
  fill(255);
  text("FIN: SOMOZA CONTINUA CON SU PLAN \nY SE PREPARA PARA EL \nSIGUIENTE SACRIFICIO", 20, 100);
break;

case 10: // Pantalla 11
background(150);
        image(imagenes[10], 0, 0, 640, 480);
        fill(255);
        text("FIN: \n SOMOZA SE DA CUENTA DE LO QUE \nACABA DE HACER Y DESTRUYE EL IDOLO", 20, 100);
break;

}
}
///eventos de mouse o teclado
botonUno(mx,my){
  //1 solo boton
  if(this.pantalla==1 && mx>50 && mx<550 && my>350 && my<430){ 
    this.pantalla=2;
  }else if(this.pantalla==4 && mx>50 && mx<550 && my>350 && my<430){ 
    this.pantalla=5;
  }else if(this.pantalla==6 && mx>50 && mx<550 && my>350 && my<430){ 
    this.pantalla=8;
  }
}
//menu
menu(mx,my){
  if(this.pantalla==0 && mx>150 && mx<450 && my>200 && my<250){ 
    this.pantalla=1;
}
}
////final de la clase
botonDecisionUno(mx, my) {
  // Botón para tomar la primera decisión en la pantalla 3 o 6
  if (this.pantalla == 2 && mx > 100 && mx < 300 && my > 400 && my < 460) {
    this.pantalla = 3; // Decisión 1 en la pantalla 3
  } else if (this.pantalla == 5 && mx > 100 && mx < 300 && my > 400 && my < 460) {
    this.pantalla = 6; // Decisión 1 en la pantalla 6
  }
}

botonDecisionDos(mx, my) {
  // Botón para tomar la segunda decisión en la pantalla 3 o 6
  if (this.pantalla == 2 && mx > 350 && mx < 550 && my > 400 && my < 460) {
    this.pantalla = 4; // Decisión 2 en la pantalla 3
  } else if (this.pantalla == 5 && mx > 350 && mx < 550 && my > 400 && my < 460) {
    this.pantalla = 7; // Decisión 2 en la pantalla 6
  } else if (this.pantalla == 7 && mx > 100 && mx < 300 && my > 400 && my < 460) {
    this.pantalla = 9; // Decisión para ir a la pantalla 10
  } else if (this.pantalla == 7 && mx > 350 && mx < 550 && my > 400 && my < 460) {
    this.pantalla = 10; // Decisión para ir a la pantalla 11
  }
}

}
