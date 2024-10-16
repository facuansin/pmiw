function boton(x, y, an, al, ts, txt, x2, y2) {
  if (detectarBoton(x, y, an, al)) {
    fill(180);
  } else {
    fill(255);
  }
  rect(x, y, an, al, 30);
  fill(0);
     textSize(ts);
     text(txt, x2, y2);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}

function texto(x, y, an, al, ts, txt, x2, y2) {
  fill(0, 210);
  rect(x, y, an, al);
  fill(255);
  textSize(ts);
  text(txt, x2, y2);
}

function fondo(i){
  image(imagenes[i], 0, 0, 640, 480);
}
