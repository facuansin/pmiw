class Boton {
  constructor(x_, y_, an_, al_, ts_, txt_, x2_, y2_, c_) {
   this.x = x_;
   this.y = y_;
   this.an = an_;
   this.al = al_;
   this.ts = ts_;
   this.txt = txt_;
   this.x2 = x2_;
   this.y2 = y2_;
   this.c = c_;
  }

  dibujar(){
    if (this.detectarBoton(this.x, this.y, this.an, this.al)) {

      if(this.c < 12){
        this.c += 2;
      }
    } else {                                           //El boton que se utiliza para cada pantalla

      if(this.c > 0){
        this.c -= 4;
      }
    }
    fill(239-this.c*7, 184-this.c*7, 16-this.c*7);
    
    push();
    strokeWeight(3);
    rect(this.x-this.c/2, this.y-this.c/2, this.an+this.c, this.al+this.c, 30+this.c);
    pop();
    fill(0);
    textSize(this.ts);
    text(this.txt, this.x2-3, this.y2);
    text(this.txt, this.x2+3, this.y2);
    text(this.txt, this.x2, this.y2-3);
    text(this.txt, this.x2, this.y2+3);
    fill(255);
    text(this.txt, this.x2, this.y2);
  }

  detectarBoton(x, y, an, al) {
    return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;            //Esta funcion detecta la posicion del mouse respecto a la del boton,
  }                                                                               //es usada en la funcion boton para que se pinte y en el mousePressed para pasar de pantallas

}
