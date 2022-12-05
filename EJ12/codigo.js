const regexp = /\d\d\/\d\d\/\d\d\d\d/;
const resultadoFecha = document.getElementById("resultadoFecha");

function comprobarFecha(fecha){
    var compr = regexp.test(fecha.value);

    if (compr == true) {
        resultadoFecha.innerText="La fecha "+regexp.exec(fecha.value)+" es correcta.";
    }else{
        resultadoFecha.innerText="La fecha introducida no es correcta";
    }
}

const regexp2 = /.*@.*\..*/;

const resultadoEmail = document.getElementById("resultadoEmail");

function comprobarEmail(email){
    var compr = regexp2.test(email.value);

    if (compr == true) {
        resultadoEmail.innerText="La dirección email "+regexp2.exec(email.value)+" es correcta.";
    }else{
        resultadoEmail.innerText="La dirección email introducida no es correcta";
    }
}
