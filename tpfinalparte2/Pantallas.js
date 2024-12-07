class Pantallas{
  constructor(){
    this.pantalla = 0;
    this.c = 0;
    this.d = 0;
    this.ganaste = 0;
    this.perdiste = 0;
    this.facil = false;
    this.normal = true;
    this.dificil = false;
    this.boton1 = new Boton(20, 300, 180, 50, 35, "Empezar", 37, 338, 0);
    this.boton2 = new Boton(430, 300, 180, 50, 35, "Creditos", 453, 338, 0);
    this.boton3 = new Boton(90, 380, 180, 50, 35, "Jugar", 130, 415, 0);
    this.boton4 = new Boton(380, 380, 180, 50, 35, "Tutorial", 410, 415, 0);
    this.boton5 = new Boton(90, 380, 180, 50, 25, "Volver a Jugar", 100, 415, 0);
    this.boton6 = new Boton(380, 380, 180, 50, 35, "Menu", 425, 415, 0);
    this.botonCerrar = new Boton(240, 380, 180, 50, 35, "Cerrar", 280, 415, 0);
    this.botonDificultad = new Boton(380, 300, 180, 50, 35, "Dificultad", 400, 337, 0);
    this.botonFacil = new Boton(250, 170, 150, 40, 25, "Facil", 300, 200, 0);
    this.botonNormal = new Boton(250, 230, 150, 40, 25, "Normal", 285, 260, 0);
    this.botonDificil = new Boton(250, 290, 150, 40, 25, "Dificil", 295, 320, 0);
  }
  
  dibujar(){
     //////LOGICA DE PANTALLAS//////
  if(this.pantalla === 0){
    this.fondo(16);
    this.titulo("El idolo de las Cicladas", 50, 100, 50, 225, 200, 0);
    this.boton1.dibujar();
    this.boton2.dibujar();
    sonidoVictoria.stop();
  }
  if(this.pantalla === 1){
    this.fondo(17);
    this.titulo("¡Morand ataca!", 18, 100, 50, 225, 0, 0);
    this.texto(30, 125, 310, 130, 20, "¡Parece que Morand ha llegado a \nla decision de quitarle la vida a \nSomoza! Lanza hachas a Somoza \npara acabar con el!", 35, 155);
    this.boton3.dibujar();
    this.boton4.dibujar();
    this.botonDificultad.dibujar();
  }
  ////////PANTALLA DE JUEGO///////
  if(this.pantalla === 2){
   this.fondo(1);
  fill(0, 50);   
  rect(0,0, 640, 480);
  if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  }
  }
  
  //////PANTALLA DE TUTORIAL//////
  if(this.pantalla === 3){
    this.fondo(20);
    this.botonCerrar.dibujar();
    sonidoPelea.stop();
  }
  //////PANTALLA DE CREDITOS//////
  if(this.pantalla === 4){
    this.fondo(21);
    this.texto(50, 145, 500, 200, 20, "Autor: Julio Cortazar\nCreado por: Facundo Ansin y Marcos Villaro\nComision 1\nDocente: Jose Bugiolachi", 70, 195);
    this.botonCerrar.dibujar();
  }
  
  if(this.ganaste === 1){
    this.c+=3;
    fill(0, this.c);
    rect(0,0,640,480);
    if(this.c >= 500){
      this.pantalla = 5;
      this.c = 0;
      this.d = 0;
      if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
    }
  }
  if(this.perdiste === 1){
    this.d+=3;
    fill(0,this.d);
    rect(0,0,640,480);
     if(this.d >= 500){
      this.pantalla = 6;
      this.d = 0;
      this.c = 0;
       if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
     }
  }
  //////PANTALLA GANASTE///////
  if(this.pantalla === 5){
    this.fondo(19);
    sonidoPelea.stop();
    this.titulo("¡Ganaste!", 330, 100, 50, 0, 255, 0);
    this.boton5.dibujar();
    this.boton6.dibujar();

    this.d = 0;
    this.c = 0;
  }
  //////PANTALLA PERDISTE///////
  if(this.pantalla === 6){
    this.fondo(18);
    sonidoPelea.stop();
    this.titulo("¡Perdiste!", 70, 100, 50, 255, 0, 0);
    this.boton5.dibujar();
    this.boton6.dibujar();
    this.d = 0;
    this.c = 0;
  }
  //////PANTALLA DE DIFICULTAD///////
  if(this.pantalla === 7){
    this.fondo(26);
    this.botonCerrar.dibujar();
    this.titulo("Escoge la dificultad", 140, 100, 40, 255, 255, 255);
    sonidoPelea.stop();
    this.botonFacil.dibujar();
    this.botonNormal.dibujar();
    this.botonDificil.dibujar();
    if(this.facil){
      this.titulo("Facil", 495, 200, 33, 0, 255, 0);
      this.texto(430, 210, 200, 105, 18, "Somoza recibe mas \ndaño y es mas lento. \nMorand es mas \nresistente al daño.", 440, 230);   ///x, y, an, al, ts, txt, x2, y2
    }
    if(this.normal){
      this.titulo("Normal", 480, 200, 33, 255, 215, 0);
      this.texto(430, 210, 200, 125, 18, "Somoza y Morand \nreciben la misma \ncantidad de daño y \ncorren a la misma \nvelocidad.", 440, 230);   ///x, y, an, al, ts, txt, x2, y2
    }
    if(this.dificil){
      this.titulo("Dificil", 490, 200, 33, 255, 0, 0);
      this.texto(430, 210, 200, 145, 18, "Somoza es extra \nresistente al daño. La \ncantidad de daño que \nrecibe Morand es \naumentada \nsubstancialmente.", 440, 230);   ///x, y, an, al, ts, txt, x2, y2
    }
  }
 
  }
  
  mousePresionado(){
    if(this.pantalla === 0 && this.boton1.detectarBoton(20, 300, 180, 50)){
    this.pantalla = 1;
  }
  if(this.pantalla === 0 && this.boton1.detectarBoton(430, 300, 180, 50)){       /////LOGICA DE CADA BOTON PARA CADA PANTALLA
    this.pantalla = 4;
  }
  if(this.pantalla === 4 && this.boton1.detectarBoton(220, 380, 180, 50)){
    this.pantalla = 0;
  }
   if(this.pantalla === 1 && this.boton1.detectarBoton(90, 380, 180, 50)){
      this.pantalla = 2
      if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
  }
  if(this.pantalla === 1 && this.boton1.detectarBoton(380, 300, 180, 50)){
    this.pantalla = 7;
  }
   if(this.pantalla === 7 && this.boton1.detectarBoton(240, 380, 180, 50)){
    this.pantalla = 1;
  }
  if(this.pantalla === 1 && this.boton1.detectarBoton(380, 380, 180, 50)){
    this.pantalla = 3;
  }
  if(this.pantalla === 3 && this.boton1.detectarBoton(220, 380, 180, 50)){
    this.pantalla = 1;
  }
  if(this.pantalla === 5 && this.boton1.detectarBoton(90, 380, 180, 50)){
    this.pantalla = 2;
    if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
   if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
  }
  if(this.pantalla === 5 && this.boton1.detectarBoton(380, 380, 180, 50)){
    this.pantalla = 0;
     if (!sonidoVictoria.isPlaying()) {
    sonidoVictoria.play();
  } else {
    sonidoVictoria.stop();
  }
  }
  if(this.pantalla === 6 && this.boton1.detectarBoton(90, 380, 180, 50)){
    this.pantalla = 2;
    if (!sonidoPelea.isPlaying()) {
    sonidoPelea.play();
  } else {
    sonidoPelea.stop();
  }
   if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
  }
  if(this.pantalla === 6 && this.boton1.detectarBoton(380, 380, 180, 50)){
    this.pantalla = 0;
     if (!sonidoPerdiste.isPlaying()) {
    sonidoPerdiste.play();
  } else {
    sonidoPerdiste.stop();
  }
  }
  
  if(this.pantalla === 7 && this.boton1.detectarBoton(250, 170, 150, 40)){  ////facil
    this.facil = true;
    this.normal = false;
    this.dificil = false;
  }
  if(this.pantalla === 7 && this.boton1.detectarBoton(250, 230, 150, 40)){  ////normal
    this.normal = true;
    this.facil = false;
    this.dificil = false;
  }
  if(this.pantalla === 7 && this.boton1.detectarBoton(250, 290, 150, 40)){  ////dificil
    this.dificil = true;
    this.facil = false;
    this.normal = false;
  }
  }

  texto(x, y, an, al, ts, txt, x2, y2){
    fill(0, 210);
    rect(x, y, an, al);
    fill(255);
    textSize(ts);
    text(txt, x2, y2);
  }
  
  titulo(txt, x, y, tS, c1, c2, c3) {
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
  
  fondo(numero){
    image(imagenes[numero], 0, 0, 640, 480);
  }

  data(ganaste, perdiste){
    this.ganaste = ganaste;
    this.perdiste = perdiste;

  }

}
