const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");



function contador(){
    let hora = new Date;
    horas.innerText=hora.getHours();
    minutos.innerText=hora.getMinutes();
    segundos.innerText=hora.getSeconds();
}


setInterval("contador()",1000);
