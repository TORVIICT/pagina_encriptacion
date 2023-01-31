//texto introdasducido en una variable
//funciones

function pantalla(elemento) {
    document.getElementById('contenido').classList.add('cssInsertado');
    var x = document.getElementById('contenido');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
        var texto = elemento;
        x.innerHTML = texto;
    }
  };


function encriptar(texto) {

    var texto = document.getElementById('texto').value;
    var result = [];
    var textoResult = ""
      for (var i = 0; i< texto.length; i++) {

            var caracter = texto.charAt(i);
            

            if( caracter == "a" || caracter == "A") {
              caracter = "ai";
             };
            if( caracter == "o" || caracter == "O") {
              caracter = "ober";
            };
            if( caracter == "u" || caracter == "U") {
              caracter = "ufat";
            };
            if( caracter == "i" || caracter == "I") {
              caracter = "imes";
            };
            if( caracter == "e" || caracter == "E") {
              caracter = "enter";
            };

            result.push(caracter);

            textoResult += result[i];
            
             };
             
             console.log(textoResult);
             pantalla(textoResult);
             
       };

function descencriptar(){

  var texto = document.getElementById('texto').value;

    for (i=0;i <1;i++){
        texto = texto.replace(/enter/gi,"e");
        texto = texto.replace(/ai/gi,"a");
        texto = texto.replace(/imes/gi,"i");
        texto = texto.replace(/ober/gi,"o");
        texto = texto.replace(/ufat/gi,"u");

}

console.log(texto)
pantalla(texto);
  

};


//Funcion copiara
function copiarAlPortapapeles() {
  let textocopiado = document.getElementById('contenido');
  navigator.clipboard.writeText(textocopiado.textContent);
  
}
    
