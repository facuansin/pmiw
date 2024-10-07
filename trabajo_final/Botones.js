class byf {
  constructor() {
    this.textos = [];
    this.f = 20;
    this.flautista = [];
    this.drc=50;
    this.izq=350;
    this.down=500;
  }

 
//BOTONES
//mostrar boton 1
mostrarBU(){
  fill(255);  
  rect(this.drc,this.izq,this.down,75);
  fill(20);
textSize(40);
text("Siguiente",205,400);
}
//mostrar 2 botones
botonDos(){
  if(mouseX>25 && mouseX<273 && mouseY>490 && mouseY<564){
}
}
mostrarDosBotones(opcion1, opcion2) {
  fill(255);
  rect(100, 400, 200, 60);
  rect(350, 400, 200, 60);
  fill(20);
  textSize(30);
  text(opcion1, 130, 440);
  text(opcion2, 380, 440);
}

//mostrar 3 botones
botonTres(){
  if(dist(mouseX,mouseY,150,550)<=50){
  }
}
menuB(){
  textSize(50);
  rect(150, 200, 250, 60);
  fill(200);
  text("Empezar", 180, 245);
  fill(0);
}


}
