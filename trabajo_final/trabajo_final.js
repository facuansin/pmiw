let c;

function setup() {
  c = new ClaseJuego();
  createCanvas(640, 480);
  
}

function draw() {
  c.PantallaEstados();
 
}
function mousePressed(){
c.menu(mouseX,mouseY);
c.botonUno(mouseX,mouseY);
c.botonDecisionUno(mouseX, mouseY);
c.botonDecisionDos(mouseX, mouseY);
  // Cambia a la siguiente pantalla cuando se presione el mouse

}

 
