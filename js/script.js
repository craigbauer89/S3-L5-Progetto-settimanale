var numero = ' ';
var num1 =  ' ';
var num2 =  ' ';
var action = ' ';
var risposta = ' ';
var nuovaRisposta = ' ';

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
    console.log(numero);

}

function meno2() {
    document.getElementById('risposta').innerHTML += '-';
    numero += '-';

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
    document.getElementById('risposta').innerHTML += '+';
    num1 = numero;
    numero = ' ';
    action = 'add';
    let aggiunge = (parseFloat(x)) + (parseFloat(y));
    return aggiunge; 
}

function meno(x,y) {
    document.getElementById('risposta').innerHTML += "-";
    num1 = numero;
    numero = ' ';
    action = 'subtract';
    let meno = x- y;
    return meno; 
}

function dividere(x,y) {
    document.getElementById('risposta').innerHTML += "/";
    num1 = numero;
    numero = ' ';
    action = 'divide';
    let dividere = x / y;   
    return dividere; 
}

function uguale() {

    if (action === 'multiply'){
        if (risposta !== ' ') {
            num2 = numero;
            risposta = document.getElementById('risposta').innerHTML =moltiplicazione(risposta,num2);
            action = ' ';
            
        } else {
            num2 = numero;
            numero = '';
            risposta = document.getElementById('risposta').innerHTML =moltiplicazione(num1,num2);
            action = ' ';
        }   
        
    }
    else if (action === 'add'){
        if (risposta !== ' ') {
            num2 = numero;
            risposta = document.getElementById('risposta').innerHTML =aggiunge(risposta,num2);
            action = ' ';


        } else {
            num2 = numero;
            numero = '';
            risposta = document.getElementById('risposta').innerHTML =aggiunge(num1,num2);
            action = ' ';

        }
    }
    else if (action === 'subtract'){
        if (risposta !== ' ') {
            num2 = numero;
            nuovaRisposta = document.getElementById('risposta').innerHTML =meno(risposta,num2);
            risposta = nuovaRisposta;
            action = ' ';

        } else {
            num2 = numero;
            numero = '';
            risposta = document.getElementById('risposta').innerHTML =meno(num1,num2);
            action = ' ';
        }
    } 
    else if (action === 'divide'){
        if (risposta !== ' ') {
            num2 = numero;
            risposta = document.getElementById('risposta').innerHTML =dividere(risposta,num2);
            action = ' ';

        } else {
            num2 = numero;
            numero = '';
            risposta = document.getElementById('risposta').innerHTML =dividere(num1,num2);
            action = ' ';
        }
    } 
    else {
        num2 = numero;
        numero = '';
        document.getElementById('risposta').innerHTML = 'err';
    } 
} 




