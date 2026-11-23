// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? contaGiorniDelMese
  Di quali dati ha bisogno? numero del mese
  Deve restituire qualcosa? quanti giorni ha un mese
  Di che tipo? numero

  STEPS
  1 - Imposto la funzione contaGiorniDelMese
  2 - Ricevo il numero del mese
  3- se il mese non esiste, restituisce 0 quindi se mese > 12 e =0
  3 - se <= 12 restituisce quanti giorni ha
*/

// # La funzione
function contaGiorniDelMese(mese) {
  // const mesi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; avevo aggiunto const mesi ma non serve perchè il 
  // numero mesi ce lo passa già 'utente nella variabile mese.
  const numeroGiorniMese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (mese < 1 || mese > 12) {
    return 0
  }
  else {
    return numeroGiorniMese[mese - 1];
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(contaGiorniDelMese(1));
console.log(contaGiorniDelMese(2));
console.log(contaGiorniDelMese(4));
console.log(contaGiorniDelMese(8));
console.log(contaGiorniDelMese(11));
console.log(contaGiorniDelMese(12));
console.log(contaGiorniDelMese(0));
console.log(contaGiorniDelMese(13));

