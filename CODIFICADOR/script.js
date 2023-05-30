//La letra e enter
//La letra i imes
//La letra a ai
//La letra o ober
//La letra u ufat

function encriptar () {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace (/e/igm, "enter");
    var txtCifrado = txtCifrado.replace (/o/igm, "ober");
    var txtCifrado = txtCifrado.replace (/i/igm, "imes");
    var txtCifrado = txtCifrado.replace (/a/igm, "ai");
    var txtCifrado = txtCifrado.replace (/u/igm, "ufat");
    
    document.getElementById("logoNino").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar () {
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace (/enter/igm, "e");
    var txtCifrado = txtCifrado.replace (/ober/igm, "o");
    var txtCifrado = txtCifrado.replace (/imes/igm, "i");
    var txtCifrado = txtCifrado.replace (/ai/igm, "a");
    var txtCifrado = txtCifrado.replace (/ufat/igm, "u");

    document.getElementById("logoNino").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
}

function copy () {

    let textarea= document.getElementById("texto2");
    let button= document.getElementById ("copiar");

    navigator.clipboard.writeText(texto2.textContent);
    button.textContent ="copiado";
}


