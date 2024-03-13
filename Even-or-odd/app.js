function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funzione per controllare se un numero è pari o dispari
function isPari(numero) {
    return numero % 2 === 0;
}

// Chiedere all'utente di scegliere pari o dispari e inserire un numero da 1 a 5
let sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Generare un numero casuale per il computer
let numeroComputer = generaNumeroCasuale(1, 5);

// Sommare i due numeri
let somma = numeroUtente + numeroComputer;

// Stabilire se la somma è pari o dispari
let risultato = isPari(somma) ? "pari" : "dispari";

// Dichiarare il vincitore
if ((sceltaUtente === "pari" && isPari(somma)) || (sceltaUtente === "dispari" && !isPari(somma))) {
    console.log("Hai vinto!");
} else {
    console.log("Il computer ha vinto!");
}

// Stampa dei risultati
console.log("Il numero del computer è:", numeroComputer);
console.log("La somma dei due numeri è:", somma);
console.log("La somma è:", risultato);
