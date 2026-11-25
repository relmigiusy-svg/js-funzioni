// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? verificaOraNotturna e un'alttra funzione calcolaTotaleCorsa
  Di quali dati ha bisogno? la prima funzione riceve un'ora la seconda il prezzo base,
  l'ora di partenza e l'ora di arrivo
  Deve restituire qualcosa? la prima restituisce true se è notte, false se no;
  la seconda funzione restituisce il totale.
  Di che tipo? booleano e la seconda numeri.

  STEPS
  1 - scrivo la prima funzione con gli if. Se arriva di notte è true
  2 -
  3 -
*/

// # Le funzioni
function verificaOraNotturna(ora) {
  //let arrivaNotte = false;    avevo scritto questa variabile
  if (ora >= 0 && ora <= 5) {
    return true;
  }
  return false;
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo) {
  if (verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo)) {
    return prezzoBase + 5
  }

  return prezzoBase;
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(verificaOraNotturna(0));
console.log(verificaOraNotturna(5));
console.log(verificaOraNotturna(6));
console.log(verificaOraNotturna(23));
console.log(calcolaTotaleCorsa(20, 22, 23));
console.log(calcolaTotaleCorsa(20, 23, 1));
console.log(calcolaTotaleCorsa(20, 2, 3));
console.log(calcolaTotaleCorsa(20, 5, 6));
console.log(calcolaTotaleCorsa(20, 6, 7));