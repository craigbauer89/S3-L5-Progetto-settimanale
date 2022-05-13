
// let result;

// function add(x,y) {
//      result = x + y;
//     return result;
// }

// function subtract(x,y) {
//      result = x - y;
//     return result;
// }

// function mulitply(x,y) {
//      result = x * y;
//     return result;
// }

// function divide(x,y) {
//      result = x / y;
//     return result;
// }

// let risposta = result;


// let nome;
// let cognome;
// let citta;
// let eta;
// let eta_di_pensione = 70;


// function enterdata() {
//     let nome = document.getElementById('nome').value;
//     // document.getElementById('nome1').innerHTML = nome;
//     let cognome = document.getElementById('cognome').value;
//     // document.getElementById('cognome1').innerHTML = cognome;
//     let citta = document.getElementById('citta').value;
//     // document.getElementById('citta1').innerHTML = citta;
//     let eta = document.getElementById('eta').value;
// //     document.getElementById('eta1').innerHTML = eta;
//     stampautente(nome, cognome, citta, eta);
// }

// function stampautente(nome, cognome, citta, eta ) {
//     document.getElementById('nome1').innerHTML = nome;
//     document.getElementById('cognome1').innerHTML = cognome;
//     document.getElementById('citta1').innerHTML = citta;
//     document.getElementById('eta1').innerHTML = eta;
//     let eta_pensione = pensioncalc(eta);
//     document.getElementById('pensione').innerHTML = eta_pensione;
// }


// // let pensione =  subtract(eta_di_pensione,eta)
// // console.log(pensione);

// function pensioncalc(eta) {
//     let pensione = 70 - eta;
//     return pensione;
// }


// // let pensione =  subtract(eta)
// // console.log(pensione);





// // document.getElementById('pensione').innerHTML = pensione;
// // document.getElementById('risposta').innerHTML = risposta;


// function add() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let result = (+num1) + (+num2);
//     stampavalore(result);

// }

// function subtract() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let result = (num1) - (num2);
//     stampavalore(result);
// }

// function multiply() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     let result = (num1) * (num2);
//         stampavalore(result);
// }

// function divide() {
//     let num1 = document.getElementById('num1').value;
//     let num2 = document.getElementById('num2').value;
//     if (num1  == 0 || num2 == 0){
//     var result = 'You inserted 0';
// }
//     else {
//     var result = (num1) / (num2);
//     }

//     stampavalore(result);
// }

// function stampavalore(risultato) {
//     document.getElementById('risposta').innerHTML = "Il risultato e "+ risultato;
// }

var numero1 =  ' ';
var num1 =  '';
var num2 =  '';
var action = '';

function uno() {
    document.getElementById('risposta').innerHTML += 1;
    numero1  += '1';
    // console.log(numero1);
}



function due() {
    document.getElementById('risposta').innerHTML += 2;
    numero1 += '2';
    // console.log(numero1);
}

function tre() {
    document.getElementById('risposta').innerHTML += 3;
    numero1 += '3';
    // console.log(numero1);
}

function quattro() {
    document.getElementById('risposta').innerHTML += 4;
    numero1 += '4';
    // console.log(numero1);
}

function cinque() {
    document.getElementById('risposta').innerHTML += 5;
    numero1 += '5';
    // console.log(numero1);
}

function sei() {
    document.getElementById('risposta').innerHTML += 6;
    numero1 += '6';
    // console.log(numero1);
}

function sette() {
    document.getElementById('risposta').innerHTML += 7;
    numero1 += '7';
    // console.log(numero1);
}

function otto() {
    document.getElementById('risposta').innerHTML += 8;
    numero1 += '8';
    // console.log(numero1);
}

function nove() {
    document.getElementById('risposta').innerHTML += 9;
    numero1 += '9';
    // console.log(numero1);
}

function zero() {
    document.getElementById('risposta').innerHTML += 0;
    numero1 += '0';
    // console.log(numero1);
}

function punto() {
    document.getElementById('risposta').innerHTML += '.';
    numero1 += '.';
    // console.log(numero1);
}

function cancellare() {
    document.getElementById('risposta').innerHTML =  ' ';
    numero1 = ' ';
    num1 = ' ';
    num2 = ' ';
    
    // console.log(numero1);
}

// function multiply(x,y) {
//     
// }

function moltiplicazione(x,y) {
    document.getElementById('risposta').innerHTML = " ";
    num1 = numero1;
    numero1 = ' ';
    action = 'multiply';
    let moltiplicazione = x * y;
    return moltiplicazione; 
}

function aggiunge(x,y) {
    document.getElementById('risposta').innerHTML = " ";
    num1 = numero1;
    numero1 = ' ';
    action = 'add';
    let moltiplicazione = parseInt(x) + parseInt(y);
    return moltiplicazione; 
}

function meno(x,y) {
    document.getElementById('risposta').innerHTML = " ";
    num1 = numero1;
    numero1 = ' ';
    action = 'subtract';
    let moltiplicazione = x - y;
    return moltiplicazione; 
}

function dividere(x,y) {
    document.getElementById('risposta').innerHTML = " ";
    num1 = numero1;
    numero1 = ' ';
    action = 'divide';
    let moltiplicazione = x / y;
    return moltiplicazione; 
}



function uguale() {

    if (action === 'multiply'){
        num2 = numero1;
        numero1 = '';
        document.getElementById('risposta').innerHTML =moltiplicazione(num1,num2);
    } 
    else if (action === 'add'){
        num2 = numero1;
        numero1 = '';
        document.getElementById('risposta').innerHTML =aggiunge(num1,num2);
    }
    else if (action === 'subtract'){
        num2 = numero1;
        numero1 = '';
        document.getElementById('risposta').innerHTML =meno(num1,num2);
    } 
    else if (action === 'divide'){
        num2 = numero1;
        numero1 = '';
        document.getElementById('risposta').innerHTML =dividere(num1,num2);
    } 
    else {
        num2 = numero1;
        numero1 = '';
        document.getElementById('risposta').innerHTML = numero1;
    } 
} 


