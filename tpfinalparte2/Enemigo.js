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
    this.posXP = 0;
    this.posYP = 0;
    this.timer = 12;
    this.img = 12;
    this.c = 0;
    this.d = 2;
    this.t = 10;
    this.sangre = 0;
    this.facil = false;
    this.dificil = false;
    this.velocidad = 0;
    this.dificultadFacil = 0;
    this.dificultadDificil = 0;
  }
  
  dibujar(){
    if(this.vida > 0){
    this.posXsangre = this.posX;
    this.posYsangre = this.posY;
    this.bala.dibujar();
    this.enemigoDibujado();
    this.update();
    this.mover();
    }else{
      this.estaMuerto();
    }
    if(this.facil){
      this.dificultadFacil = 1;
    }else{
      this.dificultadFacil = 0;
    }
    if(this.dificil){
      this.dificultadDificil = 1;
    }else{
      this.dificultadDificil = 0;
    }
  }
  
  update(){
    if(this.vida > 0){
    if(millis() - this.guardadorTiempo >= 1500){
      this.numero = int(random(1, 9));         //randomizador, cada 1.5 segundos~ elige
      this.guardadorTiempo = millis();        //un numero del 1 al 8, dandole una nueva direccion
    }
    }
    if(millis() - this.tiempoDeDisparo >= 1500){ 
      this.tiempoDeDisparo = millis();            ///cada 1.5 segundos~ le dispara al personaje
      this.dispararBala(5);
      
    }
  }


  mover(){
    if(this.facil){
      this.velocidad = 2;
    }else{
      this.velocidad = 0;
    }
   
    if (this.numero == 1) {
      
      this.posX -= 6-this.dificultadFacil*2; 
    } else if (this.numero == 2) {
      this.posX += 6-this.dificultadFacil*2;
    } else if (this.numero == 3) {         ///EL MOVIMIENTO DEL ENEMIGO DEPENDERA DEL NUMERO QUE EL RANDOMIZADOR HAYA ELEGIDO
      this.posY -= 6-this.dificultadFacil*2; 
    } else if (this.numero == 4) {
      this.posY += 6-this.dificultadFacil*2; 
    }
      else if (this.numero == 5) {
      this.posY -= 4-this.dificultadFacil*2; 
      this.posX -= 4-this.dificultadFacil*2;
    }
    else if (this.numero == 6) {
      this.posY += 4-this.dificultadFacil*2; 
      this.posX += 4-this.dificultadFacil*2;
    }
    else if (this.numero == 7) {
      this.posY -= 4-this.dificultadFacil*2; 
      this.posX += 4-this.dificultadFacil*2;
    }
    else if (this.numero == 8) {
      this.posY += 4-this.dificultadFacil*2; 
      this.posX -= 4-this.dificultadFacil*2;
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
    this.vida -=dañoRecibido;       ///EN "HATOCADOLABALA" PODES ELEGIR CUANTO DANO POR IMPACTO VA A RECIBIR EL ENEMIGO
    
  }
  
  estaMuerto(){
    this.sangre += 1.2;
    this.c += 0.4;
    if(this.c > 3){
      this.c = 0;
    }
    this.t -= 0.5;
    if(this.t <= -5){
      this.t = 10;
      this.posXsangre = this.posX;
      this.posYsangre = this.posY;
      this.d = random(-8, 8);
    }
    push();
    fill(255, 0, 0);
    noStroke();
  
    rect(this.posXsangre += this.d, this.posYsangre -= this.t, 20 + this.t*1.5, 20 + this.t*1.5);

    pop();
    
    push();
    noStroke();
    fill(180, 0, 0);
    ellipse(this.posX, this.posY+75, this.sangre, this.sangre/3);
    fill(0, 100);
    ellipse(this.posX+this.c, this.posY+75, 80, 35);
    
    pop();
    image(imagenes[22], this.posX-50+this.c, this.posY, 100, 100);
    image(imagenes[23], this.posX-50+this.c, this.posY-60, 100, 100);
    
  }
  
  haTocadoLaBala(bala){
    if(dist(this.posX, this.posY, bala.posX, bala.posY) < 60){  ///CALCULA LA POSICION DEL ENEMIGO CON RESPECTO A LA BALA DEL PERSONAJE
      this.restarVida(2.5+this.dificultadFacil-this.dificultadDificil);                           ///RECIBE DANO SI COLISIONA
      this.dañado = true;
        }else{
      this.dañado = false;        //PINTA SU BARRA DE VIDA DE COLOR NARANJA
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
      fill(255,180,0);
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
  
  posDePersonaje(personaje, pantallas){
       this.posXP = personaje.posX;
       this.posYP = personaje.posY;
       this.facil = pantallas.facil;
       this.dificil = pantallas.dificil;
  }
}
