// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / 

// L’utente sceglie pari o dispari 
const scegliNumero=prompt("Pari o Dispari");
console.log("L'utente sceglie:",scegliNumero)

// funzione numeri pari o dispari
function pari0Dispari(numero){
    // dichiarazione variabile flag
    let risultato; 

    // condizione
    if(numero % 2 === 0){
        risultato="Pari"
    }else{
        risultato="Dispari"
    }
    
    // ritorna al risultato
    return risultato
}










// inserisce un numero da 1 a 5
const inserisciNumero=parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(inserisciNumero);



// funzione generiamo un numero random da 1 a 5

function numeroRandomPc(numMin,numMax){
    const numeroGenerato= Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    
    return numeroGenerato

}

console.log(numeroRandomPc(1,5));




// somma due numeri 
// const sommaNumeri= pari0Dispari() + numeroRandom(1,5);