// Traccia 01 · Lo stato della spedizione
// La consegna è nel README, alla voce "01 · Lo stato della spedizione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaStatoSpedizione
  Di quali dati ha bisogno? codice del pacco
  Deve restituire qualcosa? lo stato del pacco
  Di che tipo? stringa?

  STEPS
  1 - Devo mostrare lo stato del pacco a partire da un codice numerico
  2 - Devo trovare il codice
  3 - Devo restituire risultato In elaborazione per 1, Spedito per 2, Consegnato per 3.
  4- per codici diversi resituisce Stato sconoscouto
*/

// # La funzione
function trovaStatoSpedizione(codicePacco) {
  if (codicePacco === 1)
    return "In elaborazione";
  else if (codicePacco === 2)
    return "Spedito";
  else if (codicePacco === 3)
    return "Consegnato";
  else return "Stato sconosciuto";
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaStatoSpedizione(1));
console.log(trovaStatoSpedizione(2));
console.log(trovaStatoSpedizione(3));
console.log(trovaStatoSpedizione(4));
console.log(trovaStatoSpedizione(0));
console.log(trovaStatoSpedizione('2'));