class Enemigo{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 0);
    this.vida = 100;
    this.bala = new Bala();
    this.numero = int(random(1, 4));
    this.guardadorTiempo = millis();
    this.tiempoDeDisparo = millis();
    this.mover();
    this.dañado = false;
    this.estaMuerto = false;
    this.posXP = 0;
    this.posYP = 0;
    this.timer = 12;
    this.img = 12;
  }
  
  dibujar(){
    if(this.vida > 0){
    this.bala.dibujar();
    this.enemigoDibujado();
    this.update();
    this.mover();
    }else{
      this.estaMuerto = true;
    }
  }
  
  update(){
    if(this.vida > 0){
    if(millis() - this.guardadorTiempo >= 1500){
      this.numero = int(random(1, 9));         //randomizador, cada 1.5 segundos~ eligue
      this.guardadorTiempo = millis();    //un numero del 1 al 8, dandole una nueva direccion
    }
    }
    if(millis() - this.tiempoDeDisparo >= 1500){ 
      this.tiempoDeDisparo = millis();            ///cada 1.5 segundos~ le dispara al personaje
      this.dispararBala(5);
      
    }
  }


  mover(){
    if (this.numero == 1) {
      
      this.posX -= 6; 
    } else if (this.numero == 2) {
      this.posX += 6;
    } else if (this.numero == 3) {         ///EL MOVIMIENTO DEL ENEMIGO DEPENDERA DEL NUMERO QUE EL RANDOMIZADOR HAYA ELEGIDO
      this.posY -= 6; 
    } else if (this.numero == 4) {
      this.posY += 6; 
    }
      else if (this.numero == 5) {
      this.posY -= 4; 
      this.posX -= 4;
    }
    else if (this.numero == 6) {
      this.posY += 4; 
      this.posX += 4;
    }
    else if (this.numero == 7) {
      this.posY -= 4; 
      this.posX += 4;
    }
    else if (this.numero == 8) {
      this.posY += 4; 
      this.posX -= 4;
    }
    
    
  //--------COLISION CON LOS BORDES DE LA PANTALLA----------//
   if(this.posX <= 25){
      this.posX = 26;
      this.numero = int(random(6, 9));
  }
  if(this.posX >= 615){
      this.posX = 614;
      this.numero = int(random(5, 9));        ///SI EL ENEMIGO COLISIONA CON UNA PARED, IRA EN LA DIRECCION CONTRARIA EN DIAGONAL
  }                                          ///ESTO ES ASI PARA EVITAR QUE VAYA EN LINEA RECTA SOBRE UNA PARED
  if(this.posY <= 25){
    this.posY = 26;
    this.numero = int(random(5, 9));
  }
  if(this.posY >= 455){
    this.posY = 454;
    this.numero = int(random(5, 9));
  }
  }
  //-------- FIN DE COLISION CON LOS BORDES DE LA PANTALLA----------//


  restarVida(dañoRecibido){
    this.vida -=dañoRecibido;       ///EN "HATOCADOLABALA" PUEDES ELEGIR CUANTO DANO POR IMPACTO VA A RECIBIR EL ENEMIGO
    
  }
  
  haTocadoLaBala(bala){
    if(dist(this.posX, this.posY, bala.posX, bala.posY) < 60){  ///CALCULA LA POSICION DEL ENEMIGO CON RESPECTO A LA BALA DEL PERSONAJE
      this.restarVida(3.2);                           ///RECIBE DANO SI COLISIONA
      this.dañado = true;
        }else{
      this.dañado = false;
   }
  }
  
  enemigoDibujado(){
    this.timer += 0.1;
    if(this.timer > 15){
      this.timer = 12;
    }
    if(this.timer >= 12 && this.timer < 13){    ///ACA ES DONDE FUNCIONAN LOS SPRITES DEL ENEMIGO
      this.img = 12;
    }
    if(this.timer >= 13 && this.timer < 14){    ///SI EL TIMER AUMENTA, LA IMG QUE TENGA COMO CUERPO CAMBIARA, DANDOLE SU ANIMACION
      this.img = 13;
    }
    if(this.timer >= 14 && this.timer < 15){
      this.img = 14;
    }
    push();
    noStroke();
    fill(0, 100);
    ellipse(this.posX, this.posY+75, 80, 35);
    pop();
    image(imagenes[this.img], this.posX-50, this.posY, 100, 100);
    image(imagenes[11], this.posX-50, this.posY-60, 100, 100);

    ///barra de vida/////
    push();
    strokeWeight(3);
    fill(50);
    rect(this.posX-50, this.posY-60, 100, 10);    /////DOS RECT, UNO GRIS Y UNO VERDE. SI LA VIDA DEL ENEMIGO DISMINUYE, TAMBIEN LO HARA EL ANCHO DEL RECT
    fill(255,0,0);
    if(this.dañado){
      fill(255,200,0);
    }
    rect(this.posX-50, this.posY-60, this.vida, 10);
    pop();
    
    
  }
  dispararBala(direccion){
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar(direccion);
    this.bala.posPersonaje(this.posXP, this.posYP);
  }
  
  haDisparadoBala(){
    return this.bala.disparada;
  }
  
  posDePersonaje(personaje){
       this.posXP = personaje.posX;
       this.posYP = personaje.posY;
  }
}
