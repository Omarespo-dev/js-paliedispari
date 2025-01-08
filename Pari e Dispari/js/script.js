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

// inserisce un numero da 1 a 5
const inserisciNumero=parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log("Il numero Utente è:",inserisciNumero);

// Numero generato dal pc  // funzione generiamo un numero random da 1 a 5
const numeroPc= numeroRandomPc(1,5);
console.log("Il numero del Pc è:",numeroPc)


// somma due numeri 
const sommaNumeri= inserisciNumero+ numeroPc;
console.log("La somma dei numeri è:",sommaNumeri)

// Determina se il numero e pari o dispari

let risultatoVerifica= pari0Dispari(sommaNumeri);
console.log("La somma è:",risultatoVerifica)


// Dichiaramo chi ha vinto



/// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /FUNZIONI / / / / / / / / / / / / / / / / / / / / / 

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



// funzione generiamo un numero random da 1 a 5

function numeroRandomPc(numMin,numMax){
    const numeroGenerato= Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    
    return numeroGenerato

}



