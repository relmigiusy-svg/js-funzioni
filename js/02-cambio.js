// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaDollariRicevuti
  Di quali dati ha bisogno? l'impotto in euro, il tasso di cambio del giorno e la commissione
  Deve restituire qualcosa? i dollari che ricevo
  Di che tipo? numero?

  STEPS
  1 - Ho un importo in euro
  2 - All'areoporto mi aggiungono commissione di 5 euro
  3 - quindi se il mio importo è di 100 euro, mi restituiscono 95 euro.
  4 - poi devo fare cambio con tasso in dollari per avere il ritorno
  5 - se l'importo è minore di 5 euro restituisce 0.
*/

// # La funzione
function calcolaDollariRicevuti(importoEuro, tassoCambio, commissione) {
  if (importoEuro <= commissione)
    return 0;
  else if (importoEuro > commissione)
    return (importoEuro - commissione) * tassoCambio

}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(`100€ diventano ${calcolaDollariRicevuti(100, 1.08, 5).toFixed(2)}$`);
console.log(`100€ diventano ${calcolaDollariRicevuti(250, 1.08, 5).toFixed(2)}$`);
console.log(`100€ diventano ${calcolaDollariRicevuti(100, 1.12, 0).toFixed(2)}$`);
console.log(`100€ diventano ${calcolaDollariRicevuti(3, 1.08, 5).toFixed(2)}$`);
console.log(calcolaDollariRicevuti(100, 5, 1.08));


