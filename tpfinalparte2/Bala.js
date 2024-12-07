class Bala{
  constructor(posX, posY){
    this.posX = posX+25;
    this.posY = posY+25;
    this.posXenemigo = posX;
    this.posYenemigo = posY;
    this.miColor = color(255, 255, 0);
    this.disparada = false;
    this.direcc = 0;
    this.posXpersonaje = 0;
    this.posYpersonaje = 0;
    this.c = 0;
  }
  
    dibujar(){
    ////HACHA//////
      if(this.disparada){
      push();
      noStroke();
      fill(0, 120);
      ellipse(this.posX, this.posY+50, 50, 25); 
      pop();
      this.c++;
      push();
      translate(this.posX, this.posY);       ////ESTE TRANSLATE+ROTATE ESTA HECHO PARA QUE EL HACHA GIRE MIENTRAS SU EJE CAMBIA
      rotate(-this.c/5);
      image(imagenes[15], -50, -50, 100, 100);
      pop();
      
      this.mover();
      this.colision();

      }
  }
  
  mover(){
    if(this.direcc === 1){
    this.posY-=10;
    }
    if(this.direcc === 2){
    this.posY+=10;
    }
    if(this.direcc === 3){
    this.posX-=10;
    }
    if(this.direcc === 4){
    this.posX+=10;
    }
   ////////DISPARO DEL ENEMIGO///////
    
    ////DISPARO EN VERTICAL////
    if(this.direcc === 5){ 
      if(this.posXpersonaje > this.posXenemigo-40 && this.posXpersonaje < this.posXenemigo+40){
        if(this.posYpersonaje > this.posYenemigo){
          this.posY += 7;
        }else{
          this.posY -= 7;
      }
    }
    ////DISPARO EN HORIZONTAL////
    if(this.posYpersonaje > this.posYenemigo-40 && this.posYpersonaje < this.posYenemigo+40){
        if(this.posXpersonaje > this.posXenemigo){
          this.posX += 7;
        }else{
          this.posX -= 7;
      }
    
    }
    ////DISPARO EN HORIZONTAL////
      if(this.posXpersonaje < this.posXenemigo-40){
        this.posX -=7;
      }else if(this.posXpersonaje > this.posXenemigo+40){
      this.posX +=7;
      }
      if(this.posYpersonaje < this.posYenemigo-40){
      this.posY -=7;
      }else if(this.posYpersonaje > this.posYenemigo+40){ 
      this.posY +=7;
      }
    }
  }
  /////CALCULADOR DE LA POSICION DEL PERSONAJE PARA QUE EL ENEMIGO SEPA DONDE DISPARAR/////
  posPersonaje(x, y){
    this.posXpersonaje = x;
    this.posYpersonaje = y;
  }
  colision(){
    if(this.posX <= -30){
      this.disparada = false;
  }
  if(this.posX >= 670){
      this.disparada = false;
  }
  if(this.posY <= -30){
    this.disparada = false;
  }
  if(this.posY >= 510){
    this.disparada = false;
  }
  }
  
  disparar(direccion){
    this.disparada = true;      ////"DISPARADA" LE PERMITE AL PERSONAJE SABER SI FUE DISPARADA O SI YA COLISIONO CON UNA PARED
    this.direcc = direccion;    ///LA DIRECCION PERMITE A LA BALA SABER SI ES DEL PERSONAJE O DEL ENEMIGO

  }

}
