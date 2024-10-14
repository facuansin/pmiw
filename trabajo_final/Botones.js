function botonUno(x, y, an, al){
  if(detectarBoton(x,y,an,al)){
  fill(180);
  }else{
    fill(255);
  }
  rect(x, y, an, al);
}

function botonDos(x, y, an, al){
  if(detectarBoton2(x,y,an,al)){
  fill(180);
  }else{
    fill(255);
  }
  rect(x, y, an, al);
}


function detectarBoton(x, y, an, al){
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}
function detectarBoton2(x, y, an, al){
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}
