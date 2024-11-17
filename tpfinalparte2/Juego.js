class Juego{
  constructor(){
    this.crearPersonaje();
    this.crearEnemigo();
    this.ganaste = 0;
    this.perdiste = 0;
  }
  
  dibujar(){
    this.enemigo.dibujar();
    this.personaje.dibujar();
    this.controlarDisparosAEnemigos();
    this.controlarDisparosAPersonaje();
    this.controlarColisionConEnemigo();
    this.calcularPosPersonaje();
    this.perdio();
    this.gano();
    
  }
  
  
  crearEnemigo(){
    this.enemigo = new Enemigo(width/2, 100);
  }
  
  crearPersonaje(){
    this.personaje = new Personaje(width/2, 300);
  }
  
  gano(){
    if(this.enemigo.vida<=0){
     this.ganaste = 1;
    }
  }
  
  perdio(){
    if(this.personaje.vida<=0){
     this.perdiste = 1;
    }
  }

  teclaMantenida(key){
    this.personaje.teclaMantenida(key);
  }
  teclaSoltada(key){
    this.personaje.teclaSoltada(key);
  }
  controlarDisparosAEnemigos(){
    if(this.personaje.haDisparadoBala()){
      this.enemigo.haTocadoLaBala(this.personaje.bala);
      
    }
  }
  controlarDisparosAPersonaje(){
    if(this.enemigo.haDisparadoBala()){
      this.personaje.haTocadoLaBala(this.enemigo.bala);
    }
  }
 controlarColisionConEnemigo(){
   this.personaje.haTocadoAlEnemigo(this.enemigo);
 }
 calcularPosPersonaje(){
   this.enemigo.posDePersonaje(this.personaje);
 }

}
