var kmTragitto = parseInt(prompt('Quanti km vuole percorrere?'));
var eta = parseInt(prompt('Quanti anni ha?'));
var bigliettoIntero = kmTragitto * 0.21;
var sconto;

if (eta < 18){
    sconto = bigliettoIntero * 20 / 100;
} else if (eta > 65){
    sconto = bigliettoIntero * 40 / 100;
} else {
    sconto = 0;
}

var prezzoFinale = bigliettoIntero - sconto;
prezzoFinale = prezzoFinale.toFixed(2);

document.getElementById('effettivo').innerHTML = prezzoFinale + ' ' + 'euro';
