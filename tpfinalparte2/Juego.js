class Juego {
  constructor() {
    this.crearPantallas();
    this.crearPersonaje();
    this.crearEnemigo();
    this.ganaste = 0;
    this.perdiste = 0;
  }

  dibujar() {
    this.pantallas.dibujar();
    this.conectorDeClases();
    this.perdio();
    this.gano();
    if (this.pantallas.pantalla <= 1 ||this.pantallas.pantalla >= 3) {
      this.enemigo.vida = 100;
      this.personaje.vida = 100;
      this.personaje.posX = 320;
      this.personaje.posY = 360;
      this.enemigo.posX = 320;
      this.enemigo.posY = 100;
      this.enemigo.sangre = 0;
      this.personaje.sangre = 0;
    }
    if (this.pantallas.pantalla === 2) {
      this.enemigo.dibujar();
      this.personaje.dibujar();
    }
  }

  crearPantallas() {
    this.pantallas = new Pantallas();
  }

  crearEnemigo() {
    this.enemigo = new Enemigo(width/2, 100);
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 300);
  }

  gano() {
    if (this.enemigo.vida >= 1) {
      this.ganaste = 0;
    }
    if (this.enemigo.vida<=0) {
      this.ganaste = 1;
    }
  }

  perdio() {
    if (this.personaje.vida >= 1) {
      this.perdiste = 0;
    }
    if (this.personaje.vida<=0) {
      this.perdiste = 1;
    }
  }

  teclaMantenida(key) {
    this.personaje.teclaMantenida(key);
  }
  teclaSoltada(key) {
    this.personaje.teclaSoltada(key);
  }

  conectorDeClases() {
    if (this.personaje.haDisparadoBala()) {
      this.enemigo.haTocadoLaBala(this.personaje.bala);
    }
    if (this.enemigo.haDisparadoBala()) {
      this.personaje.haTocadoLaBala(this.enemigo.bala);
    }
    this.personaje.haTocadoAlEnemigo(this.enemigo, this.pantallas);
    this.enemigo.posDePersonaje(this.personaje, this.pantallas);
    this.pantallas.data(this.ganaste, this.perdiste);
  }

  mousePresionado() {
    this.pantallas.mousePresionado();
  }
}
