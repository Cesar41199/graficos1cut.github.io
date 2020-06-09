function ponerPixel(contexto, x, y, color){

  contexto.fillStyle = color; //configura el color para pintado

  //pintar un punto (debe ser 1x1, para mejorar su visualización es de 3x3)
  contexto.fillRect( x, y, 3, 3 );

}

function dibujar(){

  var form = document.getElementById("f"); //accedemos al formulario

  var x = parseInt(form.elements["x"].value); //obtenemos el valor de la abscisa

  var y = parseInt(form.elements["y"].value); //obtenemos el valor de la ordenada

  var c = form.elements["c"].value; //obtenemos el color

  var canvas = document.getElementById("lienzo"); //accedemos al lienzo de dibujo

  var contexto = canvas.getContext("2d"); //obtenemos el contexto 2d del lienzo

  ponerPixel(contexto, x, y, c); //pintamos el pixel

  contexto.fillText( "(" + x + "," + y + ")", x+4, y); //mostramos la coordenada
} 
