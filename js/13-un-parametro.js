// Traccia 13 · Un parametro solo
// La consegna è nel README, alla voce "13 · Un parametro solo".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 - 
  2 -
  3 -
*/

// # Le arrow function
const calcolaMancia = totaleConto => totaleConto * 0.10
const formattaPrezzo = prezzoEuro => `${prezzoEuro.toFixed(2)} €`;
const verificaMaggiorenne = eta => eta >= 18;
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaMancia(20));
console.log(calcolaMancia(45));
//console.log(formattaPrezzo(4.5) + '€'); l'€ va aggiunto direttamente nella funzione
console.log(formattaPrezzo(4.5))
console.log(formattaPrezzo(12))
console.log(formattaPrezzo(0.7))
console.log(formattaPrezzo(calcolaMancia(45)));
console.log(verificaMaggiorenne(17))
console.log(verificaMaggiorenne(18))
console.log(verificaMaggiorenne(40))