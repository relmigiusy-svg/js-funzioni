// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaFasciaEta
  Di quali dati ha bisogno? età
  Deve restituire qualcosa? si etichetta
  Di che tipo? stringa

  STEPS
  1 - Imposto la funzione per trovaFasciadeta con eta che è il dato da ricevere
  2 - se un'età negativa restitituisce 'Età non valida'
  3 - Inserisco if, se minore di 18 anni mi restituisce "Minorenne" etc
*/

// # La funzione
function trovaFasciaEta(eta) {
  if (eta < 0) {
    return 'Età non valida'
  }
  else if (eta < 18) {
    return 'Minorenne'
  }
  else if (eta <= 35) {
    return 'Giovane Adulto'
  }
  else if (eta <= 60) {
    return 'Adulto'
  }
  else { return 'Senior' }
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaFasciaEta(0));
console.log(trovaFasciaEta(17));
console.log(trovaFasciaEta(18));
console.log(trovaFasciaEta(35));
console.log(trovaFasciaEta(36));
console.log(trovaFasciaEta(60));
console.log(trovaFasciaEta(61));
console.log(trovaFasciaEta(-3));