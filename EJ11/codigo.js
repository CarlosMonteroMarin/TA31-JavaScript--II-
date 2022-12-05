const resultadoSuma = document.getElementById("resultadoSuma");
const resultadoVeces = document.getElementById("resultadoVeces");

let contador=[0];

var dado1= Math.floor(Math.random() * 6) + 1;
var dado2= Math.floor(Math.random() * 6) + 1;
const suma1=dado1+dado2;

for (let index = 0; index < 36000; index++) {
    var dado1= Math.floor(Math.random() * 6) + 1;
    var dado2= Math.floor(Math.random() * 6) + 1;
    var suma= dado1+dado2;

    if (suma == suma1) {
        contador[0] = contador[0] + 1;
    }
}

resultadoSuma.innerText= suma1;
resultadoVeces.innerText=contador[0];


