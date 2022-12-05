var datospant=document.getElementById("datospant");
var num1=document.getElementById("num1"); 
var num2=document.getElementById("num2");
var operador;


function imprimirNumeros(num) {
    document.getElementById("datospant").value+=num;
return num;
}

function imprimirOperador(op){
    document.getElementById("datospant").value+=op;
return op;
}

function borrar(){
    document.getElementById("datospant").value="";
}

function calcular(){
    document.getElementById("resultadopant").value = eval(document.getElementById("datospant").value);

}