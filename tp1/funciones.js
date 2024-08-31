function triangulo(x, y, x2, y2, x3, y3) {
  translate(200, 0);
  push();
  for (let i = 0; i < 18; i++) {
    rotate(calcularRotacion(200, 100));
    triangle(x + i * 5, y - i * 3, x2, y2 + i * 7, x3 - i * 5, y3 - i * 3);
    if (i % 2 === 0) {
      fill(negro);
    } else {
      fill(blanco);
    }
  }
  pop();
}

function triangulo2(x, y, x2, y2, x3, y3) {
  translate(200, 50);
  push();
  for (let i = 0; i < 18; i++) {
    rotate(calcularRotacion(200, 100));
    triangle(x + i * 5, y + i * 3, x2, y2 - i * 7, x3 - i * 5, y3 + i * 3);
    if (i % 2 === 0) {
      fill(negro);
    } else {
      fill(blanco);
    }
  }
  pop();
} 

function calcularRotacion(divisorX, divisorY) {
  return radians(mouseX / divisorX - mouseY / divisorY);
}
