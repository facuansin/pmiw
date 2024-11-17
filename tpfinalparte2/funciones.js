function boton (x, y, an, al, ts, txt, x2, y2) {
  if (detectarBoton(x, y, an, al)) {
    fill(100);
  } else {                                           //El boton que se utiliza para cada pantalla
    fill(239, 184, 16);
  }
  push();
  strokeWeight(3);
  rect(x, y, an, al, 30);
  pop();
  fill(0);
     textSize(ts);
     text(txt, x2-3, y2);
     text(txt, x2+3, y2);
     text(txt, x2, y2-3);
     text(txt, x2, y2+3);
     fill(255);
     text(txt, x2, y2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;            //Esta funcion detecta la posicion del mouse respecto a la del boton, 
}                                                                               //es usada en la funcion boton para que se pinte y en el mousePressed para pasar de pantallas

function texto(x, y, an, al, ts, txt, x2, y2) {
  fill(0, 210);
  rect(x, y, an, al);
  fill(255);
  textSize(ts);
  text(txt, x2, y2);
}
function titulo(txt, x, y, tS, c1, c2, c3){
  push();
    fill(0);
    textSize(tS);
    text(txt, x-3, y);
    text(txt, x+3, y);
    text(txt, x, y-3);
    text(txt, x, y+3);
    fill(c1, c2, c3);
    text(txt, x, y);
    pop();
}

function fondo(i){
  image(imagenes[i], 0, 0, 640, 480);         //Funcion de las imagenes, todas tienen el mismo tamaño asique el unico parametro que necesita es el numero de imagen
}
