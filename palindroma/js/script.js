// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



// Chiedere all’utente di inserire una parola
const userWord= prompt("Inserisci una parola");
console.log(parolaPalindroma(userWord));


// Creare una funzione per capire se la parola inserita è palindroma
function parolaPalindroma(parola){
    
    // Parola Palindroma
    let palindromaParola= " ";
    
    // Parola inversa presa da function
    let inversaParola=parolaInversa(parola);

    // Condizione dove impostiamo una condizione 
    if(parola == inversaParola){
        palindromaParola="Questa parola è Palindroma"
    } else{
        palindromaParola="Questa parola non è Palindroma "
    }
    return palindromaParola
}


// Parola inversa
function parolaInversa(parola){
    return parola.split("").reverse().join("")
}