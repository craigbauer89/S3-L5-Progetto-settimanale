
var numero = ' ';
var num1 =  ' ';
var num2 =  ' ';
var action = ' ';
var risposta = ' ';

function uno() {
    document.getElementById('risposta').innerHTML += 1;
    numero  += '1';
}

function due() {
    document.getElementById('risposta').innerHTML += 2;
    numero += '2';
}

function tre() {
    document.getElementById('risposta').innerHTML += 3;
    numero += '3';
}

function quattro() {
    document.getElementById('risposta').innerHTML += 4;
    numero += '4';
}

function cinque() {
    document.getElementById('risposta').innerHTML += 5;
    numero += '5';
}

function sei() {
    document.getElementById('risposta').innerHTML += 6;
    numero += '6';
}

function sette() {
    document.getElementById('risposta').innerHTML += 7;
    numero += '7';
}

function otto() {
    document.getElementById('risposta').innerHTML += 8;
    numero += '8';
}

function nove() {
    document.getElementById('risposta').innerHTML += 9;
    numero += '9';

}

function zero() {
    document.getElementById('risposta').innerHTML += 0;
    numero += '0';

}

function punto() {
    document.getElementById('risposta').innerHTML += '.';
    numero += '.';

}

function cancellare() {
    document.getElementById('risposta').innerHTML =  ' ';
    numero = ' ';
    num1 = ' ';
    num2 = ' ';
    risposta = ' ';
}

function moltiplicazione(x,y) {
    document.getElementById('risposta').innerHTML += '*';
    num1 = numero;
    numero = ' ';
    action = 'multiply';
    let moltiplicazione = x * y;
    return moltiplicazione; 
}

function aggiunge(x,y) {
    // document.getElementById('risposta').innerHTML = " ";
    document.getElementById('risposta').innerHTML += '+';
    num1 = numero;
    numero = ' ';
    action = 'add';
    let moltiplicazione = parseInt(x) + parseInt(y);
    return moltiplicazione; 
}

function meno(x,y) {
    document.getElementById('risposta').innerHTML += "-";
    num1 = numero;
    numero = ' ';
    action = 'subtract';
    let moltiplicazione = x - y;
    return moltiplicazione; 
}

function dividere(x,y) {
    document.getElementById('risposta').innerHTML += "/";
    num1 = numero;
    numero = ' ';
    action = 'divide';
    let moltiplicazione = x / y;
    return moltiplicazione; 
}

function uguale() {

    if (action === 'multiply'){
            num2 = numero;
            numero = '';
            document.getElementById('risposta').innerHTML =moltiplicazione(num1,num2);
            
    } 
    else if (action === 'add'){
        num2 = numero;
        numero = '';
        document.getElementById('risposta').innerHTML =aggiunge(num1,num2);
    }
    else if (action === 'subtract'){
        num2 = numero;
        numero = '';
        document.getElementById('risposta').innerHTML =meno(num1,num2);
    } 
    else if (action === 'divide'){
        num2 = numero;
        numero = '';
        document.getElementById('risposta').innerHTML =dividere(num1,num2);
    } 
    else {
        num2 = numero;
        numero = '';
        document.getElementById('risposta').innerHTML = ' ';
    } 
} 


