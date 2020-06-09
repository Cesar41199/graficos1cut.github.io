function ponerPixel(contexto, x, y, color){

  contexto.fillStyle = color; //configura el color para pintado

  //pintar un punto (debe ser 1x1, para mejorar su visualizaci�n es de 3x3)
  contexto.fillRect( x, y, 3, 3 );

}

function dibujar(){ //Esta funci�n es llamada al cargar el documento html

  var canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo

  var contexto = canvas.getContext("2d"); //obtenemos el contexto 2d del lienzo

  ponerPixel(contexto, 100, 120, "#0000FF"); //pintamos el pixel en rojo

} 
