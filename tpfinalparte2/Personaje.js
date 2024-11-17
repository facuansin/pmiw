class Personaje{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 0, 255);
    this.vida = 50;
    this.bala = new Bala();
    this.dañado = false;
    this.estaMuerto = false;
    this.timer = 6;
    this.img = 6;
/////TIMER PARA CADA TECLA//////
    this.timerA = 0;
    this.timerD = 0;
    this.timerW = 0;
    this.timerS = 0;
///COMPROBADOR PARA CADA TECLA/////
    this.comprobadorA = 0;
    this.comprobadorD = 0;
    this.comprobadorW = 0;
    this.comprobadorS = 0;
  }
  
  dibujar(){
    
    if(this.vida > 0){
    this.bala.dibujar();
    this.personajeDibujado();
    this.Derrape();
    }else{
      this.estaMuerto = true;
    }
  }
  
  teclaMantenida(key){
    if(keyIsDown(68) && this.vida > 0){     // LETRA D
      this.moverDerecha();
      this.spriteD = true;
    }else{
      this.spriteD = false;
    }
    if(keyIsDown(65) && this.vida > 0){     // LETRA A
      this.moverIzquierda(); 
      this.spriteA = true;
    }else{
      this.spriteA = false;
    }
    if(keyIsDown(87) && this.vida > 0){     // LETRA W
      this.moverArriba();
      this.spriteW = true;
    }else{
      this.spriteW = false;
    }
    if(keyIsDown(83) && this.vida > 0){     // LETRA S
      this.moverAbajo();
      this.spriteS = true;
    }else{
      this.spriteS = false;
    }
    if(this.bala.disparada === false){
    if(keyIsDown(38)){    //FLECHA PARA ARRIBA
      this.dispararBala(1);
    }
    if(keyIsDown(40)){    //FLECHA PARA ABAJO
      this.dispararBala(2);
    }
    if(keyIsDown(37)){    //FLECHA PARA LA IZQUIERDA
      this.dispararBala(3);
    }
    if(keyIsDown(39)){    //FLECHA PARA LA DERECHA
      this.dispararBala(4);
    }
    
  }
  }

  
  teclaSoltada(key){
    if(key === 'a'){
     this.comprobadorA = 1;
     
    }
    if(key === 'd'){
     this.comprobadorD = 1;      //SI SE SUELTA LA TECLA PRESIONADA, ACTIVA SU RESPECTIVO
                                 //COMPROBADOR, LO QUE HACE QUE SU TIMER EMPIECE A BAJAR
    }                            //EN VEZ DE SUBIR CREANDO UN DERRAPE
    if(key === 'w'){
     this.comprobadorW = 1;
    }
    if(key === 's'){
     this.comprobadorS = 1;
    }
  }
  
  moverIzquierda(){
    this.timerA += 0.3;
    this.posX-=this.timerA;         //CUANTO MAS SE PRESIONA UNA TECLA, MAS AUMENTA
    if(this.timerA >= 6){           //SU VELOCIDAD, UNA VEZ QUE SU VELOCIDAD LLEGA A 6
      this.timerA = 6;             //NO AUMENTA MAS
    }
  }
  moverDerecha(){
    this.timerD += 0.3;
    this.posX+=this.timerD;
    if(this.timerD >= 6){
      this.timerD = 6;
    }
  }
  moverArriba(){
    this.timerW += 0.3;
    this.posY-=this.timerW;
    if(this.timerW >= 6){
      this.timerW = 6;
    }
  }
  moverAbajo(){
    this.timerS += 0.3;
    this.posY+=this.timerS;
    if(this.timerS >= 6){
      this.timerS = 6;
    }
  }
  
  Derrape(){
            //--------SISTEMA DE DERRAPES----------//
    if(this.comprobadorA >= 1){
     this.timerA -=0.2;
     this.posX -= this.timerA;
    }
    if(this.timerA <= 0 ){
      this.timerA = 0;
      this.comprobadorA = 0;
    }
    
    if(this.comprobadorD >= 1){
     this.timerD -=0.2;
     this.posX += this.timerD;
    }
    if(this.timerD <= 0 ){
      this.timerD = 0;
      this.comprobadorD = 0;
    }
    
    if(this.comprobadorW >= 1){
     this.timerW -=0.2;
     this.posY -= this.timerW;
    }
    if(this.timerW <= 0 ){
      this.timerW = 0;
      this.comprobadorW = 0;
    }
    
    if(this.comprobadorS >= 1){
     this.timerS -=0.2;
     this.posY += this.timerS;
    }
    if(this.timerS <= 0 ){
      this.timerS = 0;
      this.comprobadorS = 0;
    }
      //--------FIN DE SISTEMA DE DERRAPES----------//
    
  //--------COLISION CON LOS BORDES DE LA PANTALLA----------//
  if(this.posX <= 0){
      this.posX = 0;
  }
  if(this.posX >= 590){
      this.posX = 590;
  }
  if(this.posY <= 0){
    this.posY = 0;
  }
  if(this.posY >= 430){
    this.posY = 430;
  }
  //--------FIN DE COLISION CON LOS BORDES DE LA PANTALLA----------
  }

  
   restarVida(dañoRecibido){
    this.vida -=dañoRecibido;
  }
  
  dispararBala(direccion){
    this.bala = new Bala(this.posX, this.posY);
    this.bala.disparar(direccion);
   
  }
  
  haDisparadoBala(){
    return this.bala.disparada;
  }
  
  personajeDibujado(){
    /////------SPRITES------//////
    push();
    noStroke();
    fill(0, 100);
    ellipse(this.posX+25, this.posY+75, 80, 35);
    pop();
    if(this.spriteW === false && this.spriteS === false && this.spriteD === false && this.spriteA === false){ 
    image(imagenes[7], this.posX-25, this.posY, 100, 100);
    }
    if(this.spriteW || this.spriteS || this.spriteD || this.spriteA){
    image(imagenes[this.img], this.posX-25, this.posY, 100, 100);
    }
    if(this.spriteW || this.spriteS || this.spriteD || this.spriteA){
      this.timer += 0.1;
    }
    if(this.timer > 9){
      this.timer = 6;
    }
    if(this.timer >= 6 && this.timer < 7){
      this.img = 6;
    }
    if(this.timer >= 7 && this.timer < 8){
      this.img = 7;
    }
    if(this.timer >= 8 && this.timer < 9){
      this.img = 8;
    }
    if(this.spriteA && this.spriteS === false){
      image(imagenes[2], this.posX-25, this.posY-50, 100, 100);
    }
    if(this.spriteD && this.spriteA === false){
      image(imagenes[4], this.posX-25, this.posY-50, 100, 100);
    }
    if(this.spriteW && this.spriteS === false){
      image(imagenes[5], this.posX-25, this.posY-50, 100, 100);
    }
     if(this.spriteS && this.spriteD === false || this.spriteW === false && this.spriteA === false && this.spriteD === false){
      image(imagenes[3], this.posX-25, this.posY-50, 100, 100);
    }
  ///////------FIN DE SPRITES------///////
    ////Barra de vida////
    push();
    strokeWeight(3);
    fill(50);
    rect(this.posX-25, this.posY-60, 100, 10);
    fill(0,255,0);
    if(this.dañado){
      fill(255,200,0);
    }
    rect(this.posX-25, this.posY-60, this.vida*2, 10);
    pop();
  }
   haTocadoAlEnemigo(enemigo){
    if(dist(this.posX+25, this.posY+25, enemigo.posX, enemigo.posY) < 60){     ////COLISION CON EL ENEMIGO
      this.restarVida(0.6);
      this.dañado = true;
    }else{
      this.dañado = false;
   }
}
haTocadoLaBala(bala){
    if(dist(this.posX+25, this.posY+25, bala.posX, bala.posY) < 60){   /////COLISION CON BALA DEL ENEMIGO
      this.restarVida(0.4);
      this.dañado = true;
      
        }else{
          this.dañado = false;
        }
  }

}
