//Trabajo Final Parte 1
//Alumno: Facundo ansin
//Legajo: 93054/5
//link a video: https://www.youtube.com/watch?v=TzpgH5QHJkQ&ab_channel=FacundoAnsin
//Comision 1


let sonido = [];
let estado;
let imagenes = [];

function preload(){
  for (let i = 0; i < 17; i++) {                                     //Las imagenes cargadas
    imagenes[i] = loadImage(`Assets/imagenes/imagen${i}.jpeg`);
    
  }
  for (let i = 0; i < 2; i++){                                       //Los sonidos cargados
    sonido[i] = loadSound(`Assets/sonido${i}.mp3`);
  }
}
function setup() {
  estado = 0;
  createCanvas(640, 480);
  
}

function draw() {
  if(estado === 0){           //Menu
     fondo(12);
     texto(10, 40, 170, 200, 40, "El Idolo\nDe Las\nCicladas", 15, 100);
     boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
     boton(8, 320, 180, 50, 35, "Creditos", 25, 358);
     
  }else if(estado === 16){    //Pantalla 16
    fondo(16);
    texto(10, 300, 620, 150, 20, "Autor: Julio Cortazar \nCreado por: Facundo Ansin y Marcos Villaro \nComision 1", 15, 320);
    boton(10, 390, 130, 40, 20, "Menu", 45, 415);

  }else if (estado === 1){   //Pantalla 1
    fondo(1);
    texto(10, 140, 617, 130, 25, "En algún lugar de las isla, dos arqueólogos, Somoza \ny Morand, desentierran una curiosa figura dorada, una \nantigua reliquia de alguna una civilización de la isla. ", 20, 180);
    boton(10, 300, 190, 50, 35, "Siguiente", 30, 335);

  }else if (estado === 11) {  //Pantalla 11
    fondo(11);
    texto(10, 310, 617, 110, 25, "Somoza quien muestra especial interés en ella, \ndecide llevarla de regreso a su casa, y exponerla en \nun rincón de su taller.", 20, 340);
    boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
    
  }else if (estado === 2){   //Pantalla 2 - eleccion
    fondo(2);
    texto(5, 190, 630, 180, 23, "Somoza desarrolla un interés cada vez mayor en la extraña\nfigura del ídolo, al punto de que empieza \na sentir como esta tiene un efecto negativo \nsobre el y que se esta obsesionando cada vez mas con \nel ídolo. En ese momento, siente que debe que tomar \nuna decisión definitiva. ", 10, 213);
    boton(80, 380, 190, 50, 25, "Destruir Idolo", 100, 413);
    boton(360, 380, 190, 50, 20, "No Destruir Idolo", 381, 413);
    
  }else if (estado === 12){  //Pantalla 12
    fondo(13);
    texto(10, 310, 600, 140, 35, "Somoza se levanta y sacude el ídolo \ncontra el suelo, destruyéndolo en \npedazos.", 20, 345);
    boton(8, 250, 180, 50, 35, "Siguiente", 25, 288);
  
  }else if (estado === 3){  //Pantalla 3 - Final 1
    fondo(3);
    texto(220, 70, 395, 215, 20, "Tras la destrucción del ídolo, Somoza se \nsienta en el suelo y reflexiona, piensa que \ntomo la decisión correcta, aunque ahora \ntendrá que pensar en como explicarle eso \na su compañero. \n¿Pero que habría pasado de no haberla \ndestruido? \n                             FIN", 230, 100);
    boton(320, 300, 150, 50, 25, "Reiniciar", 345, 335);
        
  }else if (estado === 4){  //Pantalla 4
    fondo(4);
    texto(20, 190, 600, 150, 22, " El arqueólogo, conserva el ídolo, y continua \n con el desarrollo de su obsesión, \n incluso comienza a tallar replicas del mismo, su amigo, \n Morand, quien había accedido a que Somoza conservara el\n ídolo,  empieza a notar su elevado interés en el objeto.", 25, 213);
    boton(90, 360, 260, 60, 35, "Siguiente", 140, 400);
     
  }else if (estado === 13){  //Pantalla 13
    fondo(0);
    texto(10, 355, 600, 100, 21, "El desarrollo de la obsesión de Somoza es cada vez mas \nnotable, el daño es irreversible, preserva el Ídolo como si de su \nmas valiosa posesión se tratase.  ", 15, 380);
    boton(8, 300, 180, 50, 35, "Siguiente", 25, 338);
    
  }else if (estado === 5){  //Pantalla 5 - eleccion
    fondo(5);
    texto(25, 323, 595, 200, 21, "Un día, mientras Morand se encuentra en la casa de Somoza, \neste saca un hacha de piedra y se prepara para atacarlo, \ndiciéndole a Morand que es todo parte de su ritual. \nEl enfrentamiento es inevitable.\n¿Qué Sucederá?", 35, 343);
    boton(30, 250, 200, 60, 20, "Morand mata \n   a Somoza", 70, 275);
    boton(410, 250, 200, 60, 20, "Somoza mata \n   a Morand", 450, 275);

    
  }else if (estado == 6){    //Pantalla 6 - Minijuego
    fondo(14);
    texto(43, 120, 580, 190, 22, "Morand se encuentra arrinconado, Somoza se lanza a \natacarlo con el hacha y Morand le consigue dar un golpe \nen el momento justo. El golpe es preciso y mata a \nSomoza al instante, pero para conseguirlo, tuvo que \nhacer unos movimientos muy precisos.\n                              (MINIJUEGO)", 60, 160);
    boton(170, 390, 270, 70, 35, "Siguiente", 230, 435);

    
  }else if (estado === 7){   //Pantalla 7 - eleccion
    fondo(6);
    texto(65, 220, 540, 140, 21, "Somoza toma desprevenido a Morand, y lo ataca con \nsu hacha, Morand toma el hacha y ambos luchan por la \nposesión del arma, pero finalmente Somoza recupera \nel hacha de un tirón y lanza un segundo ataque, el cual \nalcanza a Morand.", 77, 240);
    boton(80, 380, 190, 50, 20, "Somoza continua", 95, 410);
    boton(360, 380, 190, 50, 20, "Somoza recapacita", 370, 410);
    
  }else if (estado === 14){    //Pantalla 14
    fondo(8);
    texto(100, 240, 470, 140, 25, "Somoza ignora el pensamiento, su plan \n a sido efectuado y ya es muy tarde \n para arrepentirse, Somoza piensa en \n continuar con su ritual.", 120, 270);
    boton(220, 390, 170, 70, 35, "Siguiente", 230, 435);
    
  }else if(estado === 15){    //Pantalla 15
    fondo(15);
    texto(50, 240, 530, 100, 22,"Somoza sostiene el hacha, piensa en lo que hizo, un \npensamiento pasa fugazmente por su mente, \ndestruir el ídolo, el causante de todo...", 60, 270);
    boton(220, 390, 170, 70, 35, "Siguiente", 230, 435);
    
  }else if (estado === 8){   //Pantalla 8 - Final 2
    fondo(7);
    texto(30, 240, 580, 270, 22, "Morand vence, y piensa en que su esposa tendría \nque llegar en cualquier momento. Toma el hacha, y se \nesconde detrás de la puerta mientras escucha al taxi de \nsu mujer estacionando en la calle, \n \n         el ritual debe continuar... \n\n                       FIN ", 40, 270);
    boton(380, 390, 170, 50, 20, "Reiniciar", 418, 420);
    
  }else if (estado === 9){  //Pantalla 9 - Final 3
    fondo(9);
    texto(10, 220, 400, 110, 20, "Parado entre las sombras, Somoza \nespera a la mujer de Morand, la decisión \nesta tomada y sabe lo que tiene que hacer. \n                              FIN", 20, 250);
    boton(125, 350, 170, 50, 20, "Reiniciar", 165, 380);
 
  }else if (estado === 10){    //Pantalla 10 - Final 4
    fondo(10);
    texto(25, 323, 595, 135, 21, "En un arrebato de ira, Somoza destruye el ídolo que lo a \nvuelto loco y a arruinado su vida, pero, el daño ya esta echo... \nsu compañero esta muerto. Sin embargo, siente que es lo \nmejor, ya que detuvo al monstruo en el que se convirtió. \n                                            FIN", 35, 343);
    boton(20, 20, 170, 50, 20, "Reiniciar", 65, 55);
  }
}

function mousePressed(){
  if(estado === 0 && detectarBoton(8, 250, 180, 50)){
    estado = 1;
    sonido[0].stop();                                     //Si al empezar el sonido de alguno de los finales sigue sonando, se detiene
    if(!sonido[1].isPlaying()){                           //Al empezar, el primer sonido empieza
      sonido[1].play();
    }else{
      sonido[1].stop();
  }
  }
  if(estado === 0 && detectarBoton(8, 320, 180, 50)){
    estado = 16;
  }
  if(estado === 16 && detectarBoton(10, 390, 130, 40)){
    estado = 0;
  }
  if(estado === 1 && detectarBoton(10, 300, 190, 50)){
    estado = 11;
  }
  if(estado === 11 && detectarBoton(8, 250, 180, 50)){
    estado = 2;
  }
  if(estado === 2 && detectarBoton(80, 380, 190, 50)){
    estado = 12;
    sonido[1].stop();
    if(!sonido[0].isPlaying()){                            //Tras elegir una "decision de la que no hay vuelta atras" El sonido de fondo se detiene y empieza el sonido de el final
      sonido[0].play();
    }else{
      sonido[0].stop();
  }
  }
  if(estado === 12 && detectarBoton(8, 250, 180, 50)){
    estado = 3;
  }
  if(estado === 2 && detectarBoton(360, 380, 190, 50)){
    estado = 4;
  }
  if(estado === 4 && detectarBoton(90, 360, 260, 60)){
    estado = 13;
  }
  if(estado === 13 && detectarBoton(8, 300, 180, 50)){
    estado = 5;
  }
  if(estado === 5 && detectarBoton(30, 250, 200, 60)){
    estado = 6;
    sonido[1].stop();
    if(!sonido[0].isPlaying()){
      sonido[0].play();
    }else{
      sonido[0].stop();
  }
  }
   if(estado === 5 && detectarBoton(410, 250, 200, 60)){
    estado = 7;
  }
  if(estado === 6 && detectarBoton(170, 390, 270, 70)){
    estado = 8;
  }
  if(estado === 7 && detectarBoton(360, 380, 190, 50)){
    estado = 15;
    sonido[1].stop();
    if(!sonido[0].isPlaying()){
      sonido[0].play();
    }else{
      sonido[0].stop();
  }
  }
   if(estado === 7 && detectarBoton(80, 380, 190, 50)){
    estado = 14;
    sonido[1].stop();
    if(!sonido[0].isPlaying()){
      sonido[0].play();
    }else{
      sonido[0].stop();
  }
  }
  if(estado === 14 && detectarBoton(220, 390, 170, 70)){
    estado = 9;
  }
  if(estado === 15 && detectarBoton(220, 390, 170, 70)){
    estado = 10;
  }
  if(estado === 3 && detectarBoton(320, 300, 150, 50)){
    estado = 0;
  }
  if(estado === 8 && detectarBoton(380, 390, 170, 50)){
    estado = 0;
  }
  if(estado === 9 && detectarBoton(125, 350, 170, 50)){
    estado = 0;
  }
  if(estado === 10 && detectarBoton(20, 20, 170, 50)){
    estado = 0;
  }
}

 
