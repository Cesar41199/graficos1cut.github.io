var lienzoOrigen;
var lienzoResultado;

var ctxOrigen;
var ctxResultado;

var imgOrigen;
var imgResultado;


document.getElementById('cargar').addEventListener('change', leerImagen);
document.getElementById('umbral').addEventListener('input', copiar);

function prepararResultados(){ 
  lienzoResultado = document.getElementById('canvas2');
  ctxResultado = lienzoResultado.getContext('2d');
  lienzoResultado.height = lienzoOrigen.height;
  lienzoResultado.width = lienzoOrigen.width;
  imgOrigen = ctxOrigen.getImageData(0, 0, lienzoOrigen.width, lienzoOrigen.height); 
  imgResultado = ctxResultado.createImageData(lienzoOrigen.width, lienzoOrigen.height);
}

function leerImagen(e){      
  var archivo = e.target.files[0];
  if(archivo){        
    var lector = new FileReader();
    lector.readAsDataURL(archivo);         
    lector.onload = function(event){
      ponerImgEnCanvas(event.target.result);
    }
  }
}

function ponerImgEnCanvas(datosImg){  
  var img = new Image();
  img.src = datosImg;
  img.onload = function(){
    lienzoOrigen = document.getElementById('canvas');
    ctxOrigen = lienzoOrigen.getContext('2d');
    lienzoOrigen.width=img.width;
    lienzoOrigen.height=img.height;
    ctxOrigen.drawImage(img, 0, 0);
    prepararResultados();
  }
}


function copiar(){   
  var i;
  var blanco;
  var u=parseInt(document.getElementById("umbral").value);
  for (i = 0; i < imgOrigen.data.length; i+=4){
   var prom=(imgOrigen.data[i+0]+imgOrigen.data[i+1]+imgOrigen.data[i+2])/3;
   if(prom > u)blanco = 255;else blanco = 0;
      imgResultado.data[i+0] = blanco;
      imgResultado.data[i+1] = blanco;
      imgResultado.data[i+2] = blanco;
      imgResultado.data[i+3] = imgOrigen.data[i+3];
  }

  ctxResultado.putImageData(imgResultado, 0, 0);
 
}








