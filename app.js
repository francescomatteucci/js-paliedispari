function isPalindrome(parola) {
    // Confronto la parola con la sua inversione
    return parola === parola.split('').reverse().join('');
}

// Chiedere all'utente di inserire una parola
let parola = prompt("Inserisci una parola:");

// Controllare se la parola è palindroma e stampare il risultato
if (isPalindrome === parola) {
    console.log(parola + " è una parola palindroma!");
} else {
    console.log(parola + " non è una parola palindroma.");
}